import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TitleSection } from "./Components";
import { ArrowRightIcon, CheckIcon, TrophyIcon, XIcon } from "lucide-react";

const RecommendedSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <VStack spacing={{ base: 4, md: 8 }} align="center" w="full">
        <TitleSection
          pre="How it works"
          title="The smart way to deploy smart contracts"
          description="Stop wasting time and money on outdated methods"
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
          <VStack
            p={{ base: 6, md: 16 }}
            borderRadius="lg"
            border="2px solid"
            borderColor="gray.600"
            align="center"
            justify="center"
            spacing={{ base: 2, md: 4 }}
          >
            <Heading size="md" color="gray.100" textAlign="left" w="full">
              Traditional deployment
            </Heading>
            <Text color="danger.300" textAlign="left" w="full">
              The slow, risky and boring way
            </Text>

            <VStack align="start" spacing={4} w="full">
              <HStack align="start" justify="center" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-300)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Complex setup process</Text>
                  <Text color="gray.400" fontSize="sm">
                    Wastes 2-3 hours on configuration, faucets, funding,
                    verification…
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="center" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-300)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">High risk</Text>
                  <Text color="gray.400" fontSize="sm">
                    Holds private keys on a possibly compromised machine
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="center" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-300)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Isolated experience</Text>
                  <Text color="gray.400" fontSize="sm">
                    No community support
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="center" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-300)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Limited chain support</Text>
                  <Text color="gray.400" fontSize="sm">
                    One chain at a time
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            p={{ base: 6, md: 6 }}
            my={{ base: 0, md: -8 }}
            bgGradient="linear(to-br, brand.500, transparent, transparent, transparent, transparent)"
            borderRadius="lg"
            border="4px solid"
            borderColor="brand.500"
            align="start"
            spacing={6}
            position="relative"
            transition="all 0.3s ease-in-out"
            backdropFilter="blur(5px)"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Box
              // position="absolute"
              // top="-12px"
              // left="50%"
              // transform="translateX(-50%)"
              // bg="brand.500"
              color="white"
              px={4}
              py={2}
              borderRadius="lg"
              fontSize="sm"
              backdropFilter="blur(4px)"
            >
              Recommended
            </Box>

            <HStack align="center" justify="center" w="full">
              <TrophyIcon size={48} color="white" />
              <Heading
                size="lg"
                color="white"
                flex={1}
                textAlign="left"
                bgGradient="linear(to-r, brand.100, brand.500)"
                bgClip="text"
              >
                Our reward program
              </Heading>
            </HStack>
            <Text color="gray.200">Fast, rewarding, and community-driven</Text>

            <VStack align="start" spacing={4}>
              <HStack justify="start" align="start" w="full">
                <CheckIcon size={20} color="var(--anyflow-colors-brand-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.100">Lightning fast setup</Text>
                  <Text color="gray.300" fontSize="sm">
                    Ready in 5 minutes or less
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="start" w="full">
                <CheckIcon size={20} color="var(--anyflow-colors-brand-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.100">Earn while you test</Text>
                  <Text color="gray.300" fontSize="sm">
                    Up to $50 + referral bonuses
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="start" w="full">
                <CheckIcon size={20} color="var(--anyflow-colors-brand-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.100">Active community</Text>
                  <Text color="gray.300" fontSize="sm">
                    20+ developers helping each other
                  </Text>
                </VStack>
              </HStack>

              <HStack align="start" justify="start" w="full">
                <CheckIcon size={20} color="var(--anyflow-colors-brand-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.100">Multi-chain support</Text>
                  <Text color="gray.300" fontSize="sm">
                    12+ chains, one interface
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <Button
              variant="gradient"
              size="lg"
              w="full"
              rightIcon={<ArrowRightIcon />}
            >
              Get Started
            </Button>
          </VStack>

          <VStack
            p={{ base: 6, md: 16 }}
            borderRadius="lg"
            border="2px solid"
            borderColor="gray.600"
            align="center"
            justify="center"
            spacing={{ base: 2, md: 4 }}
          >
            <Heading size="md" color="gray.100" textAlign="left" w="full">
              Manual Testing
            </Heading>
            <Text color="danger.400" textAlign="left" w="full">
              High risk, high cost
            </Text>

            <VStack align="start" spacing={4} w="full">
              <HStack justify="start" align="start" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Error-Prone Process</Text>
                  <Text color="gray.400" fontSize="sm">
                    30% deployment failure rate
                  </Text>
                </VStack>
              </HStack>

              <HStack justify="start" align="start" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Expensive Testing</Text>
                  <Text color="gray.400" fontSize="sm">
                    Wasted gas on failed deploys
                  </Text>
                </VStack>
              </HStack>

              <HStack justify="start" align="start" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">No Support Network</Text>
                  <Text color="gray.400" fontSize="sm">
                    You're on your own
                  </Text>
                </VStack>
              </HStack>

              <HStack justify="start" align="start" w="full">
                <XIcon size={20} color="var(--anyflow-colors-danger-500)" />
                <VStack align="start" gap={0} flex={1}>
                  <Text color="gray.300">Chain Limitations</Text>
                  <Text color="gray.400" fontSize="sm">
                    Complex cross-chain setup
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RecommendedSection;
