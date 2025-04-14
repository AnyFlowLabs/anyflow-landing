import { BlogPost } from "@/types/blog";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Button,
  useColorModeValue,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");

  // Calculate reading time (actual estimation)
  const getReadingTime = (content: string | undefined) => {
    if (!content) return 3;
    
    // Average reading speed is 200-250 words per minute
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 225);
    
    return readingTime < 3 ? 3 : readingTime;
  };

  // Get tags from comma-separated string
  const tags = post.tags ? post.tags.split(",").map((tag) => tag.trim()) : [];

  return (
    <Box
      as="article"
      bg={bgColor}
      borderRadius="xl"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
      _focus={{
        outline: "2px solid",
        outlineColor: "brand.500",
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
    >
      <Flex 
        direction={{ base: "column", md: "row" }}
        as={Link}
        to={`/blog/${post.slug}`}
        aria-labelledby={`featured-post-${post.slug}`}
      >
        <AspectRatio 
          ratio={16/9}
          w={{ base: "100%", md: "50%" }}
          h={{ base: "300px", md: "auto" }}
        >
          <Image 
            src={post.cover?.url || ""} 
            alt={`Cover image for article: ${post.title}`}
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/800x600?text=No+Image"
          />
        </AspectRatio>
        <Box p={8} w={{ base: "100%", md: "50%" }}>
          <VStack align="start" gap={4}>
            <Text
              rounded="md"
              bg="brand.500"
              px={3}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              color="white"
              aria-label="Featured post"
            >
              FEATURED
            </Text>
            <Heading as="h3" size="xl" id={`featured-post-${post.slug}`}>
              {post.title}
            </Heading>
            <HStack gap={4}>
              <Text fontSize="sm" color={secondaryTextColor}>
                <time dateTime={new Date(post.publishedAt).toISOString()}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </Text>
              <HStack aria-label={`${getReadingTime(post.content)} minute read`}>
                <Clock size={14} aria-hidden="true" />
                <Text fontSize="sm" color={secondaryTextColor}>
                  {getReadingTime(post.content)} min read
                </Text>
              </HStack>
            </HStack>
            <Text noOfLines={3} color={secondaryTextColor}>
              {post.description}
            </Text>
            <HStack gap={2} flexWrap="wrap" aria-label="Tags">
              {tags.map((tag, index) => (
                <Text key={index} fontSize="sm" color={secondaryTextColor}>
                  #{tag}
                </Text>
              ))}
            </HStack>
            <Box pt={2}>
              <Button 
                rightIcon={<ArrowRight size={16} aria-hidden="true" />} 
                colorScheme="brand"
                aria-label={`Read more about ${post.title}`}
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
