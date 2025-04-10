import { DISCORD_URL } from '@/const';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    useColorModeValue,
    HStack,
    Icon,
} from '@chakra-ui/react';
import { Github, ArrowRight, MessageSquare } from 'lucide-react';

export const ActionCTA = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
        >
            <VStack spacing={4} align="start">
                <Heading size="md">
                    Start Using AnyFlow Today
                </Heading>
                <Text>
                    Streamline your workflow automation with AnyFlow's powerful platform.
                    Sign up in seconds with your GitHub account.
                </Text>

                <HStack spacing={4} mt={2} wrap="wrap">
                    <Button
                        as="a"
                        href="https://app.anyflow.pro/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Icon as={Github} />}
                        rightIcon={<Icon as={ArrowRight} />}
                        colorScheme="brand"
                        size="md"
                    >
                        Try AnyFlow for Free
                    </Button>

                    <Button
                        as="a"
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Icon as={MessageSquare} />}
                        variant="outline"
                        colorScheme="brand"
                        size="md"
                    >
                        Join Our Discord
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
}; 