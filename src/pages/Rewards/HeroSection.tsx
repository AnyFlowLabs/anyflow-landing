import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
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
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const roles = ["web3 CTO", "web3 tech lead", "web3 developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Box overflow="hidden" position="relative">
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontWeight="400"
                fontFamily="heading"
                letterSpacing={0.5}
                textAlign={{ base: "left", md: "center" }}
                w={{ base: "full", md: "auto" }}
              >
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.400, success.600)"
                  bgClip="text"
                >
                  Hey{" "}
                </Text>
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.500, success.400)"
                  bgClip="text"
                  fontWeight="bold"
                  animation={
                    isAnimating
                      ? `roleSlideUp 0.5s ease-out forwards`
                      : `roleSlideDown 0.5s ease-out`
                  }
                >
                  {roles[roleIndex]}
                </Text>
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.400, success.600)"
                  bgClip="text"
                >
                  , ready to shape the future?
                </Text>
              </Text>
            </Box>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              lineHeight="shorter"
              color="white"
              textAlign={{ base: "left", lg: "left" }}
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

            <Flex
              w="full"
              flexDir={{ base: "column", md: "row" }}
              gap={4}
              align="center"
              justify="flex-start"
            >
              <HStack
                fontSize="xs"
                letterSpacing={0.5}
                textTransform="uppercase"
                color="gray.100"
                bg="rgba(255,255,255,0.1)"
                px={4}
                py={2}
                borderRadius="lg"
                data-aos="fade-up"
                w={{ base: "full", md: "auto" }}
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
                w={{ base: "full", md: "auto" }}
              >
                <Text fontWeight="light" fontFamily="heading" letterSpacing={1}>
                  50 spots available
                </Text>
              </HStack>

              {/* <HStack
                fontSize="sm"
                color="gray.100"
                data-aos="fade-up"
                data-aos-delay={200}
                w={{ base: "full", md: "auto" }}
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
              </HStack> */}
            </Flex>

            <Text
              fontSize={{ base: "sm", md: "md" }}
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
              data-aos-delay={300}
              w={{ base: "full", md: "auto" }}
            >
              Start now
            </Button>

            <HStack
              spacing={{ base: 2, md: 12 }}
              pt={{ base: 2, md: 8 }}
              w="full"
              flexDir={{ base: "row", md: "row" }}
              align={{ base: "start", md: "start" }}
            >
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <BoltIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Setup in 5 minutes
                </Text>
              </HStack>
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <LockIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  No wallet connection required
                </Text>
              </HStack>
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <CoinsIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Up to $70 in rewards
                </Text>
              </HStack>
            </HStack>
          </VStack>

          <Box
            flex={1}
            display={{ base: "block", lg: "block" }}
            position="relative"
            mt={{ base: 8, md: 0 }}
            w="full"
          >
            <Box
              as="video"
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              width="full"
              height="auto"
              borderRadius="lg"
              objectFit="cover"
              transition="all 0.6s ease-in-out"
              // _hover={{
              //   filter: "blur(4px)",
              // }}
              border="solid 2px"
              borderColor="rgba(255,255,255,0.1)"
            />
            {/* <HStack
              position="absolute"
              top={8}
              left={-2}
              align="center"
              justify="center"
              p={{ base: 1, md: 4 }}
              borderRadius="lg"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation={{
                base: "none",
                md: "bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
              gap={{ base: 2, md: 4 }}
            >
              <MousePointerIcon size={24} />
              <Text fontSize={{ base: "xs", md: "sm" }}>One-Click Deploy</Text>
            </HStack>

            <HStack
              position="absolute"
              top={{ base: 6, md: 40 }}
              right={{ base: 0, md: -16 }}
              align="center"
              justify="center"
              p={{ base: 1, md: 4 }}
              borderRadius="lg"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation={{
                base: "none",
                md: "bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
              gap={{ base: 2, md: 4 }}
            >
              <CogIcon size={24} />
              <Text fontSize={{ base: "xs", md: "sm" }}>Automated Setup</Text>
            </HStack>

            <HStack
              position="absolute"
              bottom={{ base: 16, md: 2 }}
              right={{ base: -2, md: -24 }}
              align="center"
              justify="center"
              p={{ base: 1, md: 4 }}
              borderRadius="lg"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation={{
                base: "none",
                md: "bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
              gap={{ base: 2, md: 4 }}
            >
              <ShieldIcon size={24} />
              <Text fontSize={{ base: "xs", md: "sm" }}>Built-in Security</Text>
            </HStack>

            <HStack
              position="absolute"
              bottom={20}
              left={{ base: -2, md: -8 }}
              align="center"
              justify="center"
              p={{ base: 1, md: 4 }}
              borderRadius="lg"
              border="solid 1px"
              boxShadow="2xl"
              bg="rgba(255,255,255,0.1)"
              animation={{
                base: "none",
                md: "bounce2 8s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
              color="gray.50"
              borderColor="gray.50"
              backdropFilter="blur(5px)"
            >
              <HandCoinsIcon size={24} />
              <Text fontSize={{ base: "xs", md: "sm" }}>Cost Efficiency</Text>
            </HStack> */}
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <HStack
          spacing={{ base: 4, md: 6 }}
          w="full"
          align="center"
          justify="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <BackedSection />
          <FeaturedSection />
        </HStack>
      </Container>

      {/* <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 2, md: 8 }}
          w="full"
        >
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
              fontSize={{ base: "md", md: "lg" }}
              fontStyle="italic"
              h={{ base: "auto", md: "84px" }}
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
              gap={{ base: 4, md: 6 }}
            >
              <Image
                src="/rewards/avatar-1.png"
                alt="Wagner M. B."
                width={12}
                height={12}
              />

              <VStack w="full" align="start" gap={0} flex={1}>
                <Text
                  fontWeight="medium"
                  color="gray.100"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  John D.
                </Text>
                <Text
                  fontWeight="medium"
                  color="gray.300"
                  fontSize={{ base: "xs", md: "sm" }}
                >
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
              fontSize={{ base: "md", md: "lg" }}
              fontStyle="italic"
              h={{ base: "auto", md: "84px" }}
              color="gray.100"
            >
              "Setup took literally 5 minutes and I started earning immediately.
              The multi-chain testing experience is exactly what Web3 needed."
            </Text>

            <HStack
              align="center"
              justify="center"
              w="full"
              gap={{ base: 4, md: 6 }}
            >
              <Image
                src="/rewards/avatar-4.png"
                alt="Wagner M. B."
                width={12}
                height={12}
              />

              <VStack w="full" align="start" gap={0} flex={1}>
                <Text
                  fontWeight="medium"
                  color="gray.100"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Sarah Web3.
                </Text>
                <Text
                  fontWeight="medium"
                  color="gray.300"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  Blockchain Developer @ Web3 Studio
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container> */}
    </>
  );
};

export default HeroSection;
