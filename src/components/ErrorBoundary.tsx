import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { RefreshCwIcon } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error to an error reporting service
        console.error('Uncaught error:', error, errorInfo);
        this.setState({
            errorInfo,
        });
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // If custom fallback is provided, use it
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <Container maxW="6xl" py={8}>
                    <VStack spacing={6} align="start">
                        <Heading as="h1" size="xl" color="danger.500">
                            Something went wrong
                        </Heading>

                        <Text fontSize="lg">
                            An unexpected error occurred while rendering this component.
                            You can try refreshing the page or coming back later.
                        </Text>

                        <Alert
                            status="error"
                            borderRadius="md"
                            flexDirection="column"
                            alignItems="flex-start"
                            p={4}
                            my={4}
                        >
                            <AlertIcon mb={2} />
                            <AlertTitle mb={2}>Error details</AlertTitle>
                            <AlertDescription>
                                <Text as="p" mb={2}>{this.state.error?.toString()}</Text>

                                {this.state.errorInfo && (
                                    <Box
                                        as="pre"
                                        fontSize="xs"
                                        whiteSpace="pre-wrap"
                                        overflowX="auto"
                                        p={3}
                                        bg="blackAlpha.100"
                                        borderRadius="md"
                                        maxH="300px"
                                        overflow="auto"
                                    >
                                        {this.state.errorInfo.componentStack}
                                    </Box>
                                )}
                            </AlertDescription>
                        </Alert>

                        <Button
                            leftIcon={<RefreshCwIcon size={16} />}
                            colorScheme="brand"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </Button>
                    </VStack>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 