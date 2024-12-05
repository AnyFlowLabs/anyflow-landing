import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  Stack,
  Badge,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import useChain from "@/hooks/useChain";
import { CopyChain } from "../components/CopyChain";
import Pagination from "@/components/Pagination";
import { Search2Icon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/SEO";

const ITEMS_PER_PAGE = 10;

export default function ChainDetails() {
  const { chainId } = useParams();
  const { chain, isLoading } = useChain(Number(chainId));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { t } = useTranslation();

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <Container maxW="container.lg" my={{ base: 6, md: 12 }}>
        <VStack gap={4} role="status" aria-label="Loading chain details">
          <Skeleton w="full" h="40px" />
          <Skeleton w="full" h="120px" />
          <Skeleton w="full" h="40px" />
          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
            gap={4}
            w="full"
          >
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} w="full" h="80px" />
            ))}
          </Grid>
        </VStack>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={`${chain?.name || 'Chain Details'} - AnyFlow`}
        description={`View details and providers for ${chain?.name} blockchain network`}
      />

      <Container maxW="container.lg" my={{ base: 6, md: 12 }}>
        <VStack gap={8} w="full" align="flex-start">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/chains">Chains</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" aria-current="page">
                {chain?.name || 'Chain Details'}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex 
            gap={4} 
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            w="full"
          >
            <Flex flex={1} align="center" justify="flex-start" gap={4} flexWrap="wrap">
              <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>{chain?.name}</Heading>
              <CopyChain chainId={chain?.chain_id?.toString() || ""} />
            </Flex>
          </Flex>

          <InputGroup maxW={{ base: "full", md: "300px" }}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" aria-hidden="true" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder={t("chainlist.search")}
              value={searchValue}
              onChange={handleSearchChange}
              aria-label={t("chainlist.search")}
            />
          </InputGroup>

          {paginatedItems.length > 0 ? (
            <Grid
              as="section"
              templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }}
              gap={4}
              w="full"
              role="region"
              aria-label="Provider List"
            >
              {paginatedItems.map((provider) => (
                <Box
                  key={provider.id}
                  bg="gray.800"
                  borderRadius="md"
                  p={4}
                  _hover={{ shadow: "md" }}
                  transition="all 0.2s"
                  role="article"
                  aria-label={`Provider: ${provider.name}`}
                >
                  <Flex justify="space-between" align="center" mb={2}>
                    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                      {provider.name}
                    </Text>
                    <Badge
                      colorScheme={
                        provider.status === "online"
                          ? "green"
                          : provider.status === "offline"
                            ? "red"
                            : "gray"
                      }
                      aria-label={`Status: ${provider.status}`}
                    >
                      {provider.status}
                    </Badge>
                  </Flex>

                  <Stack spacing={2}>
                    <Flex justify="space-between">
                      <Text fontSize="sm" color="gray.200">
                        {t("chainlist.chainId")}
                      </Text>
                      <Text fontSize="sm">{provider.chain_id}</Text>
                    </Flex>
                    <Flex justify="space-between">
                      <Text fontSize="sm" color="gray.200">
                        {t("chainlist.latency")}
                      </Text>
                      <Text fontSize="sm">{provider.latency}ms</Text>
                    </Flex>
                  </Stack>
                </Box>
              ))}
            </Grid>
          ) : (
            <Center p={8} w="full" role="alert">
              <Text color="gray.500">{t("chainlist.noProviders")}</Text>
            </Center>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </VStack>
      </Container>
    </>
  );
}
