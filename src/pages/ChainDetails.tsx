import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";

import Pagination from "@/components/pagination/Pagination";
import useChain from "@/hooks/useChain";
import { CopyChain } from "./components/CopyChain";

const ITEMS_PER_PAGE = 10;

export default function ChainDetails() {
  const { chainId } = useParams();
  const { chain, isLoading } = useChain(Number(chainId));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const providers = useMemo(() => chain?.providers || [], [chain]);

  const filteredProviders = useMemo(() => {
    const query = searchValue.toLowerCase();
    return providers.filter(
      (provider) =>
        provider.name.toLowerCase().includes(query) ||
        provider.id.toString().includes(query),
    );
  }, [providers, searchValue]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProviders.length / ITEMS_PER_PAGE),
  );

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProviders.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProviders, currentPage]);

  const getStatusColor = (status: string) =>
    status === "online"
      ? "green.400"
      : status === "offline"
        ? "red.400"
        : "gray";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!chain) {
    return (
      <Center h="100vh">
        <Heading size="lg" color="red.500">
          Error loading chain details
        </Heading>
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" my={8}>
      <Flex mb={5} gap={5} align="center">
        <Box>
          <Heading size="lg">{chain.name}</Heading>
          <CopyChain chainId={chain.chain_id.toString()} />
        </Box>
        <InputGroup width="300px">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search by name or ID"
            value={searchValue}
            onChange={handleSearchChange}
            aria-label="Search chains"
          />
        </InputGroup>
      </Flex>

      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Chain ID</Th>
              <Th isNumeric>Latency</Th>
              <Th isNumeric>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedItems.length > 0 ? (
              paginatedItems.map((provider) => (
                <Tr key={provider.id}>
                  <Td>{provider.name}</Td>
                  <Td>{provider.id}</Td>
                  <Td isNumeric>{provider.latency}</Td>
                  <Td isNumeric color={getStatusColor(provider.status)}>
                    {provider.status}
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={4}>
                  <Text align="center" color="gray.500">
                    No matching providers found.
                  </Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}
