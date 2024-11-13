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

  // const addToMetaMask = async () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   if (!window.ethereum || !chain) return;

  //   try {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [
  //         {
  //           chainId: `0x${chain.chain_id.toString(16)}`, // Convert to hex
  //           chainName: chain.name,
  //           nativeCurrency: {
  //             name: chain.ticker || "Native Token",
  //             symbol: chain.ticker || "ETH",
  //             decimals: 18,
  //           },
  //           rpcUrls: providers.map((provider) => provider.public_url),
  //           blockExplorerUrls: undefined,
  //         },
  //       ],
  //     });

  //     toast({
  //       title: "Chain added successfully",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //   } catch (error: never) {
  //     toast({
  //       title: "Error adding chain",
  //       description: error.message,
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  // const hasMetaMask = useMemo(
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   () => typeof window?.ethereum !== "undefined",
  //   [],
  // );

  if (isLoading) {
    return (
      <Container maxW="container.lg" my={12}>
        <VStack gap={4}>
          <Skeleton w="full" h="40px" />

          <Skeleton w="full" h="120px" />

          <Skeleton w="full" h="40px" />

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
            gap={4}
            w="full"
          >
            <Skeleton w="full" h="80px" />
            <Skeleton w="full" h="80px" />
            <Skeleton w="full" h="80px" />
            <Skeleton w="full" h="80px" />
            <Skeleton w="full" h="80px" />
          </Grid>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" my={12}>
      <VStack gap={8} w="full" align="flex-start">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/chains">Chains</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Chain Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex gap={4} align="center" w="full">
          <Flex flex={1} align="center" justify="flex-start" gap={8}>
            <Heading fontSize="5xl">{chain?.name}</Heading>
            <CopyChain chainId={chain?.chain_id.toString() || ""} />
          </Flex>
          {/* {hasMetaMask && (
            <Button
              onClick={addToMetaMask}
              isDisabled={!hasMetaMask || chain.is_testnet === 1 ? true : false}
              leftIcon={<MetamaskIcon width={18} height={18} />}
            >
              {t("chainlist.addToMetaMask")}
            </Button>
          )} */}
        </Flex>

        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={t("chainlist.search")}
            value={searchValue}
            onChange={handleSearchChange}
            aria-label={t("chainlist.search")}
          />
        </InputGroup>

        {paginatedItems.length > 0 ? (
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
            gap={4}
            w="full"
          >
            {paginatedItems.map((provider) => (
              <Box
                key={provider.id}
                bg="gray.800"
                borderRadius="md"
                p={4}
                _hover={{ shadow: "md" }}
                transition="all 0.2s"
              >
                <Flex justify="space-between" align="center" mb={2}>
                  <Text fontWeight="bold" fontSize="lg">
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
          <Center p={8} w="full">
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
  );
}
