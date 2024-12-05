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
import { SEO } from "../components/SEO";
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
      <SEO
        title={t("chainlist.title")}
        description={t("chainlist.description")}
      />
      
      <Container maxW="container.lg" my={{ base: 6, md: 12 }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" aria-label="Home">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage aria-current="page">
              Chains
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <VStack flex={1} align="flex-start" spacing={2}>
          <Heading as="h1">{t("chainlist.title")}</Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>{t("chainlist.description")}</Text>
        </VStack>

        <HStack spacing={2} justify={{ base: "center", md: "flex-end" }} my={4} flexWrap="wrap" gap={2}>
          <Button
            variant={viewMode === "list" ? "solid" : "ghost"}
            onClick={() => setViewMode("list")}
            aria-label="List view"
            aria-pressed={viewMode === "list"}
          >
            <ListIcon />
          </Button>
          <Button
            variant={viewMode === "grid" ? "solid" : "ghost"}
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
            aria-pressed={viewMode === "grid"}
          >
            <Grid3x3Icon />
          </Button>
          <InputGroup width={{ base: "full", md: "300px" }}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" aria-hidden="true" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder={t("chainlist.search")}
              value={searchValue}
              onChange={handleSearch}
              aria-label={t("chainlist.search")}
            />
          </InputGroup>
        </HStack>

        {isLoading ? (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: viewMode === "grid" ? 3 : 1, lg: viewMode === "grid" ? 4 : 1 }}
            spacing={viewMode === "grid" ? 4 : "1px"}
          >
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                h={viewMode === "grid" ? "200px" : "61px"}
                role="progressbar"
                aria-busy="true"
              />
            ))}
          </SimpleGrid>
        ) : viewMode === "list" ? (
          <VStack
            as="section"
            w="full"
            align="flex-start"
            borderWidth={1}
            borderColor="gray.500"
            borderRadius={8}
            overflow="hidden"
            gap={0}
            role="list"
          >
            {notFound ? (
              <HStack py={3} px={4}>
                <Text role="alert">{t("chainlist.chainNotFound")}</Text>
              </HStack>
            ) : (
              chains.map((chain) => (
                <HStack
                  key={chain.id}
                  w="full"
                  gap={{ base: 4, md: 8 }}
                  py={3}
                  px={4}
                  borderBottomWidth={1}
                  borderColor="gray.500"
                  role="listitem"
                >
                  <HStack flex={1} gap={{ base: 4, md: 8 }} flexWrap={{ base: "wrap", md: "nowrap" }}>
                    <Image
                      src={ChainLogo(chain.chain_id.toString())}
                      alt={`${chain.name} logo`}
                      width={12}
                      height={12}
                      loading="lazy"
                    />
                    <Tooltip label={t("chainlist.chainName")}>
                      <Text
                        role="button"
                        cursor="pointer"
                        onClick={() => handleChainDetails(chain.id, chain.name)}
                        w={{ base: "150px", md: "200px" }}
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
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} role="grid">
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
                role="gridcell"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleChainDetails(chain.id, chain.name);
                  }
                }}
              >
                <VStack align="flex-start">
                  <Image
                    src={ChainLogo(chain.chain_id.toString())}
                    alt={`${chain.name} logo`}
                    width="48px"
                    height="48px"
                    mx="auto"
                    loading="lazy"
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
