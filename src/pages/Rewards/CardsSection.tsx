import { APP_URL } from "@/const";
import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import {
  ArrowUpRightIcon,
  ClockAlertIcon,
  ShieldOffIcon,
  EyeOffIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  RocketIcon,
  ZapIcon,
} from "lucide-react";

const CardsSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <HStack
          w="full"
          align="stretch"
          justify="stretch"
          gap={{ base: 4, md: 16 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack flex={1} gap={{ base: 2, md: 8 }} align="stretch" h="full">
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "left", md: "center" }}
            >
              Sound familiar?
            </Heading>
            <HStack
              w="full"
              align={{ base: "center", md: "start" }}
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <ShieldOffIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Security headaches
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Managing private keys and securingdeployment <br />
                  processes is risky.
                </Text>
                <HStack
                  href="https://hacken.io/insights/2024-security-report/"
                  align="center"
                  justify="start"
                  gap={2}
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={{ base: 2, md: 4 }}
                  w="auto"
                >
                  <Text
                    fontSize="xs"
                    style={{ textDecoration: "underline" }}
                    color="brand.400"
                  >
                    More than $ 1.7 Bn lost due to smart contract hacks on 2024
                  </Text>
                  <ArrowUpRightIcon
                    size={24}
                    color="var(--anyflow-colors-brand-400)"
                  />
                </HStack>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <EyeOffIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Hidden costs
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Buying tokens across chains and paying gas fees adds up.
                </Text>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <ClockAlertIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Time sink
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Developers spend 30+ minutes per deployment managing tokens
                  and configurations.
                </Text>
                <HStack
                  href="https://www.developernation.net/developer-reports/dn22/"
                  align="center"
                  justify="start"
                  gap={2}
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={{ base: 2, md: 4 }}
                  w="auto"
                >
                  <Text
                    fontSize={{ base: "xs", md: "md" }}
                    style={{ textDecoration: "underline" }}
                    color="brand.400"
                  >
                    47% of developers are already familiar with
                    <br />
                    CI/CD and DevOps activities like Github Actions
                  </Text>
                  <ArrowUpRightIcon
                    size={isMobile ? 16 : 24}
                    color="var(--anyflow-colors-brand-400)"
                  />
                </HStack>
              </VStack>
            </HStack>
          </VStack>

          <VStack
            flex={1}
            gap={{ base: 2, md: 8 }}
            align="stretch"
            w="full"
            h="full"
          >
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "left", md: "center" }}
            >
              There’s a better way
            </Heading>
            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <ShieldCheckIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Enterprise-grade security
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  Bank-level encryption and key management are included.
                </Text>
                <HStack
                  align="center"
                  justify="start"
                  gap={2}
                  mt={{ base: 2, md: 4 }}
                  w="full"
                >
                  <ArrowRightIcon
                    size={isMobile ? 16 : 24}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text
                    fontSize={{ base: "xs", md: "md" }}
                    color="success.500"
                    flex={1}
                  >
                    Third-party cloud enterprise KMS solution with HSMs
                  </Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <ZapIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Zero setups required
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  We handle all the infrastructure heavy lifting.
                </Text>
                <HStack
                  align="center"
                  justify="start"
                  gap={2}
                  mt={{ base: 2, md: 4 }}
                  w="full"
                >
                  <ArrowRightIcon
                    size={isMobile ? 16 : 24}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text
                    fontSize={{ base: "xs", md: "md" }}
                    color="success.500"
                    flex={1}
                  >
                    Save hours on deployment tasks and configuration.
                  </Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 4, md: 8 }}
            >
              <RocketIcon
                size={isMobile ? 32 : 48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize={{ base: "md", md: "xl" }} mb={1}>
                  Deploy in seconds
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }}>
                  No token purchases, no config files—just instant deployments.
                </Text>
                <HStack
                  align="center"
                  justify="start"
                  gap={2}
                  mt={{ base: 2, md: 4 }}
                  w="full"
                >
                  <ArrowRightIcon
                    size={isMobile ? 16 : 24}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text
                    fontSize={{ base: "xs", md: "md" }}
                    color="success.500"
                    flex={1}
                  >
                    Average deployment time: 1 minute
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <Flex justify="center" mt={8}>
          <Button
            as={Link}
            href={APP_URL + "/rewards"}
            target="_blank"
            variant="gradient"
            size="lg"
            w={{ base: "full", md: "auto" }}
          >
            Start deploying effortlessly
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default CardsSection;
