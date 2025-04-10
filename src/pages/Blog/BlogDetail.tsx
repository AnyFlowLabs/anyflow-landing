import { useEffect, useState, useRef } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
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
  VisuallyHidden,
  chakra,
  Skeleton,
} from "@chakra-ui/react";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlog";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPostSkeleton } from "@/components/blog/LoadingState";
import { ActionCTA } from "@/components/blog/ActionCTA";
import { TwitterFeed } from "@/components/blog/TwitterFeed";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowLeftIcon, RefreshCw } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, isLoading, error } = useBlogPost(slug || "");
  const { posts } = useBlogPosts(1, 100); // Get more posts for recommendations
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  const bgColor = useColorModeValue("gray.50", "gray.900");

  useEffect(() => {
    // Reset scroll position when slug changes
    window.scrollTo(0, 0);
    setContentLoaded(false);
    setCurrentUrl(window.location.href);
    
    // Focus on main content for better keyboard navigation
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }

    // Mark content as loaded after small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <VisuallyHidden>Loading blog post content</VisuallyHidden>
        <BlogPostSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      {post && (
        <Helmet>
          <title>{post.title} | AnyFlow Blog</title>
          <meta name="description" content={post.description} />
          <meta name="keywords" content={post.tags} />
          <meta name="author" content={post.author?.name || "AnyFlow Team"} />
          <meta name="language" content="en" />
          <meta name="robots" content="index, follow" /> 

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:url" content={currentUrl} />
          {post.cover?.url && (
            <>
              <meta property="og:image" content={post.cover.url} />
              <meta property="og:image:alt" content={`Featured image for "${post.title}"`} />
            </>
          )}

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description} />
          {post.cover?.url && (
            <>
              <meta name="twitter:image" content={post.cover.url} />
              <meta name="twitter:image:alt" content={`Featured image for "${post.title}"`} />
            </>
          )}

          {/* Canonical URL */}
          <link rel="canonical" href={currentUrl} />
        </Helmet>
      )}

      {/* Add Schema.org structured data */}
      {post && currentUrl && <ArticleSchema post={post} url={currentUrl} />}

      <chakra.div 
        as="article"
        pt={8} 
        pb={16}
        ref={mainContentRef}
        tabIndex={-1}
        outline="none"
        role="region"
        aria-label={post ? post.title : "Blog post"}
      >
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
          <Button
            as={RouterLink}
            to="/blog"
            leftIcon={<ArrowLeftIcon size={16} />}
            variant="ghost"
            mb={8}
            size="sm"
            aria-label="Back to all posts"
          >
            Back to all posts
          </Button>

          {error ? (
            <Alert status="error" borderRadius="md" role="alert">
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
                aria-label="Retry loading the blog post"
              >
                Retry
              </Button>
            </Alert>
          ) : post ? (
            <>
              {/* Render content with progressive enhancement */}
              {contentLoaded ? (
                <BlogContent post={post} />
              ) : (
                <Skeleton height="400px" />
              )}

              {/* Related Posts Section */}
              {posts.length > 0 && contentLoaded && (
                <RelatedPosts currentPost={post} allPosts={posts} />
              )}

              {/* CTA Section */}
              {contentLoaded && (
                <Container maxW="6xl" mt={{ base: 8, md: 12 }}>
                  <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                    <ActionCTA />
                    <TwitterFeed />
                  </SimpleGrid>
                </Container>
              )}
            </>
          ) : null}
        </Box>
      </chakra.div>
    </Layout>
  );
};

export default BlogDetail;
