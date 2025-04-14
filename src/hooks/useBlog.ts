import { useState, useEffect } from 'react';
import { BlogPost, BlogPostsResponse } from '@/types/blog';
import { getAllBlogPosts, getBlogPostBySlug } from '@/services/blog';

export const useBlogPosts = (initialPage: number = 1, pageSize: number = 9) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [pagination, setPagination] = useState({
        currentPage: initialPage,
        pageSize,
        totalPages: 0,
        totalItems: 0,
    });

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response: BlogPostsResponse = await getAllBlogPosts(
                    pagination.currentPage,
                    pagination.pageSize
                );

                setPosts(response.data);
                setPagination(prev => ({
                    ...prev,
                    totalPages: response.meta.pagination.pageCount,
                    totalItems: response.meta.pagination.total,
                }));
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch blog posts'));
                console.error('Error fetching blog posts:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [pagination.currentPage, pagination.pageSize]);

    const handlePageChange = (newPage: number) => {
        setPagination(prev => ({
            ...prev,
            currentPage: newPage,
        }));

        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
        posts,
        isLoading,
        error,
        pagination,
        handlePageChange,
    };
};

export const useBlogPost = (slug: string) => {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await getBlogPostBySlug(slug);
                setPost(response.data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error(`Failed to fetch blog post with slug "${slug}"`));
                console.error(`Error fetching blog post with slug "${slug}":`, err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return {
        post,
        isLoading,
        error,
    };
}; 