import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  Button,
  HStack,
  Text,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { ChainDef } from "@/const/chainsApi";
import { Search2Icon } from "@chakra-ui/icons";
import useDebounce from "@/hooks/useDebounce";

function useChains(page: number) {
  const [chains, setChains] = useState<ChainDef[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChains = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api-staging.anyflow.pro/api/chains?page=${page}`,
        );
        const data = await response.json();
        setChains(data.data);
        setLastPage(data.last_page);
      } catch (error) {
        console.error("Failed to fetch chains:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChains();
  }, [page]);

  return { chains, lastPage, isLoading };
}

export default function Chains() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { chains, lastPage, isLoading } = useChains(currentPage);

  const debouncedSearch = useDebounce((value: string) => {
    if (!chains) return;
    const filtered = chains.filter(
      (chain) =>
        chain.name.toLowerCase().includes(value.toLowerCase()) ||
        chain.chain_id.toString().includes(value),
    );
    setFilteredChains(filtered);
  }, 300);

  const [filteredChains, setFilteredChains] = useState<ChainDef[]>(chains);

  useEffect(() => {
    setFilteredChains(chains);
  }, [chains]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  const handleChainDetails = (id: number, name: string) => {
    navigate(`/chains/${id}/${name.toLowerCase()}`);
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === lastPage;

  return (
    <Container maxW="container.xl" my={5}>
      <Box mb={5}>
        <Flex justify="space-between" align="center">
          <Heading>Chainlist</Heading>

          <InputGroup width="300px">
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by name or ID"
              value={searchValue}
              onChange={handleInputChange}
              aria-label="Search chains"
            />
          </InputGroup>
        </Flex>
      </Box>

      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Chain ID</Th>
              <Th isNumeric>Ticker</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={3}>
                  <Center>
                    <Spinner size="xl" />
                  </Center>
                </Td>
              </Tr>
            ) : (
              (filteredChains.length > 0 ? filteredChains : chains).map(
                (chain) => (
                  <Tr key={chain.id}>
                    <Td
                      cursor="pointer"
                      onClick={() => handleChainDetails(chain.id, chain.name)}
                    >
                      {chain.name}
                    </Td>
                    <Td>{chain.chain_id}</Td>
                    <Td isNumeric>{chain.ticker}</Td>
                  </Tr>
                ),
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack justify="space-between" mt={5}>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={isPreviousDisabled}
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {lastPage}
        </Text>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, lastPage))}
          isDisabled={isNextDisabled}
        >
          Next
        </Button>
      </HStack>
    </Container>
  );
}
