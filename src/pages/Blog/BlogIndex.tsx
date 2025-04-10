import { useEffect, useRef } from "react";
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
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useBlogPosts } from "@/hooks/useBlog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { BlogIndexSkeleton } from "@/components/blog/LoadingState";
import { FeaturedPostCard } from "@/components/blog/FeaturedPostCard";
import { ActionCTA } from "@/components/blog/ActionCTA";
import { TwitterFeed } from "@/components/blog/TwitterFeed";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { RefreshCw } from "lucide-react";

const BlogIndex = () => {
  const { posts, isLoading, error, pagination, handlePageChange } =
    useBlogPosts();
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Move focus to main content when page changes
    if (pagination.currentPage > 1 && mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, [pagination.currentPage]);

  if (isLoading) {
    return <BlogIndexSkeleton />;
  }

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];

  // Create structured data for blog posts
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "AnyFlow Blog",
    description:
      "Insights, tutorials, and updates from the AnyFlow team about workflow automation and best practices.",
    url: window.location.href,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "AnyFlow",
      },
      url: `${window.location.origin}/blog/${post.slug}`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Blog | AnyFlow - Workflow Automation Insights & Tutorials</title>
        <meta
          name="description"
          content="Discover the latest articles, tutorials, and news from AnyFlow about workflow automation, best practices, and product updates."
        />
        <link rel="canonical" href="https://anyflow.org/blog" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Box as="header" py={{ base: 4, md: 16 }} boxShadow="sm" role="banner">
        <Container maxW="6xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              AnyFlow Blog
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW={{ base: "100%", md: "4xl" }}
            >
              Insights, tutorials, and updates from the AnyFlow team. We share
              our knowledge about workflow automation, best practices, and how
              to get the most out of AnyFlow.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container
        as="main"
        id="main-content"
        ref={mainContentRef}
        maxW="6xl"
        tabIndex={-1}
      >
        {error ? (
          <Alert status="error" borderRadius="md" mb={8} role="alert">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Error loading blog posts</AlertTitle>
              <AlertDescription display="block">
                {error.message}
              </AlertDescription>
            </Box>
            <Button
              rightIcon={<RefreshCw size={16} aria-hidden="true" />}
              onClick={() => window.location.reload()}
              size="sm"
              aria-label="Retry loading blog posts"
            >
              Retry
            </Button>
          </Alert>
        ) : posts.length === 0 ? (
          <Box textAlign="center" py={10} role="status">
            <Text fontSize="lg">No blog posts found.</Text>
          </Box>
        ) : (
          <>
            <VisuallyHidden>
              <Heading as="h2">Blog contents</Heading>
            </VisuallyHidden>

            {featuredPost && (
              <Box
                as="section"
                aria-labelledby="featured-article-heading"
                mb={12}
              >
                <Heading as="h2" id="featured-article-heading" size="lg" mb={6}>
                  Featured Article
                </Heading>
                <FeaturedPostCard post={featuredPost} />
              </Box>
            )}

            {regularPosts.length > 0 && (
              <Box
                as="section"
                aria-labelledby="latest-articles-heading"
                mb={12}
              >
                <Heading as="h2" id="latest-articles-heading" size="lg" mb={6}>
                  Latest Articles
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </SimpleGrid>
              </Box>
            )}

            <Box as="section" mb={8} pt={8}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={10}
                aria-label="Additional resources"
              >
                <ActionCTA />
                <TwitterFeed />
              </SimpleGrid>
            </Box>

            <Box as="nav" aria-label="Pagination">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </Box>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default BlogIndex;
