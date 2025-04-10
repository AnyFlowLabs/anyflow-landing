import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useColorModeValue,
    Container,
    Divider,
    SimpleGrid,
} from '@chakra-ui/react';
import { useBlogPost, useBlogPosts } from '@/hooks/useBlog';
import { BlogContent } from '@/components/blog/BlogContent';
import { BlogPostSkeleton } from '@/components/blog/LoadingState';
import { ActionCTA } from '@/components/blog/ActionCTA';
import { TwitterFeed } from '@/components/blog/TwitterFeed';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ArticleSchema } from '@/components/blog/ArticleSchema';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { ArrowLeftIcon, RefreshCw } from 'lucide-react';

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { post, isLoading, error } = useBlogPost(slug || '');
    const { posts } = useBlogPosts(1, 100); // Get more posts for recommendations
    const [currentUrl, setCurrentUrl] = useState<string>('');

    const bgColor = useColorModeValue('gray.50', 'gray.900');

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentUrl(window.location.href);
    }, [slug]);

    if (isLoading) {
        return <BlogPostSkeleton />;
    }

    return (
        <Layout>
            {post && (
                <Helmet>
                    <title>{post.title} | AnyFlow Blog</title>
                    <meta name="description" content={post.description} />
                    <meta name="keywords" content={post.tags} />
                    <meta name="author" content={post.author?.name || 'AnyFlow Team'} />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={post.description} />
                    <meta property="og:url" content={currentUrl} />
                    {post.cover?.url && (
                        <meta property="og:image" content={post.cover.url} />
                    )}

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={post.title} />
                    <meta name="twitter:description" content={post.description} />
                    {post.cover?.url && (
                        <meta name="twitter:image" content={post.cover.url} />
                    )}

                    {/* Canonical URL */}
                    <link rel="canonical" href={currentUrl} />
                </Helmet>
            )}

            {/* Add Schema.org structured data */}
            {post && currentUrl && (
                <ArticleSchema post={post} url={currentUrl} />
            )}

            <Box bg={bgColor} minH="100vh" pt={8} pb={16}>
                <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
                    <Button
                        as={RouterLink}
                        to="/blog"
                        leftIcon={<ArrowLeftIcon size={16} />}
                        variant="outline"
                        mb={8}
                        size="sm"
                    >
                        Back to all posts
                    </Button>

                    {error ? (
                        <Alert status="error" borderRadius="md">
                            <AlertIcon />
                            <Box flex="1">
                                <AlertTitle>Error loading blog post</AlertTitle>
                                <AlertDescription display="block">
                                    {error.message}
                                </AlertDescription>
                            </Box>
                            <Button
                                rightIcon={<RefreshCw size={16} />}
                                onClick={() => window.location.reload()}
                                size="sm"
                            >
                                Retry
                            </Button>
                        </Alert>
                    ) : post ? (
                        <>
                            <BlogContent post={post} />

                            {/* Related Posts Section */}
                            {posts.length > 0 && (
                                <RelatedPosts currentPost={post} allPosts={posts} />
                            )}

                            {/* CTA Section */}
                            <Container maxW="6xl" mt={12}>
                                <Divider mb={12} />
                                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                                    <ActionCTA />
                                    <TwitterFeed />
                                </SimpleGrid>
                            </Container>
                        </>
                    ) : null}
                </Box>
            </Box>
        </Layout>
    );
};

export default BlogDetail; 