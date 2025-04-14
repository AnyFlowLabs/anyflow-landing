import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { Twitter } from 'lucide-react';

// Declare the Twitter widget type
declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (element?: HTMLElement) => Promise<void>;
                createTimeline: (
                    options: any,
                    element: HTMLElement,
                    parameters?: any
                ) => Promise<HTMLElement>;
            };
        };
    }
}

export const TwitterFeed = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    // const containerRef = useRef<HTMLDivElement>(null);
    // const { colorMode } = useColorMode();
    // const theme = colorMode === 'dark' ? 'dark' : 'light';

    // useEffect(() => {
    //     // Load Twitter widget script
    //     if (typeof window !== 'undefined' && !document.getElementById('twitter-widget-script')) {
    //         const script = document.createElement('script');
    //         script.id = 'twitter-widget-script';
    //         script.src = 'https://platform.twitter.com/widgets.js';
    //         script.async = true;

    //         script.onload = () => {
    //             if (window.twttr && containerRef.current) {
    //                 // Clean previous content
    //                 containerRef.current.innerHTML = '';

    //                 // Create a timeline embed
    //                 window.twttr.widgets.createTimeline(
    //                     {
    //                         sourceType: 'profile',
    //                         screenName: 'anyflow_',
    //                     },
    //                     containerRef.current,
    //                     {
    //                         height: 400,
    //                         chrome: 'noheader, nofooter',
    //                         theme: theme,
    //                         borderColor: '#E2E8F0',
    //                         showReplies: false,
    //                         tweetLimit: 3,
    //                     }
    //                 ).then(() => {
    //                     console.log('Twitter timeline loaded');
    //                 }).catch(err => {
    //                     console.error('Failed to load Twitter timeline:', err);
    //                     // Fallback if timeline fails to load
    //                     if (containerRef.current) {
    //                         containerRef.current.innerHTML = `
    //                             <div style="padding: 16px; border: 1px solid #ccc; border-radius: 8px; text-align: center;">
    //                                 <p>Failed to load tweets. Please check our Twitter profile directly.</p>
    //                             </div>
    //                         `;
    //                     }
    //                 });
    //             }
    //         };

    //         document.body.appendChild(script);

    //         return () => {
    //             // Clean up script on unmount
    //             const twitterScript = document.getElementById('twitter-widget-script');
    //             if (twitterScript) {
    //                 twitterScript.remove();
    //             }
    //         };
    //     } else if (window.twttr && containerRef.current) {
    //         // If script already loaded, reload widgets with current color theme
    //         window.twttr.widgets.load(containerRef.current);
    //     }
    // }, [theme]);

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
                    <HStack>
                        <Icon as={Twitter} />
                        <Text>Latest Tweets</Text>
                    </HStack>
                </Heading>
                <Text>
                    Follow us on Twitter for the latest updates and announcements.
                </Text>
                <Button
                    as="a"
                    href="https://twitter.com/anyflow_"
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon as={Twitter} />}
                    colorScheme="twitter"
                >
                    Follow @anyflow_
                </Button>

                {/* Twitter feed container */}
                {/* <Box w="100%" mt={2} ref={containerRef} minH="200px">
                    <Skeleton height="200px" startColor={useColorModeValue('gray.100', 'gray.700')} endColor={useColorModeValue('gray.400', 'gray.500')} />
                </Box> */}
                {/* <a className="twitter-timeline" href="https://twitter.com/anyflow_?ref_src=twsrc%5Etfw">Tweets by anyflow_</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            </VStack>
        </Box>
    );
}; 