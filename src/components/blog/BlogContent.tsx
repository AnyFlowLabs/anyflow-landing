import { BlogPost, BlogPostContent } from '@/types/blog';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
    Link,
    ListItem,
    UnorderedList,
    OrderedList,
    Code,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Kbd,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { TableOfContents } from './TableOfContents';
import { PostMetadata } from './PostMetadata';
import { useMemo } from 'react';

interface BlogContentProps {
    post: BlogPostContent | BlogPost;
}

export const BlogContent = ({ post }: BlogContentProps) => {
    const coverImageUrl = post.cover?.url;
    const authorName = post.author?.name;
    const authorAvatarUrl = post.author?.avatar?.url;

    // Get content based on post type
    let content: string = '';
    if ('blocks' in post && post.blocks && post.blocks.length > 0) {
        content = post.blocks[0].body;
    } else if (post.content) {
        content = post.content;
    }

    // Format date
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const codeColor = useColorModeValue('gray.800', 'gray.50');
    const codeBg = useColorModeValue('gray.100', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const linkColor = useColorModeValue('blue.600', 'blue.300');
    const blockquoteBg = useColorModeValue('gray.50', 'gray.700');
    const blockquoteBorder = useColorModeValue('gray.200', 'gray.500');
    const syntaxTheme = useColorModeValue(vs, vscDarkPlus);

    // Create an ID generator for headings
    const createHeadingId = (children: any) => {

        // Extract the text from the children (can be strong, em, code, etc)
        const text = typeof children.props.children === 'string' ? children.props.children : children.props.children.map((child: any) => {
            if (child.props && child.props.children) {
                return child.props.children;
            }
            return child;
        }).join('');

        // Clean up the heading text to match TableOfContents logic
        const cleanText = text
            .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold markers **text**
            .replace(/\*(.+?)\*/g, '$1')     // Remove italic markers *text*
            .replace(/`(.+?)`/g, '$1')       // Remove code markers `text`
            .replace(/~~(.+?)~~/g, '$1')     // Remove strikethrough ~~text~~
            .trim();

        return cleanText
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    };

    // Define custom component mapping for react-markdown
    const components = useMemo(() => ({
        h1: ({ node, children, ...props }: any) => {
            console.log(node, children);
            const id = createHeadingId(children);
            return <Heading as="h1" id={id} size="xl" mt={8} mb={4} {...props}>{children}</Heading>;
        },
        h2: ({ node, children, ...props }: any) => {
            const id = createHeadingId(children);
            return <Heading as="h2" id={id} size="lg" mt={6} mb={3} {...props}>{children}</Heading>;
        },
        h3: ({ node, children, ...props }: any) => {
            const id = createHeadingId(children);
            return <Heading as="h3" id={id} size="md" mt={5} mb={2} {...props}>{children}</Heading>;
        },
        h4: ({ node, children, ...props }: any) => {
            const id = createHeadingId(children);
            return <Heading as="h4" id={id} size="sm" mt={4} mb={2} {...props}>{children}</Heading>;
        },
        h5: ({ node, children, ...props }: any) => {
            const id = createHeadingId(children);
            return <Heading as="h5" id={id} size="xs" mt={4} mb={2} {...props}>{children}</Heading>;
        },
        h6: ({ node, children, ...props }: any) => {
            const id = createHeadingId(children);
            return <Heading as="h6" id={id} size="xs" fontWeight="medium" mt={4} mb={2} {...props}>{children}</Heading>;
        },
        p: (props: any) => <Text mt={4} mb={4} lineHeight="1.8" {...props} />,
        a: (props: any) => <Link color={linkColor} textDecoration="underline" _hover={{ opacity: 0.8 }} isExternal {...props} />,
        ul: (props: any) => <UnorderedList pl={4} mt={4} mb={4} {...props} />,
        ol: (props: any) => <OrderedList pl={4} mt={4} mb={4} {...props} />,
        li: (props: any) => <ListItem mb={2} {...props} />,
        blockquote: (props: any) => (
            <Box
                as="blockquote"
                borderLeftWidth="4px"
                borderLeftColor={blockquoteBorder}
                bg={blockquoteBg}
                px={4}
                py={3}
                my={4}
                borderRadius="md"
                fontStyle="italic"
                {...props}
            />
        ),
        code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            // TEMP: only inline code for now
            const _inline = true;
            return !_inline ? (
                <Box
                    as="pre"
                    overflowX="auto"
                    borderRadius="md"
                    my={4}
                >
                    <SyntaxHighlighter
                        language={match ? match[1] : ''}
                        style={syntaxTheme}
                        customStyle={{
                            borderRadius: '0.375rem',
                            fontSize: '0.9em',
                            margin: 0
                        }}
                        showLineNumbers={true}
                        {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </Box>
            ) : (
                <Code
                    bg={codeBg}
                    color={codeColor}
                    px={1}
                    borderRadius="sm"
                    fontSize="0.9em"
                    {...props}
                >
                    {children}
                </Code>
            );
        },
        table: (props: any) => (
            <Box overflowX="auto" my={8}>
                <Table variant="simple" size="sm" {...props} />
            </Box>
        ),
        thead: (props: any) => <Thead borderBottomWidth="2px" borderColor={borderColor} {...props} />,
        tbody: (props: any) => <Tbody {...props} />,
        tr: (props: any) => <Tr borderBottomWidth="1px" borderColor={borderColor} {...props} />,
        th: (props: any) => <Th py={2} px={4} fontWeight="semibold" textAlign="start" {...props} />,
        td: (props: any) => <Td py={2} px={4} {...props} />,
        hr: (props: any) => <Divider my={8} borderColor={borderColor} {...props} />,
        img: (props: any) => (
            <Box my={6}>
                <Image
                    borderRadius="md"
                    mx="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/800x400?text=Image+Not+Found"
                    {...props}
                />
            </Box>
        ),
        kbd: (props: any) => <Kbd {...props} />
    }), [linkColor, blockquoteBorder, blockquoteBg, codeBg, codeColor, borderColor, syntaxTheme]);

    return (
        <Container maxW="6xl" py={8}>
            <Grid
                templateColumns={{ base: '1fr', xl: '3fr 1fr' }}
                gap={8}
            >
                <GridItem>
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

                        {/* Post metadata - tags, reading time, view count */}
                        <PostMetadata post={post} />

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
                            sx={{
                                width: "100%",
                                maxWidth: "100%"
                            }}
                        >
                            <article>
                                <Markdown
                                    remarkPlugins={[remarkGfm]}
                                    components={components}
                                >
                                    {content}
                                </Markdown>
                            </article>
                        </Box>
                    </Box>
                </GridItem>

                <GridItem display={{ base: 'none', xl: 'block' }}>
                    <TableOfContents content={content} />
                </GridItem>
            </Grid>
        </Container>
    );
};