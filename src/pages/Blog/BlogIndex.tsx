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
    VStack,
    Divider,
} from '@chakra-ui/react';
import { useBlogPosts } from '@/hooks/useBlog';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { BlogIndexSkeleton } from '@/components/blog/LoadingState';
import { FeaturedPostCard } from '@/components/blog/FeaturedPostCard';
import { ActionCTA } from '@/components/blog/ActionCTA';
import { TwitterFeed } from '@/components/blog/TwitterFeed';
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
    const headerBgColor = useColorModeValue('white', 'gray.800');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

    // Set title and description
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <BlogIndexSkeleton />;
    }

    // Get the featured post (most recent)
    const featuredPost = posts.length > 0 ? posts[0] : null;
    // Get the rest of the posts
    const regularPosts = posts.length > 1 ? posts.slice(1) : [];

    return (
        <Layout>
            <Helmet>
                <title>Blog | AnyFlow</title>
                <meta name="description" content="Latest articles, updates, and news from AnyFlow" />
            </Helmet>

            <Box bg={bgColor} minH="100vh">
                {/* Header Section with Introduction */}
                <Box bg={headerBgColor} py={16} boxShadow="sm">
                    <Container maxW="6xl">
                        <VStack spacing={4} textAlign="center">
                            <Heading as="h1" size="2xl">
                                AnyFlow Blog
                            </Heading>
                            <Text fontSize="xl" color={secondaryTextColor} maxW="800px">
                                Insights, tutorials, and updates from the AnyFlow team. We share our knowledge about workflow automation,
                                best practices, and how to get the most out of AnyFlow.
                            </Text>
                        </VStack>
                    </Container>
                </Box>

                <Container maxW="6xl" py={12}>
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
                            {/* Featured Post Section */}
                            {featuredPost && (
                                <Box mb={12}>
                                    <Heading as="h2" size="lg" mb={6}>
                                        Featured Article
                                    </Heading>
                                    <FeaturedPostCard post={featuredPost} />
                                </Box>
                            )}

                            {/* Regular Posts Section */}
                            <Box mb={12}>
                                <Heading as="h2" size="lg" mb={6}>
                                    Latest Articles
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                                    {regularPosts.map((post) => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </SimpleGrid>
                            </Box>

                            {/* CTA Section */}
                            <Box mb={8} pt={8}>
                                <Divider mb={12} />
                                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                                    <ActionCTA />
                                    <TwitterFeed />
                                </SimpleGrid>
                            </Box>

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