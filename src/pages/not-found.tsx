"use client";

import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  Icon,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FileSearch, ArrowLeftIcon, HomeIcon, RefreshCwIcon } from "lucide-react";
import Layout from '@/components/Layout';

export default function NotFound() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Layout>
      <Box bg={bgColor} minH="100vh" py={12}>
        <Container maxW="4xl">
          <VStack
            gap={8}
            maxW="700px"
            mx="auto"
            textAlign="center"
            bg={cardBgColor}
            p={{ base: 6, md: 12 }}
            borderRadius="xl"
            shadow="lg"
          >
            <Icon
              as={FileSearch}
              boxSize={16}
              color="primary.500"
              mt={2}
              mb={2}
            />

            <Box>
              <Text fontSize="7xl" fontWeight="bold" color="primary.500">
                404
              </Text>
              <Heading size="xl" mb={4}>
                Page Not Found
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="450px" mx="auto">
                The page you are looking for doesn't exist or has been moved.
              </Text>
            </Box>

            <Flex gap={4} flexDir={{ base: 'column', md: 'row' }}>
              <Button
                leftIcon={<ArrowLeftIcon size={16} />}
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>

              <Button
                leftIcon={<RefreshCwIcon size={16} />}
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>

              <Button
                as={Link}
                to="/"
                leftIcon={<HomeIcon size={16} />}
                colorScheme="brand"
              >
                Back to Home
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
}
