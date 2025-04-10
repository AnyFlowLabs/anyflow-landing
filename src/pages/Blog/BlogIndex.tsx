import { useEffect, useRef, useState } from "react";
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
  chakra,
  Skeleton,
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
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Mark content as loaded after small delay for progressive enhancement
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Move focus to main content when page changes
    if (pagination.currentPage > 1 && mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, [pagination.currentPage]);

  if (isLoading) {
    return (
      <Layout>
        <VisuallyHidden>Loading blog posts</VisuallyHidden>
        <BlogIndexSkeleton />
      </Layout>
    );
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
        <title>AnyFlow Blog - Insights on Workflow Automation</title>
        <meta
          name="description"
          content="Explore insights, tutorials, and updates from the AnyFlow team about workflow automation and best practices."
        />
        <meta
          name="keywords"
          content="workflow automation, blockchain, web3, AnyFlow, tutorials"
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AnyFlow Blog - Insights on Workflow Automation" />
        <meta
          property="og:description"
          content="Explore insights, tutorials, and updates from the AnyFlow team about workflow automation and best practices."
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="AnyFlow Blog" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AnyFlow Blog - Insights on Workflow Automation" />
        <meta
          name="twitter:description"
          content="Explore insights, tutorials, and updates from the AnyFlow team about workflow automation and best practices."
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <chakra.main
        ref={mainContentRef}
        tabIndex={-1}
        outline="none"
        role="main"
        aria-label="Blog posts"
        id="main-content"
      >
        <VStack spacing={0} align="stretch">
          {/* Hero Section */}
          <Box py={16} textAlign="center">
            <Container maxW="4xl">
              <Heading as="h1" size="2xl" mb={4}>
                AnyFlow Blog
              </Heading>
              <Text fontSize="xl" opacity={0.8}>
                Insights, tutorials, and updates from the AnyFlow team
              </Text>
            </Container>
          </Box>

          {/* Main Content */}
          <Container maxW="6xl" py={12}>
            {error ? (
              <Alert
                status="error"
                borderRadius="md"
                mb={8}
                flexDir={{ base: "column", sm: "row" }}
                role="alert"
              >
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
                  mt={{ base: 4, sm: 0 }}
                  aria-label="Retry loading blog posts"
                >
                  Retry
                </Button>
              </Alert>
            ) : (
              <>
                {/* Featured Post Section */}
                {featuredPost && (
                  <Box mb={16}>
                    <Heading as="h2" size="lg" mb={6} id="featured-post">
                      Featured Post
                      <VisuallyHidden>: {featuredPost.title}</VisuallyHidden>
                    </Heading>
                    {contentLoaded ? (
                      <FeaturedPostCard post={featuredPost} />
                    ) : (
                      <Skeleton height="400px" borderRadius="xl" />
                    )}
                  </Box>
                )}

                {/* Regular Posts Grid */}
                <Box mb={16}>
                  <Heading as="h2" size="lg" mb={6} id="latest-posts">
                    Latest Posts
                  </Heading>
                  {contentLoaded ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                      {regularPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </SimpleGrid>
                  ) : (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} height="320px" borderRadius="lg" />
                      ))}
                    </SimpleGrid>
                  )}
                </Box>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <Box mb={16} textAlign="center">
                    <Pagination
                      currentPage={pagination.currentPage}
                      totalPages={pagination.totalPages}
                      onPageChange={handlePageChange}
                    />
                  </Box>
                )}

                {/* CTA Section */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mb={16}>
                  <ActionCTA />
                  <TwitterFeed />
                </SimpleGrid>
              </>
            )}
          </Container>
        </VStack>
      </chakra.main>
    </Layout>
  );
};

export default BlogIndex;
