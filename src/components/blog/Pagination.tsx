import { Button, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const buttonColor = useColorModeValue('gray.200', 'gray.700');
    const activeButtonColor = useColorModeValue('blue.500', 'blue.300');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    // Generate page numbers to display
    const getPageNumbers = (): number[] => {
        const pageNumbers: number[] = [];

        // Always show first page
        if (currentPage > 3) {
            pageNumbers.push(1);
        }

        // Show ellipsis if needed
        if (currentPage > 4) {
            pageNumbers.push(-1); // -1 represents ellipsis
        }

        // Show pages around current page
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Show ellipsis if needed
        if (currentPage < totalPages - 3) {
            pageNumbers.push(-1); // -1 represents ellipsis
        }

        // Always show last page if there is more than one page
        if (totalPages > 1 && currentPage < totalPages - 2) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    if (totalPages <= 1) return null;

    return (
        <HStack spacing={2} justify="center" mt={8} mb={8}>
            <Button
                leftIcon={<ChevronLeftIcon size={16} />}
                onClick={() => onPageChange(currentPage - 1)}
                isDisabled={currentPage === 1}
                size="sm"
                variant="outline"
                colorScheme="blue"
            >
                Previous
            </Button>

            {getPageNumbers().map((pageNumber, index) => (
                pageNumber === -1 ? (
                    <Text key={`ellipsis-${index}`} px={2} color={textColor}>...</Text>
                ) : (
                    <Button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        size="sm"
                        variant={currentPage === pageNumber ? "solid" : "outline"}
                        bg={currentPage === pageNumber ? activeButtonColor : undefined}
                        color={currentPage === pageNumber ? "white" : undefined}
                        _hover={currentPage === pageNumber ? { bg: activeButtonColor } : {}}
                    >
                        {pageNumber}
                    </Button>
                )
            ))}

            <Button
                rightIcon={<ChevronRightIcon size={16} />}
                onClick={() => onPageChange(currentPage + 1)}
                isDisabled={currentPage === totalPages}
                size="sm"
                variant="outline"
                colorScheme="blue"
            >
                Next
            </Button>
        </HStack>
    );
}; 