"use client";

import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FileSearch } from "lucide-react";

export default function NotFound() {
  return (
    <Flex minH="100vh" align="center" justify="center" p={{ base: 4, md: 8 }}>
      <VStack
        gap={8}
        maxW="600px"
        textAlign="center"
        bg="white"
        p={{ base: 6, md: 12 }}
        borderRadius="2xl"
        shadow="lg"
      >
        <Box>
          <Text fontSize="7xl" fontWeight="bold" color="primary.500">
            404
          </Text>
          <Icon
            as={FileSearch}
            boxSize={20}
            color="primary.500"
            mt={2}
            mb={6}
          />
          <Heading size="xl" mb={4}>
            Page Not Found
          </Heading>
          <Text fontSize="lg" color="gray.600">
            The page you are looking for doesn't exist or has been moved.
          </Text>
        </Box>

        <Button
          as={Link}
          size="lg"
          colorScheme="primary"
          variant="solid"
          px={8}
          onClick={() => {}}
          // @ts-ignore
          href="/"
        >
          Return to Home
        </Button>
      </VStack>
    </Flex>
  );
}
