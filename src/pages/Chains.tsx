import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  HStack,
  VStack,
  Skeleton,
  Badge,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { CheckIcon, CopyIcon, Search2Icon } from "@chakra-ui/icons";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "@/components/pagination/Pagination";
import useAllChains from "@/hooks/useAllChains";
import { ChainLogo } from "@api3/logos";

const CopyChain = ({ chainId }: { chainId: string }) => {
  const { onCopy, hasCopied } = useClipboard(chainId);

  return (
    <Tooltip label="Chain ID">
      <Flex onClick={onCopy} alignItems={"center"}>
        <Text w="100px">{chainId}</Text>
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Flex>
    </Tooltip>
  );
};

export default function Chains() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParam, setSearchParam] = useState<string>("");
  const { chains, lastPage, isLoading } = useAllChains(
    currentPage,
    searchParam,
  );

  const debouncedSearch = useDebounce((value: string) => {
    if (value.length >= 3) {
      setSearchParam(value);
    }

    if (value.length <= 0) {
      setSearchParam("");
    }

    if (!chains) return;
  }, 500);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  const handleChainDetails = (id: number, name: string) => {
    navigate(`/chains/${id}/${name.toLowerCase()}`);
  };

  const notFound = useMemo(() => {
    return chains.length <= 0 && searchParam.length >= 3 ? true : false;
  }, [searchParam, chains]);

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
              onChange={handleSearch}
              aria-label="Search chains"
            />
          </InputGroup>
        </Flex>
      </Box>

      {isLoading ? (
        <VStack w="full" gap="1px">
          <Skeleton h="48px" w="full" />
          <Skeleton h="48px" w="full" />
          <Skeleton h="48px" w="full" />
        </VStack>
      ) : (
        <VStack
          w="full"
          align="flex-start"
          borderWidth={1}
          borderColor="gray.500"
          borderRadius={8}
          overflow="hidden"
          gap={0}
        >
          {notFound ? (
            <HStack py={3} px={4}>
              <Text>Chain not found, try again.</Text>
            </HStack>
          ) : (
            chains.map((chain) => (
              <HStack
                key={chain.id}
                w="full"
                gap={8}
                py={3}
                px={4}
                borderBottomWidth={1}
                borderColor="gray.500"
              >
                <HStack flex={1} gap={8}>
                  <img
                    src={ChainLogo(chain.chain_id.toString())}
                    alt={chain.name}
                    width={24}
                    height={24}
                  />
                  <Tooltip label="Chain Name">
                    <Text
                      role="button"
                      cursor="pointer"
                      onClick={() => handleChainDetails(chain.id, chain.name)}
                      w="200px"
                    >
                      {chain.name}
                    </Text>
                  </Tooltip>

                  <CopyChain chainId={chain.chain_id.toString()} />

                  <Tooltip label="Native Token">
                    <Text>{chain.ticker.replace("USDT", "")}</Text>
                  </Tooltip>
                </HStack>

                <Badge
                  color={
                    chain.is_testnet.toString() === "1"
                      ? "gray.100"
                      : "success.300"
                  }
                >
                  {chain.is_testnet.toString() === "1" ? "TESTNET" : "MAINNET"}
                </Badge>
              </HStack>
            ))
          )}
        </VStack>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={lastPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}
