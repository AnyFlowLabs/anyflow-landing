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
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { ChainDef } from "@/const/chainsApi";
import { Search2Icon } from "@chakra-ui/icons";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "@/components/pagination/Pagination";
import useChains from "@/hooks/useChains";

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

  const isTrue = (value: number) => {
    return value === 1;
  };

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
              <Th isNumeric>Mainnet</Th>
              <Th isNumeric>Testnet</Th>
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
                    <Td
                      isNumeric
                      color={!isTrue(chain.is_testnet) ? "green" : "red"}
                    >
                      {!isTrue(chain.is_testnet) ? "Yes" : "No"}
                    </Td>
                    <Td
                      isNumeric
                      color={isTrue(chain.is_testnet) ? "green" : "red"}
                    >
                      {isTrue(chain.is_testnet) ? "Yes" : "No"}
                    </Td>

                    <Td isNumeric>{chain.ticker}</Td>
                  </Tr>
                ),
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={lastPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}
