import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import {
  BoltIcon,
  LockIcon,
  CoinsIcon,
  RocketIcon,
  SquareStackIcon,
  MousePointerIcon,
  CogIcon,
  ShieldIcon,
  HandCoinsIcon,
  ArrowRightIcon,
  UsersIcon,
  HeadphonesIcon,
  WalletIcon,
  LayersIcon,
  MessageSquareIcon,
  XIcon,
  GithubIcon,
  AlertCircleIcon,
  CheckIcon,
  TrophyIcon,
} from "lucide-react";
import BackedSection from "./Backted";
import FeaturedSection from "./Featured";
import ModalClose from "./ModelClose";
import { RetroGrid } from "./Bg";
import CardsSection from "./CardsSection";
import VercelLikeSection from "./VercelLikeSection";
import { TitleSection } from "./Components";

const RewardsPage = () => {
  return (
    <Box as="main">
      {/* <Box
        zIndex={0}
        w="100vw"
        h="100vh"
        position="absolute"
        bg="transparent"
        opacity={0.3}
      >
        <RetroGrid angle={45} />
      </Box> */}

      <Container
        maxW="container.xl"
        py={{ base: 4, md: 16 }}
        zIndex={2}
        pos="relative"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 0, md: 16 }}
        >
          <VStack spacing={4} align={{ base: "center", lg: "start" }} flex={1}>
            <Text
              fontSize="xl"
              bgGradient="linear(to-r, info.400, success.600)"
              bgClip="text"
              fontWeight="bold"
              fontFamily="heading"
              letterSpacing={0.5}
            >
              Hey web3 developer, ready to shape the future?
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              lineHeight="shorter"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
              data-aos="fade-up"
            >
              Earn up to{" "}
              <Text
                as="strong"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
                fontWeight="900"
              >
                $70
              </Text>{" "}
              testing the future of smart contract deployment
            </Heading>

            <Flex w="full" gap={4} align="center" justify="flex-start">
              <HStack
                fontSize="xs"
                letterSpacing={0.5}
                textTransform="uppercase"
                color="gray.100"
                bg="rgba(255,255,255,0.1)"
                px={4}
                py={2}
                borderRadius="md"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <SquareStackIcon size={16} />
                <Text fontWeight="light" fontFamily="heading" letterSpacing={1}>
                  Limited Spots Available
                </Text>
              </HStack>
              <HStack
                fontSize="sm"
                color="gray.100"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Text fontWeight="light" fontFamily="heading" letterSpacing={1}>
                  Trusted by 500+ developers
                </Text>
                <Flex
                  align="center"
                  justify="center"
                  color="yellow.300"
                  fontSize="2xl"
                >
                  ★★★★★
                </Flex>
              </HStack>
            </Flex>

            <Text
              fontSize="md"
              color="gray.100"
              maxW="xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Join leading web3 developers in revolutionizing smart contract
              deployment across 12+ chains. Share your expertise, earn rewards,
              and shape the future of blockchain development
            </Text>

            <Button
              size="lg"
              variant="gradient"
              color="white"
              px={16}
              py={8}
              rightIcon={<RocketIcon size={24} />}
              data-aos="fade-up"
            >
              Start now
            </Button>

            <HStack spacing={12} pt={8}>
              <HStack
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <BoltIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={0.25}
                >
                  Setup in 5 minutes
                </Text>
              </HStack>
              <HStack
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <LockIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={0.25}
                >
                  No wallet connection required
                </Text>
              </HStack>
              <HStack
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <CoinsIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={0.25}
                >
                  Instant rewards
                </Text>
              </HStack>
            </HStack>
          </VStack>

          <Box
            flex={1}
            display={{ base: "none", lg: "block" }}
            position="relative"
          >
            <Box
              bg="rgba(0,0,0,0.1)"
              data-aos="flip-right"
              data-aos-delay={100}
            >
              <Image
                src="/rewards/bg.jpg"
                alt="Smart Contract Deployment"
                width="full"
                height="auto"
                borderRadius="2xl"
                objectFit="cover"
                transition="all 0.6s ease-in-out"
                _hover={{
                  filter: "blur(4px)",
                }}
              />
            </Box>
            <HStack
              position="absolute"
              top={8}
              left={-2}
              align="center"
              justify="center"
              p={{ base: 4, md: 4 }}
              borderRadius="md"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation="bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite"
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
            >
              <MousePointerIcon size={24} />
              <Text>One-Click Deploy</Text>
            </HStack>

            <HStack
              position="absolute"
              top={80}
              right={-16}
              align="center"
              justify="center"
              p={{ base: 4, md: 4 }}
              borderRadius="md"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation="bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite"
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
            >
              <CogIcon size={24} />
              <Text>Automated Setup</Text>
            </HStack>

            <HStack
              position="absolute"
              bottom={10}
              right={-8}
              align="center"
              justify="center"
              p={{ base: 4, md: 4 }}
              borderRadius="md"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation="bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite"
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
            >
              <ShieldIcon size={24} />
              <Text>Built-in Security</Text>
            </HStack>

            <HStack
              position="absolute"
              bottom={40}
              left={-8}
              align="center"
              justify="center"
              p={{ base: 4, md: 4 }}
              borderRadius="md"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation="bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite"
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
            >
              <HandCoinsIcon size={24} />
              <Text>Cost Efficiency</Text>
            </HStack>
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <HStack spacing={16} w="full" align="center" justify="center">
          <BackedSection />
          <FeaturedSection />
        </HStack>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          <VStack
            flex={1}
            p={{ base: 6, md: 12 }}
            bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
            border="solid 1px"
            borderColor="gray.500"
            borderRadius="lg"
            align="start"
            transition="all 0.3s ease-in-out"
            backdropFilter="blur(4px)"
            _hover={{
              bgGradient:
                "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
              transform: "translateY(-2px)",
            }}
          >
            <Flex
              align="center"
              justify="center"
              color="yellow.400"
              fontSize="2xl"
            >
              ★★★★★
            </Flex>
            <Text
              textAlign="left"
              fontSize="lg"
              fontStyle="italic"
              h="84px"
              color="gray.100"
            >
              "The reward program made testing our smart contracts across chains
              a breeze. Earned $50 while improving our deployment process -
              win-win!"
            </Text>

            <HStack
              align="center"
              justify="center"
              w="full"
              gap={{ base: 2, md: 4 }}
            >
              <Image
                src="/rewards/avatar-1.png"
                alt="Wagner M. B."
                width={12}
                height={12}
              />

              <VStack w="full" align="start" gap={0} flex={1}>
                <Text fontWeight="medium" color="gray.100">
                  John D.
                </Text>
                <Text fontWeight="medium" color="gray.300" fontSize="sm">
                  Senior Smart Contract Engineer @ DeFi Protocol
                </Text>
              </VStack>
            </HStack>
          </VStack>

          <VStack
            flex={1}
            p={{ base: 6, md: 12 }}
            bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
            border="solid 1px"
            borderColor="gray.500"
            borderRadius="lg"
            align="start"
            transition="all 0.3s ease-in-out"
            backdropFilter="blur(4px)"
            _hover={{
              bgGradient:
                "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
              transform: "translateY(-2px)",
            }}
          >
            <Flex
              align="center"
              justify="center"
              color="yellow.400"
              fontSize="2xl"
            >
              ★★★★★
            </Flex>
            <Text
              textAlign="left"
              fontSize="lg"
              fontStyle="italic"
              h="84px"
              color="gray.100"
            >
              "Setup took literally 5 minutes and I started earning immediately.
              The multi-chain testing experience is exactly what Web3 needed."
            </Text>

            <HStack
              align="center"
              justify="center"
              w="full"
              gap={{ base: 2, md: 4 }}
            >
              <Image
                src="/rewards/avatar-4.png"
                alt="Wagner M. B."
                width={12}
                height={12}
              />

              <VStack w="full" align="start" gap={0} flex={1}>
                <Text fontWeight="medium" color="gray.100">
                  Sarah Web3.
                </Text>
                <Text fontWeight="medium" color="gray.300" fontSize="sm">
                  Blockchain Developer @ Web3 Studio
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>

      <VercelLikeSection />

      <CardsSection />

      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack spacing={{ base: 1, md: 2 }} align="center" w="full">
          <TitleSection
            pre="Benefits"
            title="Why join our program?"
            description="Get rewarded while helping shape the future of web3 deployment"
          />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <WalletIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={4}>
                <Heading size="md" color="white">
                  Earn while testing
                </Heading>
                <VStack align="start" spacing={2}>
                  <Text color="info.500">Up to $70 per completion</Text>
                  <Text color="info.500">$10 early bird bonus</Text>
                  <Text color="info.500">$10 per referral</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  View reward structure
                </Button>
                <Text fontSize="sm" color="gray.400">
                  Payout at the end of each month
                </Text>
              </VStack>
            </VStack>

            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <LayersIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={4}>
                <Heading size="md" color="white">
                  Shape the future
                </Heading>
                <VStack align="start" spacing={2}>
                  <Text color="info.500">12+ Supported chains</Text>
                  <Text color="info.500">Direct impact on features</Text>
                  <Text color="info.500">Early access to updates</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  Explore supported chains
                </Button>
              </VStack>
            </VStack>

            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <UsersIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={4}>
                <Heading size="md" color="white">
                  Join the community
                </Heading>
                <VStack align="start" spacing={2}>
                  <Text color="info.300">24 active members</Text>
                  <Text color="info.300">24/7 Support</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<MessageSquareIcon size={16} />}
                >
                  Join Discord community
                </Button>
              </VStack>
            </VStack>
          </SimpleGrid>

          <Button
            size="lg"
            variant="gradient"
            mt={8}
            rightIcon={<ArrowRightIcon />}
          >
            Start earning now
          </Button>
        </VStack>
      </Container>

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
              <Text color="gray.200">
                Fast, rewarding, and community-driven
              </Text>

              <VStack align="start" spacing={4}>
                <HStack justify="start" align="start" w="full">
                  <CheckIcon
                    size={20}
                    color="var(--anyflow-colors-brand-500)"
                  />
                  <VStack align="start" gap={0} flex={1}>
                    <Text color="gray.100">Lightning fast setup</Text>
                    <Text color="gray.300" fontSize="sm">
                      Ready in 5 minutes or less
                    </Text>
                  </VStack>
                </HStack>

                <HStack align="start" justify="start" w="full">
                  <CheckIcon
                    size={20}
                    color="var(--anyflow-colors-brand-500)"
                  />
                  <VStack align="start" gap={0} flex={1}>
                    <Text color="gray.100">Earn while you test</Text>
                    <Text color="gray.300" fontSize="sm">
                      Up to $50 + referral bonuses
                    </Text>
                  </VStack>
                </HStack>

                <HStack align="start" justify="start" w="full">
                  <CheckIcon
                    size={20}
                    color="var(--anyflow-colors-brand-500)"
                  />
                  <VStack align="start" gap={0} flex={1}>
                    <Text color="gray.100">Active community</Text>
                    <Text color="gray.300" fontSize="sm">
                      20+ developers helping each other
                    </Text>
                  </VStack>
                </HStack>

                <HStack align="start" justify="start" w="full">
                  <CheckIcon
                    size={20}
                    color="var(--anyflow-colors-brand-500)"
                  />
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

      <ModalClose />
    </Box>
  );
};

export default RewardsPage;
