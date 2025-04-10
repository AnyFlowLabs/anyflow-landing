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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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

                <Text color={useColorModeValue('gray.600', 'gray.400')} noOfLines={3}>
                    {post.description}
                </Text>

                <Flex mt="auto" pt={3} alignItems="center">
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
            </Stack>
        </Box>
    );
}; 