import { BlogPost, BlogPostContent } from '@/types/blog';
import {
    Box,
    Flex,
    HStack,
    Tag,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { Clock, Eye } from 'lucide-react';

interface PostMetadataProps {
    post: BlogPostContent | BlogPost;
}

export const PostMetadata = ({ post }: PostMetadataProps) => {
    const bgColor = useColorModeValue('gray.50', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400');
    const tagBgColor = useColorModeValue('gray.100', 'gray.600');

    // Get tags from comma-separated string
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

    // Calculate reading time (simple estimation)
    const getReadingTime = (content: string | undefined) => {
        if (!content) return 5; // Default

        // Average reading speed: 200-250 words per minute
        const words = content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return minutes === 0 ? 1 : minutes; // Minimum 1 minute
    };

    // Mocked view count for now
    // In a real app, this would come from an analytics service or database
    const mockViewCount = Math.floor(Math.random() * 1000) + 100;

    // Handle both BlogPostContent and BlogPost
    let content: string | undefined;

    if ('blocks' in post && post.blocks && post.blocks.length > 0) {
        // It's a BlogPostContent
        content = post.blocks[0].body;
    } else {
        // It's a BlogPost
        content = post.content;
    }

    const readingTime = getReadingTime(content);

    return (
        <Box mb={6}>
            {/* Tags */}
            {tags.length > 0 && (
                <Wrap spacing={2} mb={4}>
                    {tags.map((tag, index) => (
                        <WrapItem key={index}>
                            <Tag
                                size="md"
                                bg={tagBgColor}
                                borderRadius="full"
                                px={3}
                                py={1}
                            >
                                {tag}
                            </Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            )}

            {/* Reading time and view count */}
            <Flex gap={6}>
                <HStack spacing={1}>
                    <Clock size={16} />
                    <Text fontSize="sm" color={textColor}>
                        {readingTime} min read
                    </Text>
                </HStack>

                <HStack spacing={1}>
                    <Eye size={16} />
                    <Text fontSize="sm" color={textColor}>
                        {mockViewCount.toLocaleString()} views
                    </Text>
                </HStack>
            </Flex>
        </Box>
    );
}; 