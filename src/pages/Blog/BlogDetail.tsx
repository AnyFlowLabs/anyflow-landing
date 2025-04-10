import { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useColorModeValue,
} from '@chakra-ui/react';
import { useBlogPost } from '@/hooks/useBlog';
import { BlogContent } from '@/components/blog/BlogContent';
import { BlogPostSkeleton } from '@/components/blog/LoadingState';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { ArrowLeftIcon, RefreshCw } from 'lucide-react';

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { post, isLoading, error } = useBlogPost(slug || '');

    const bgColor = useColorModeValue('gray.50', 'gray.900');

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    {post.cover?.url && (
                        <meta property="og:image" content={post.cover.url} />
                    )}
                </Helmet>
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
                        <BlogContent post={post} />
                    ) : null}
                </Box>
            </Box>
        </Layout>
    );
};

export default BlogDetail; 