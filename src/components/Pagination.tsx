import React from "react";
import { HStack, IconButton, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevious = () => {
    return !isFirstPage && onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    return !isLastPage && onPageChange(currentPage + 1);
  };

  const renderPageButtons = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pages.map((page) => (
      <Button
        key={page}
        size="sm"
        variant={page === currentPage ? "outline" : "ghost"}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Button>
    ));
  };

  return (
    <HStack gap={2} justify="center" mt={4}>
      <IconButton
        aria-label="Previous"
        size="sm"
        icon={<ChevronLeftIcon />}
        isDisabled={isFirstPage}
        onClick={handlePrevious}
      />
      <HStack gap={2}>{renderPageButtons()}</HStack>
      <IconButton
        aria-label="Next"
        size="sm"
        icon={<ChevronRightIcon />}
        isDisabled={isLastPage}
        onClick={handleNext}
      />
    </HStack>
  );
};

export default Pagination;
