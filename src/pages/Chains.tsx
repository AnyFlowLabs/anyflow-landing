import { CHAINS_API } from "@/const/chainsApi";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Chains() {
  const navigate = useNavigate();

  const handleChainDetails = (chainName: string) => {
    navigate(`/chains/${chainName.toLocaleLowerCase()}`);
  };

  return (
    <Container maxW={"container.xl"} my={5}>
      <Box>
        <Heading>Chainlist</Heading>
      </Box>

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>ID</Th>
              <Th isNumeric>TICKER</Th>
            </Tr>
          </Thead>
          <Tbody>
            {CHAINS_API.data.map((chain) => (
              <Tr
                key={chain.id}
                cursor="pointer"
                onClick={() => handleChainDetails(chain.name)}
              >
                <Td>{chain.name}</Td>
                <Td>{chain.id}</Td>
                <Td isNumeric>{chain.ticker}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
