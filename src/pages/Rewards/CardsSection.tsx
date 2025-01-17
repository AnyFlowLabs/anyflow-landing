import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  CogIcon,
  ArrowUpRightIcon,
  ClockAlertIcon,
  ShieldOffIcon,
  EyeOffIcon,
  ShieldCheckIcon,
  ArrowRightCircleIcon,
  ArrowRightFromLine,
  ArrowRightIcon,
  RocketIcon,
  BoltIcon,
  ZapIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const CardsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <HStack
          w="full"
          align="center"
          justify="center"
          gap={{ base: 4, md: 16 }}
        >
          <VStack flex={1} gap={{ base: 2, md: 8 }} align="stretch">
            <Text fontSize="4xl" fontWeight="bold">
              Sound familiar?
            </Text>
            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 8 }}
            >
              <ShieldOffIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize="xl" mb={1}>
                  Security headaches
                </Heading>
                <Text fontSize="md">
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
              gap={{ base: 2, md: 8 }}
            >
              <EyeOffIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize="xl" mb={1}>
                  Hidden costs
                </Heading>
                <Text fontSize="md">
                  Buying tokens across chains and paying gas fees adds up.
                </Text>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 8 }}
            >
              <ClockAlertIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize="xl" mb={1}>
                  Time sink
                </Heading>
                <Text fontSize="md">
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
                    fontSize="xs"
                    style={{ textDecoration: "underline" }}
                    color="brand.400"
                  >
                    47% of developers are already familiar with
                    <br />
                    CI/CD and DevOps activities like Github Actions
                  </Text>
                  <ArrowUpRightIcon
                    size={24}
                    color="var(--anyflow-colors-brand-400)"
                  />
                </HStack>
              </VStack>
            </HStack>
          </VStack>

          <VStack flex={1} gap={{ base: 2, md: 8 }} align="stretch">
            <Text fontSize="4xl" fontWeight="bold">
              There’s a better way
            </Text>
            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 8 }}
            >
              <ShieldCheckIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize="xl" mb={1}>
                  Enterprise-grade security
                </Heading>
                <Text fontSize="md">
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
                    size={16}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text fontSize="xs" color="success.500" flex={1}>
                    Third-party cloud enterprise KMS solution with HSMs
                  </Text>
                </HStack>
              </VStack>
            </HStack>

           
            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 8 }}
            >
              <ZapIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize="xl" mb={1}>
                Zero setups required

                </Heading>
                <Text fontSize="md">
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
                    size={16}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text fontSize="xs" color="success.500" flex={1}>
                  Save hours on deployment tasks and configuration.
                  </Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 8 }}
            >
              <RocketIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-success-500)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize="xl" mb={1}>
                Deploy in seconds

                </Heading>
                <Text fontSize="md">
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
                    size={16}
                    color="var(--anyflow-colors-success-500)"
                  />
                  <Text fontSize="xs" color="success.500" flex={1}>
                  Average deployment time: 1 minute

                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <Flex justify="center" mt={8}>
          <Button variant="gradient" size="lg">
            Start deploying effortlessly
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default CardsSection;
