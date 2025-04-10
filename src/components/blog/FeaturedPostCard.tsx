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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const secondaryTextColor = useColorModeValue("gray.400", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");

  // Calculate reading time (simple estimation)
  const getReadingTime = (content: string | undefined) => {
    // Simple estimation: average reading speed is 200-250 words per minute
    // For demonstration, we'll create a random time between 3-10 minutes
    return Math.floor(Math.random() * 8) + 3;
  };

  // Get tags from comma-separated string
  const tags = post.tags ? post.tags.split(",").map((tag) => tag.trim()) : [];

  return (
    <Box
      display="block"
      bg={bgColor}
      borderRadius="xl"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      as={Link}
      transition="all 0.2s ease-in-out"
      to={`/blog/${post.slug}`}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "300px", md: "auto" }}
          bgImage={`url(${post.cover?.url || ""})`}
          bgSize="cover"
          bgPosition="center"
        />
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
            >
              FEATURED
            </Text>
            <Heading as="h3" size="xl">
              {post.title}
            </Heading>
            <HStack gap={4}>
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
            <HStack gap={2} flexWrap="wrap">
              {tags.map((tag, index) => (
                <Text key={index} fontSize="sm" color={secondaryTextColor}>
                  #{tag}
                </Text>
              ))}
            </HStack>
            <Box pt={2}>
              <Button rightIcon={<ArrowRight size={16} />} colorScheme="brand">
                Read more
              </Button>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
