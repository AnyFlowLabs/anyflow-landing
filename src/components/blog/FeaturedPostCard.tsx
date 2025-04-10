import { BlogPost } from '@/types/blog';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Flex,
    Badge,
    Button,
    useColorModeValue,
    Tag,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

interface FeaturedPostCardProps {
    post: BlogPost;
}

export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
    const bgColor = useColorModeValue('white', 'gray.800');

    // Calculate reading time (simple estimation)
    const getReadingTime = (_content: string | undefined) => {
        // Simple estimation: average reading speed is 200-250 words per minute
        // For demonstration, we'll create a random time between 3-10 minutes
        // [TODO]
        return Math.floor(Math.random() * 8) + 3;
    };

    // Get tags from comma-separated string
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

    return (
        <Box
            bg={bgColor}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            border="1px"
            borderColor={borderColor}
        >
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Box
                    w={{ base: '100%', md: '50%' }}
                    h={{ base: '300px', md: 'auto' }}
                    bgImage={`url(${post.cover?.url || ''})`}
                    bgSize="cover"
                    bgPosition="center"
                />
                <Box p={8} w={{ base: '100%', md: '50%' }}>
                    <VStack align="start" spacing={4}>
                        <Badge colorScheme="brand" fontSize="sm">Featured</Badge>
                        <Heading as="h3" size="xl">
                            {post.title}
                        </Heading>
                        <HStack spacing={4}>
                            <Text fontSize="sm" color={secondaryTextColor}>
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </Text>
                            <HStack>
                                <Clock size={14} />
                                <Text fontSize="sm" color={secondaryTextColor}>
                                    {getReadingTime(post.content)} min read
                                </Text>
                            </HStack>
                        </HStack>
                        <Text noOfLines={3} color={secondaryTextColor}>
                            {post.description}
                        </Text>
                        <HStack spacing={2} pt={2} flexWrap="wrap">
                            {tags.map((tag, index) => (
                                <Tag key={index} size="sm" colorScheme="gray" mt={1}>
                                    {tag}
                                </Tag>
                            ))}
                        </HStack>
                        <Box pt={2}>
                            <Button
                                as={Link}
                                to={`/blog/${post.slug}`}
                                rightIcon={<ArrowRight size={16} />}
                                colorScheme="brand"
                            >
                                Read more
                            </Button>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}; 