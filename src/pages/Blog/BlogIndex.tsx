import { useEffect } from 'react';
import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { useBlogPosts } from '@/hooks/useBlog';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { BlogIndexSkeleton } from '@/components/blog/LoadingState';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { RefreshCw } from 'lucide-react';

const BlogIndex = () => {
    const {
        posts,
        isLoading,
        error,
        pagination,
        handlePageChange,
    } = useBlogPosts();

    const bgColor = useColorModeValue('gray.50', 'gray.900');

    // Set title and description
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <BlogIndexSkeleton />;
    }

    return (
        <Layout>
            <Helmet>
                <title>Blog | AnyFlow</title>
                <meta name="description" content="Latest articles, updates, and news from AnyFlow" />
            </Helmet>

            <Box bg={bgColor} minH="100vh" py={8}>
                <Container maxW="6xl">
                    <Box textAlign="center" mb={10}>
                        <Heading as="h1" size="2xl" mb={3}>
                            Our Blog
                        </Heading>
                        <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                            Latest articles, updates, and news from AnyFlow
                        </Text>
                    </Box>

                    {error ? (
                        <Alert status="error" borderRadius="md" mb={8}>
                            <AlertIcon />
                            <Box flex="1">
                                <AlertTitle>Error loading blog posts</AlertTitle>
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
                    ) : posts.length === 0 ? (
                        <Box textAlign="center" py={10}>
                            <Text fontSize="lg">No blog posts found.</Text>
                        </Box>
                    ) : (
                        <>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                                {posts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </SimpleGrid>

                            <Pagination
                                currentPage={pagination.currentPage}
                                totalPages={pagination.totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </Container>
            </Box>
        </Layout>
    );
};

export default BlogIndex; 