import { BlogPost, BlogPostContent } from '@/types/blog';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
    post: BlogPostContent | BlogPost;
    url: string;
}

export const ArticleSchema = ({ post, url }: ArticleSchemaProps) => {
    // Get author info
    const authorName = post.author?.name || 'AnyFlow Team';
    const authorUrl = post.author?.documentId
        ? `https://anyflow.com/team/${post.author.documentId}`
        : 'https://anyflow.com/team';

    // Get image
    const imageUrl = post.cover?.url
        ? new URL(post.cover.url, 'https://anyflow.com').toString()
        : 'https://anyflow.com/default-og-image.jpg';

    // Get dates in ISO format
    const datePublished = new Date(post.publishedAt).toISOString();
    const dateModified = new Date(post.updatedAt).toISOString();

    // Extract tags
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

    // Create schema
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: imageUrl,
        datePublished,
        dateModified,
        author: {
            '@type': 'Person',
            name: authorName,
            url: authorUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'AnyFlow',
            logo: {
                '@type': 'ImageObject',
                url: 'https://anyflow.com/logo.png'
            }
        },
        url,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        keywords: tags.join(', ')
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}; 