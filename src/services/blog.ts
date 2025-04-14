import { BlogPostContent, BlogPostResponse, BlogPostsResponse } from '@/types/blog';
import axios from 'axios';

const API_URL = import.meta.env.VITE_STRAPI_API_URL;
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

// Create an axios instance with default config
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
    }
});

export const prependStrapiApiUrl = (url: string) => {
    return `${API_URL}${url}`;
};

const convertUrlsToAbsolute = (data: BlogPostsResponse) => {
    data.data.forEach(post => {
        if (post.cover) {
            post.cover.url = prependStrapiApiUrl(post.cover.url);
        }
    });
    return data;
};

/**
 * Fetches all blog posts with pagination support
 */
export const getAllBlogPosts = async (
    page: number = 1,
    pageSize: number = 10,
): Promise<BlogPostsResponse> => {
    try {
        const urlParamsObject = {
            pagination: {
                page,
                pageSize,
            },
            locale: 'en',
            sort: { createdAt: "desc" },
            populate: {
                cover: { fields: ['url'] },
                author: {
                    fields: ['name'],
                    populate: {
                        avatar: {
                            fields: ['url']
                        }
                    }
                }
            },
            // Only with tag 'anyflow'
            filters: {
                tags: {
                    $contains: 'anyflow'
                }
            }
        };

        const response = await apiClient.get<BlogPostsResponse>('/api/articles', {
            params: urlParamsObject
        });

        return convertUrlsToAbsolute(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching blog posts:', error.response?.data || error.message);
            throw new Error(`Failed to fetch blog posts: ${error.response?.statusText || error.message}`);
        }
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

/**
 * Fetches a single blog post by slug
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPostResponse> => {
    try {
        const urlParamsObject = {
            filters: {
                slug: {
                    $eq: slug
                }
            },
            locale: 'en',
            populate: {
                cover: { fields: ['url'] },
                seo: { fields: ["metaTitle", "metaDescription", "metaKeywords"] },
                blocks: {
                    populate: "*",
                },
                author: {
                    fields: ['name'],
                    populate: {
                        avatar: {
                            fields: ['url']
                        }
                    }
                }
            }
        };

        const response = await apiClient.get<BlogPostsResponse>('/api/articles', {
            params: urlParamsObject
        });

        const posts = response.data;

        // If no post was found with this slug
        if (posts.data.length === 0) {
            throw new Error(`Blog post with slug "${slug}" not found`);
        }

        const post = convertUrlsToAbsolute(posts);

        const postContent = post.data[0] as BlogPostContent;

        // Return the first (and should be only) post matching the slug
        return { data: postContent, meta: {} };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Error fetching blog post with slug "${slug}":`, error.response?.data || error.message);
            throw new Error(`Failed to fetch blog post: ${error.response?.statusText || error.message}`);
        }
        console.error(`Error fetching blog post with slug "${slug}":`, error);
        throw error;
    }
}; 