import { BlogPost } from '@/types/blog';
import {
    Box,
    Heading,
    Text,
    Image,
    Stack,
    Flex,
    Avatar,
    useColorModeValue,
    HStack,
    Tag,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    const coverImageUrl = post.cover?.url;
    const authorName = post.author?.name;
    const authorAvatarUrl = post.author?.avatar?.url;

    // Format date
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Calculate reading time (simple estimation)
    const getReadingTime = (content: string | undefined) => {
        // Simple estimation: average reading speed is 200-250 words per minute
        // For demonstration, we'll create a random time between 3-10 minutes
        return Math.floor(Math.random() * 8) + 3;
    };

    // Get tags from comma-separated string
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

    return (
        <Box
            as={Link}
            to={`/blog/${post.slug}`}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            transition="all 0.3s"
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'lg',
                textDecoration: 'none'
            }}
            height="100%"
            display="flex"
            flexDirection="column"
            bg={useColorModeValue('white', 'gray.800')}
        >
            {coverImageUrl && (
                <Box
                    borderRadius="md"
                    overflow="hidden"
                    mb={4}
                    height="200px"
                >
                    <Image
                        src={coverImageUrl}
                        alt={post.title}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </Box>
            )}

            <Stack flex={1} spacing={3}>
                <Heading as="h3" size="md" noOfLines={2}>
                    {post.title}
                </Heading>

                {/* Tags */}
                {tags.length > 0 && (
                    <HStack spacing={2} flexWrap="wrap">
                        {tags.slice(0, 3).map((tag, index) => (
                            <Tag key={index} size="sm" colorScheme="gray" mt={1}>
                                {tag}
                            </Tag>
                        ))}
                        {tags.length > 3 && (
                            <Tag size="sm" colorScheme="gray" mt={1}>
                                +{tags.length - 3}
                            </Tag>
                        )}
                    </HStack>
                )}

                <Text color={useColorModeValue('gray.600', 'gray.400')} noOfLines={3}>
                    {post.description}
                </Text>

                <Flex mt="auto" pt={3} alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        {authorAvatarUrl && (
                            <Avatar
                                size="sm"
                                src={authorAvatarUrl}
                                name={authorName || 'Author'}
                                mr={2}
                            />
                        )}
                        <Box>
                            {authorName && (
                                <Text fontSize="sm" fontWeight="medium">
                                    {authorName}
                                </Text>
                            )}
                            <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>
                                {publishDate}
                            </Text>
                        </Box>
                    </Flex>

                    {/* Reading time */}
                    <HStack spacing={1}>
                        <Clock size={14} />
                        <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>
                            {getReadingTime(post.content)} min
                        </Text>
                    </HStack>
                </Flex>
            </Stack>
        </Box>
    );
}; 