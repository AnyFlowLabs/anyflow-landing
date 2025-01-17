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
} from "lucide-react";
import BackedSection from "./Backted";
import FeaturedSection from "./Featured";

const HeroSection = () => {
  return (
    <>
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
              // bg="rgba(0,0,0,0.1)"
              data-aos="flip-right"
              data-aos-delay={100}
            >
              <Image
                src="/rewards/hero.webp"
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
              top={40}
              right={-24}
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
              bottom={20}
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
    </>
  );
};

export default HeroSection;
