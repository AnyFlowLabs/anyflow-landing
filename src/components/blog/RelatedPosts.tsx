import { BlogPost, BlogPostContent } from '@/types/blog';
import {
    Box,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
    currentPost: BlogPostContent | BlogPost;
    allPosts: BlogPost[];
}

export const RelatedPosts = ({ currentPost, allPosts }: RelatedPostsProps) => {
    const bgColor = useColorModeValue('white', 'gray.800');

    // Find related posts based on tags
    const getRelatedPosts = (): BlogPost[] => {
        if (!currentPost || !allPosts || allPosts.length === 0) return [];

        // Get current post tags as an array
        const currentTags = currentPost.tags ? currentPost.tags.split(',').map(tag => tag.trim()) : [];

        if (currentTags.length === 0) return [];

        // Score other posts based on tag matches
        const scoredPosts = allPosts
            .filter(post => post.id !== currentPost.id) // Exclude current post
            .map(post => {
                const postTags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];
                const matchCount = postTags.filter(tag => currentTags.includes(tag)).length;
                return { post, score: matchCount };
            })
            .filter(item => item.score > 0) // Only include posts with at least one matching tag
            .sort((a, b) => b.score - a.score); // Sort by score (highest first)

        // Return top 3 related posts
        return scoredPosts.slice(0, 3).map(item => item.post);
    };

    const relatedPosts = getRelatedPosts();

    if (relatedPosts.length === 0) return null;

    return (
        <Box
            bg={bgColor}
            borderRadius="lg"
            p={6}
            shadow="md"
            mt={8}
        >
            <Heading as="h2" size="xl" mb={6}>
                Related Articles
            </Heading>

            {relatedPosts.length > 0 ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {relatedPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </SimpleGrid>
            ) : (
                <Text>No related articles found.</Text>
            )}
        </Box>
    );
}; 