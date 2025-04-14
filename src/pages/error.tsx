import { useEffect } from 'react';
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
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AlertOctagonIcon, ArrowLeftIcon, HomeIcon, RefreshCwIcon } from "lucide-react";
import Layout from '@/components/Layout';
import { isRouteErrorResponse } from 'react-router-dom';

interface ErrorDetail {
    status?: number;
    statusText?: string;
    message?: string;
    data?: any;
}

export default function ErrorPage() {
    const error = useRouteError() as ErrorDetail;
    const navigate = useNavigate();
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const cardBgColor = useColorModeValue('white', 'gray.800');

    // Log the error to console for debugging
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    // Extract error details
    let errorStatus = 500;
    let errorTitle = 'Something went wrong';
    let errorMessage = 'An unexpected error occurred. Please try again later.';

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorTitle = error.statusText || 'Application Error';
        errorMessage = error.data?.message || 'Please try again or contact support if the problem persists.';
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    // Customize based on status code
    if (errorStatus === 404) {
        errorTitle = 'Page Not Found';
        errorMessage = 'The page you are looking for doesn\'t exist or has been moved.';
    }

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
                            as={AlertOctagonIcon}
                            boxSize={16}
                            color="danger.500"
                            mt={2}
                            mb={2}
                        />

                        <Box>
                            <Text fontSize="7xl" fontWeight="bold" color="danger.500">
                                {errorStatus}
                            </Text>
                            <Heading size="xl" mb={4}>
                                {errorTitle}
                            </Heading>
                            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="450px" mx="auto">
                                {errorMessage}
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