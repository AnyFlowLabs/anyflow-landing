import {
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
import { useParams } from "react-router-dom";
import { CHAINS_API } from "@/const/chainsApi";
export default function ChainDetails() {
  const { chainId } = useParams();

  const data = CHAINS_API.data.find((chain) => chain.id === Number(chainId));

  console.log(data);

  return (
    <Container maxW={"container.xl"} my={5}>
      <Heading>{data?.name}</Heading>

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>ID</Th>
              <Th isNumeric>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.providers.map((provider) => (
                <Tr key={provider.id}>
                  <Td>{provider.name}</Td>
                  <Td>{provider.id}</Td>
                  <Td isNumeric>{provider.status}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
