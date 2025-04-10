import { BlogPost, BlogPostContent } from "@/types/blog";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
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
} from "@chakra-ui/react";
import { TableOfContents } from "./TableOfContents";
import { PostMetadata } from "./PostMetadata";
import { useMemo, memo, ReactNode } from "react";
import type { Components } from "react-markdown";

interface BlogContentProps {
  post: BlogPostContent | BlogPost;
}

interface ChildProps {
  props?: {
    children?: ReactNode;
  };
}

// Memoize the component to prevent unnecessary re-renders
export const BlogContent = memo(({ post }: BlogContentProps) => {
  const coverImageUrl = post.cover?.url;
  const authorName = post.author?.name;
  const authorAvatarUrl = post.author?.avatar?.url;

  // Get content based on post type
  let content: string = "";
  if ("blocks" in post && post.blocks && post.blocks.length > 0) {
    content = post.blocks[0].body;
  } else if (post.content) {
    content = post.content;
  }

  // Format date
  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const codeColor = useColorModeValue("gray.800", "gray.50");
  const codeBg = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const blockquoteBg = useColorModeValue("gray.50", "gray.700");
  const blockquoteBorder = useColorModeValue("gray.200", "gray.500");
  const syntaxTheme = useColorModeValue(vs, vscDarkPlus);

  // Create an ID generator for headings
  const createHeadingId = (children: ReactNode) => {
    if (!children || typeof children !== "object" || !("props" in children)) {
      return "";
    }

    // Extract the text from the children (can be strong, em, code, etc)
    const childrenObj = children as ChildProps;
    const text =
      typeof childrenObj.props?.children === "string"
        ? childrenObj.props.children
        : childrenObj.props?.children
          ? Array.isArray(childrenObj.props.children)
            ? childrenObj.props.children
                .map((child: ChildProps) => {
                  if (
                    child &&
                    typeof child === "object" &&
                    "props" in child &&
                    child.props?.children
                  ) {
                    return child.props.children;
                  }
                  return child;
                })
                .join("")
            : String(childrenObj.props.children)
          : "";

    // Clean up the heading text to match TableOfContents logic
    const cleanText = String(text)
      .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold markers **text**
      .replace(/\*(.+?)\*/g, "$1") // Remove italic markers *text*
      .replace(/`(.+?)`/g, "$1") // Remove code markers `text`
      .replace(/~~(.+?)~~/g, "$1") // Remove strikethrough ~~text~~
      .trim();

    return cleanText
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  // Define custom component mapping for react-markdown
  const components: Components = {
    h1: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading as="h1" id={id} size="xl" mt={8} mb={4}>
          {children}
        </Heading>
      );
    },
    h2: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading as="h2" id={id} size="lg" mt={6} mb={3}>
          {children}
        </Heading>
      );
    },
    h3: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading as="h3" id={id} size="md" mt={5} mb={2}>
          {children}
        </Heading>
      );
    },
    h4: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading as="h4" id={id} size="sm" mt={4} mb={2}>
          {children}
        </Heading>
      );
    },
    h5: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading as="h5" id={id} size="xs" mt={4} mb={2}>
          {children}
        </Heading>
      );
    },
    h6: ({ children }) => {
      const id = createHeadingId(children);
      return (
        <Heading
          as="h6"
          id={id}
          size="xs"
          fontWeight="medium"
          mt={4}
          mb={2}
        >
          {children}
        </Heading>
      );
    },
    p: ({ children }) => (
      <Text mt={4} mb={4} lineHeight="1.8">
        {children}
      </Text>
    ),
    a: ({ href, children }) => (
      <Link
        color={linkColor}
        textDecoration="underline"
        _hover={{ opacity: 0.8 }}
        href={href}
        isExternal
        rel="noopener noreferrer"
        aria-label={typeof children === 'string' ? `Link to ${children}` : undefined}
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <UnorderedList pl={4} mt={4} mb={4} spacing={2}>
        {children}
      </UnorderedList>
    ),
    ol: ({ children }) => (
      <OrderedList pl={4} mt={4} mb={4} spacing={2}>
        {children}
      </OrderedList>
    ),
    li: ({ children }) => (
      <ListItem mb={2}>
        {children}
      </ListItem>
    ),
    blockquote: ({ children }) => (
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
        role="region"
        aria-label="Blockquote"
      >
        {children}
      </Box>
    ),
    code: ({ inline, className, children }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline ? (
        <Box as="pre" overflowX="auto" borderRadius="md" my={4}>
          <SyntaxHighlighter
            language={match ? match[1] : ""}
            style={syntaxTheme}
            customStyle={{
              borderRadius: "0.375rem",
              fontSize: "0.9em",
              margin: 0,
            }}
            showLineNumbers
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </Box>
      ) : (
        <Code
          bg={codeBg}
          color={codeColor}
          px={1}
          borderRadius="sm"
          fontSize="0.9em"
        >
          {children}
        </Code>
      );
    },
    table: ({ children }) => (
      <Box overflowX="auto" my={8} role="region" aria-label="Table">
        <Table variant="simple" size="sm">
          {children}
        </Table>
      </Box>
    ),
    thead: ({ children }) => (
      <Thead borderBottomWidth="2px" borderColor={borderColor}>
        {children}
      </Thead>
    ),
    tbody: ({ children }) => (
      <Tbody>{children}</Tbody>
    ),
    tr: ({ children }) => (
      <Tr borderBottomWidth="1px" borderColor={borderColor}>
        {children}
      </Tr>
    ),
    th: ({ children }) => (
      <Th
        py={2}
        px={4}
        fontWeight="semibold"
        textAlign="start"
        scope="col"
      >
        {children}
      </Th>
    ),
    td: ({ children }) => (
      <Td py={2} px={4}>
        {children}
      </Td>
    ),
    hr: () => (
      <Divider my={8} borderColor={borderColor} />
    ),
    img: ({ src, alt }) => (
      <Box my={6}>
        <Image
          borderRadius="md"
          mx="auto"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/800x400?text=Image+Not+Found"
          loading="lazy"
          decoding="async"
          src={src}
          alt={alt || "Blog post image"}
          width="100%"
          height="auto"
          aria-describedby={alt ? `img-desc-${alt.replace(/\s+/g, '-')}` : undefined}
        />
        {alt && alt.length > 10 && (
          <Text 
            id={`img-desc-${alt.replace(/\s+/g, '-')}`}
            fontSize="sm" 
            color="gray.500" 
            textAlign="center" 
            mt={2}
          >
            {alt}
          </Text>
        )}
      </Box>
    ),
    kbd: ({ children }) => <Kbd>{children}</Kbd>,
  };

  return (
    <Container maxW="6xl" py={{ base: 2, md: 4 }}>
      <Grid templateColumns={{ base: "1fr", xl: "3fr 1fr" }} gap={8}>
        <GridItem>
          <Box
          >
            <Heading as="h1" size="2xl" mb={4}>
              {post.title}
            </Heading>

            <Flex alignItems="center" mb={6}>
              {authorAvatarUrl && (
                <Avatar
                  size="md"
                  src={authorAvatarUrl}
                  name={authorName || "Author"}
                  mr={3}
                  aria-label={
                    authorName ? `Avatar for ${authorName}` : "Author avatar"
                  }
                />
              )}
              <Box>
                {authorName && <Text fontWeight="bold">{authorName}</Text>}
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {publishDate}
                  </time>
                </Text>
              </Box>
            </Flex>

            {/* Post metadata - tags, reading time, view count */}
            <PostMetadata post={post} />

            {coverImageUrl && (
              <Box borderRadius="lg" overflow="hidden" mb={6} maxH="500px">
                <Image
                  src={coverImageUrl}
                  alt={`Featured image for ${post.title}`}
                  objectFit="cover"
                  width="100%"
                  mx="auto"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </Box>
            )}

            <Divider mb={6} />

            <Box
              className="blog-content"
              color={textColor}
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <article>
                <Markdown remarkPlugins={[remarkGfm]} components={components}>
                  {content}
                </Markdown>
              </article>
            </Box>
          </Box>
        </GridItem>

        <GridItem display={{ base: "none", xl: "block" }}>
          <TableOfContents content={content} />
        </GridItem>
      </Grid>
    </Container>
  );
});
