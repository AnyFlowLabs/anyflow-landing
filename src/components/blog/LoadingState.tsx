import {
    Box,
    Container,
    Skeleton,
    SkeletonText,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

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

export const BlogIndexSkeleton = () => {
    return (
        <Container maxW="6xl" py={8}>
            <SkeletonText mt={4} mb={8} noOfLines={2} spacing={4} skeletonHeight={6} />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <BlogCardSkeleton key={index} />
                ))}
            </SimpleGrid>
        </Container>
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