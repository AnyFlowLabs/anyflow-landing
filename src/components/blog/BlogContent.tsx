import { BlogPostContent } from '@/types/blog';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    Box,
    Heading,
    Text,
    Image,
    Container,
    Flex,
    Avatar,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';
import { Prose } from '../ui/prose';
import { css } from '@emotion/react';

interface BlogContentProps {
    post: BlogPostContent;
}

export const BlogContent = ({ post }: BlogContentProps) => {
    const coverImageUrl = post.cover?.url;
    const authorName = post.author?.name;
    const authorAvatarUrl = post.author?.avatar?.url;

    const content = post.blocks[0].body;

    // Format date
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Container maxW="4xl" py={8}>
            <Box bg={bgColor} borderRadius="lg" overflow="hidden" p={6} shadow="md">
                <Heading as="h1" size="2xl" mb={4}>
                    {post.title}
                </Heading>

                <Flex alignItems="center" mb={6}>
                    {authorAvatarUrl && (
                        <Avatar
                            size="md"
                            src={authorAvatarUrl}
                            name={authorName || 'Author'}
                            mr={3}
                        />
                    )}
                    <Box>
                        {authorName && (
                            <Text fontWeight="bold">
                                {authorName}
                            </Text>
                        )}
                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                            {publishDate}
                        </Text>
                    </Box>
                </Flex>

                {coverImageUrl && (
                    <Box
                        borderRadius="md"
                        overflow="hidden"
                        mb={6}
                        maxH="500px"
                    >
                        <Image
                            src={coverImageUrl}
                            alt={post.title}
                            objectFit="cover"
                            width="100%"
                            mx="auto"
                        />
                    </Box>
                )}

                <Divider mb={6} />

                <Box
                    className="blog-content"
                    color={textColor}
                >
                    <article>
                        <Prose>
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    p: ({ children }) => <p>{children}</p>
                                }}
                            >
                                {content}
                            </Markdown>
                        </Prose>
                    </article>
                </Box>
            </Box>
        </Container>
    );
};