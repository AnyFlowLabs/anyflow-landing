import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  HStack,
  VStack,
  Skeleton,
  Badge,
  Tooltip,
  Button,
  SimpleGrid,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "@/components/Pagination";
import useAllChains from "@/hooks/useAllChains";
import { ChainLogo } from "@api3/logos";
import { CopyChain } from "../components/CopyChain";
import { Grid3x3Icon, ListIcon } from "lucide-react";

import { useTranslation } from "react-i18next";

export default function Chains() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParam, setSearchParam] = useState<string>("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const { chains, lastPage, isLoading } = useAllChains(
    currentPage,
    searchParam,
  );

  const debouncedSearch = useDebounce((value: string) => {
    if (value.length >= 2) {
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

  const handleChainDetails = (chainId: number, name: string) => {
    navigate(`/chains/${chainId}/${name.toLowerCase()}`);
  };

  const notFound = useMemo(() => {
    return chains.length <= 0 && searchParam.length >= 3 ? true : false;
  }, [searchParam, chains]);

  return (
    <>
      <Container maxW="container.lg" my={12}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              Chains
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <VStack flex={1} align="flex-start">
          <Heading>{t("chainlist.title")}</Heading>
          <Text fontSize="smaller">{t("chainlist.description")}</Text>
        </VStack>

        <HStack spacing={2} justify="flex-end" my={4}>
          <Button
            variant={viewMode === "list" ? "solid" : "ghost"}
            onClick={() => setViewMode("list")}
          >
            <ListIcon />
          </Button>
          <Button
            variant={viewMode === "grid" ? "solid" : "ghost"}
            onClick={() => setViewMode("grid")}
          >
            <Grid3x3Icon />
          </Button>
          <InputGroup width="300px">
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={t("chainlist.search")}
              value={searchValue}
              onChange={handleSearch}
              aria-label={t("chainlist.search")}
            />
          </InputGroup>
        </HStack>

        {isLoading ? (
          <SimpleGrid
            columns={viewMode === "grid" ? 4 : 1}
            spacing={viewMode === "grid" ? 4 : "1px"}
          >
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                h={viewMode === "grid" ? "200px" : "61px"}
              />
            ))}
          </SimpleGrid>
        ) : viewMode === "list" ? (
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
                <Text>{t("chainlist.chainNotFound")}</Text>
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
                    <Tooltip label={t("chainlist.chainName")}>
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

                    <Tooltip label={t("chainlist.nativeToken")}>
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
                    {chain.is_testnet.toString() === "1"
                      ? "TESTNET"
                      : "MAINNET"}
                  </Badge>
                </HStack>
              ))
            )}
          </VStack>
        ) : (
          <SimpleGrid columns={4} spacing={4}>
            {chains.map((chain) => (
              <Box
                key={chain.id}
                borderWidth={1}
                borderColor="gray.500"
                borderRadius={8}
                p={4}
                cursor="pointer"
                onClick={() => handleChainDetails(chain.id, chain.name)}
                _hover={{ borderColor: "gray.300" }}
              >
                <VStack align="flex-start">
                  <Image
                    src={ChainLogo(chain.chain_id.toString())}
                    alt={chain.name}
                    width="48px"
                    height="48px"
                    mx="auto"
                  />
                  <VStack spacing={2} align="flex-start">
                    <Text fontWeight="bold">{chain.name}</Text>
                    <HStack>
                      <CopyChain chainId={chain.chain_id.toString()} />
                    </HStack>
                    <HStack>
                      <Text fontSize="sm">
                        {chain.ticker.replace("USDT", "")}
                      </Text>
                      <Badge
                        color={
                          chain.is_testnet.toString() === "1"
                            ? "gray.100"
                            : "success.300"
                        }
                      >
                        {chain.is_testnet.toString() === "1"
                          ? "TESTNET"
                          : "MAINNET"}
                      </Badge>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={lastPage}
          onPageChange={setCurrentPage}
        />
      </Container>
    </>
  );
}
