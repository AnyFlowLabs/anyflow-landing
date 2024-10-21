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
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 5;
export default function ChainDetails() {
  const { chainId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const data = CHAINS_API.data.find((chain) => chain.id === Number(chainId));
  const totalPages = Math.ceil(data!.providers.length / 5) || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = data!.providers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

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
            {paginatedItems.map((provider) => (
              <Tr key={provider.id}>
                <Td>{provider.name}</Td>
                <Td>{provider.id}</Td>
                <Td isNumeric>{provider.status}</Td>
              </Tr>
            ))}
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
