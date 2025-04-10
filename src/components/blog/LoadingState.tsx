import {
    Box,
    Container,
    Skeleton,
    SkeletonText,
    SimpleGrid,
    useColorModeValue,
    Divider,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';

export const BlogCardSkeleton = () => {
    const bgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            bg={bgColor}
        >
            <Skeleton height="200px" mb={4} borderRadius="md" />
            <SkeletonText mt={2} noOfLines={2} spacing={4} skeletonHeight={4} />
            <SkeletonText mt={4} noOfLines={3} spacing={2} />
            <Box mt="auto" pt={6}>
                <Skeleton height="20px" width="70%" />
            </Box>
        </Box>
    );
};

export const FeaturedPostSkeleton = () => {
    const bgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            bg={bgColor}
            boxShadow="lg"
        >
            <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
                <Skeleton
                    height={{ base: '300px', md: '400px' }}
                    width={{ base: '100%', md: '50%' }}
                />

                <Box p={8} width={{ base: '100%', md: '50%' }}>
                    <Skeleton height="24px" width="100px" mb={4} />
                    <Skeleton height="40px" width="90%" mb={6} />
                    <Skeleton height="20px" width="60%" mb={2} />
                    <SkeletonText mt={4} noOfLines={3} spacing={2} />
                    <Skeleton height="30px" width="150px" mt={6} />
                </Box>
            </Box>
        </Box>
    );
};

export const CTASectionSkeleton = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <Box
                p={6}
                borderRadius="lg"
                bg={bgColor}
                boxShadow="md"
            >
                <SkeletonText mt={2} noOfLines={2} spacing={4} skeletonHeight={4} mb={4} />
                <Skeleton height="40px" borderRadius="md" />
            </Box>

            <Box
                p={6}
                borderRadius="lg"
                bg={bgColor}
                boxShadow="md"
            >
                <SkeletonText mt={2} noOfLines={2} spacing={4} skeletonHeight={4} mb={4} />
                <Skeleton height="40px" borderRadius="md" mb={4} />
                <Skeleton height="100px" borderRadius="md" />
            </Box>
        </SimpleGrid>
    );
};

export const BlogIndexSkeleton = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const headerBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Layout>
            <Box bg={bgColor} minH="100vh">
                {/* Header Section Skeleton */}
                <Box bg={headerBgColor} py={16} boxShadow="sm">
                    <Container maxW="6xl">
                        <SkeletonText mt={2} noOfLines={3} spacing={4} skeletonHeight={6} textAlign="center" />
                    </Container>
                </Box>

                <Container maxW="6xl" py={12}>
                    {/* Featured Post Section Skeleton */}
                    <Box mb={12}>
                        <Skeleton height="40px" width="200px" mb={6} />
                        <FeaturedPostSkeleton />
                    </Box>

                    {/* Regular Posts Grid Skeleton */}
                    <Box mb={12}>
                        <Skeleton height="40px" width="200px" mb={6} />
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <BlogCardSkeleton key={index} />
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* CTA Section Skeleton */}
                    <Box mb={8} pt={8}>
                        <Divider mb={12} />
                        <CTASectionSkeleton />
                    </Box>

                    {/* Pagination Skeleton */}
                    <Skeleton height="40px" width="200px" mx="auto" mt={8} />
                </Container>
            </Box>
        </Layout>
    );
};

export const BlogPostSkeleton = () => {
    const bgColor = useColorModeValue('white', 'gray.800');

    return (
        <Container maxW="4xl" py={8}>
            <Box bg={bgColor} borderRadius="lg" overflow="hidden" p={6} shadow="md">
                <Skeleton height="50px" width="70%" mb={6} />

                <Box display="flex" alignItems="center" mb={6}>
                    <Skeleton borderRadius="full" height="50px" width="50px" mr={3} />
                    <Box>
                        <Skeleton height="20px" width="120px" mb={2} />
                        <Skeleton height="16px" width="90px" />
                    </Box>
                </Box>

                <Skeleton height="400px" mb={6} borderRadius="md" />

                <SkeletonText mt={4} noOfLines={15} spacing={4} skeletonHeight={4} />
            </Box>
        </Container>
    );
}; 