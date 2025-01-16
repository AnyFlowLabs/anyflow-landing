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
  UsersIcon,
  SquareStackIcon,
  QuoteIcon,
  MouseIcon,
  PointerIcon,
  MousePointer2,
  MousePointer2Icon,
  MousePointerIcon,
  CogIcon,
  ShieldAlertIcon,
  ShieldIcon,
  HandCoinsIcon,
  ArrowUpRightIcon,
  CircleDollarSignIcon,
  ClockAlertIcon,
  ShieldOffIcon,
  EyeOffIcon,
  ShieldCheckIcon,
} from "lucide-react";
import BackedSection from "./Backted";
import FeaturedSection from "./Featured";
import ModalClose from "./ModelClose";
import { RetroGrid } from "./Bg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const RewardsPage = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="main"
      bg="gray.800"
      bgGradient="linear(to-b, gray.800, gray.800, #000, transparent, gray.800)"
    >
      <Box
        zIndex={0}
        w="100vw"
        h="100vh"
        position="absolute"
        bg="transparent"
        opacity={0.3}
      >
        <RetroGrid angle={65} />
      </Box>

      <Box
        position="absolute"
        top="25%"
        left="100%"
        transform="translate(-50%, -50%)"
        w="50vw"
        h="50vh"
        bgGradient="linear(to-br, info.900, info.900, info.900, transparent)"
        filter="blur(100px)"
        zIndex={1}
      />
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
                fontWeight="bold"
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
              //   animation="bounce2 16s cubic-bezier(0, 0, 0.2, 1) infinite"
              color="gray.50"
              p={4}
              borderRadius="2xl"
              border="solid 2px"
              borderColor="rgba(0,0,0,0.1)"
              backdropFilter="blur(10px)"
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

      <Container
        maxW="container.lg"
        py={{ base: 4, md: 8 }}
        mt={{ base: 4, md: 8 }}
      >
        <VStack w="full" align="center" justify="center" spacing={0}>
          <Text
            fontSize="xl"
            bgGradient="linear(to-r, info.400, success.600)"
            bgClip="text"
            fontWeight="bold"
            fontFamily="heading"
            letterSpacing={0.5}
          >
            Tired of wasting time on developments?
          </Text>
          <Text
            textAlign="center"
            fontSize="5xl"
            color="gray.100"
            lineHeight="shorter"
            fontWeight="bold"
          >
            You're not alone. That’s why we’re building <br />
            <Text
              as="span"
              color="brand.400"
              bgGradient="linear(to-r, brand.200, brand.500)"
              bgClip="text"
              fontSize="6xl"
            >
              the “Vercel” of smart contracts.
            </Text>
          </Text>
        </VStack>

        <VStack
          w="full"
          align="center"
          justify="center"
          spacing={0}
          pt={8}
          bg="gray.50"
          borderRadius="lg"
          p={8}
          my={{ base: 4, md: 8 }}
        >
          <Text
            textAlign="center"
            fontSize="3xl"
            fontFamily="body"
            fontWeight="light"
            lineHeight="shorter"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            color="gray.800"
          >
            <QuoteIcon size={48} style={{ transform: "rotate(180deg)" }} />
            Every deployment felt like a gamble with manual gas setups and
            private key risks. AnyFlow’s automation ensures I can deploy
            confidently and focus on scaling my project.
            <QuoteIcon size={24} />
          </Text>
          <HStack
            align="center"
            justify="center"
            gap={{ base: 2, md: 4 }}
            mt={4}
          >
            <Image
              src="/rewards/avatar-1.png"
              alt="Wagner M. B."
              width={12}
              height={12}
            />

            <VStack w="full" align="start" gap={0} flex={1}>
              <Text fontWeight="medium" color="gray.800">
                Samantha Torres{" "}
              </Text>
              <Text fontWeight="medium" color="gray.300" fontSize="sm">
                Developer @ Web3 startup
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <VStack w="full" align="center" justify="center" mb={{ base: 8, md: 16 }}>
          <Text fontSize="4xl" fontWeight="bold">
            Sound familiar?
          </Text>
        </VStack>
        <HStack
          mt={8}
          w="full"
          align="stretch"
          justify="stretch"
          gap={{ base: 2, md: 4 }}
        >
          <VStack
            align="start"
            justify="center"
            w="full"
            p={{ base: 4, md: 8 }}
            borderRadius="lg"
            border="solid 1px"
            borderColor="gray.700"
          >
            <VStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 4 }}
            >
              <ShieldOffIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0} flex={1}>
                <Heading fontSize="2xl" mb={1}>
                  Security headaches
                </Heading>
                <Text fontSize="sm">
                  Managing private keys and securing deployment processes is
                  risky.
                </Text>
                <HStack
                  w="full"
                  align="center"
                  justify="start"
                  gap={2}
                  as="a"
                  href="https://hacken.io/insights/2024-security-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={{ base: 2, md: 4 }}
                >
                  <Text
                    fontSize="xs"
                    style={{ textDecoration: "underline" }}
                    color="brand.400"
                    flex={1}
                  >
                    More than $ 1.7 Bn lost due to smart contract
                    <br />
                    hacks on 2024
                  </Text>
                  <ArrowUpRightIcon
                    size={24}
                    color="var(--anyflow-colors-brand-400)"
                  />
                </HStack>
              </VStack>
            </VStack>
          </VStack>

          <VStack
            align="start"
            justify="start"
            w="full"
            p={{ base: 4, md: 8 }}
            borderRadius="lg"
            border="solid 1px"
            borderColor="gray.700"
          >
            <VStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 4 }}
            >
              <EyeOffIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize="2xl" mb={1}>
                  Hidden costs
                </Heading>
                <Text fontSize="sm">
                  Buying tokens across chains and paying gas fees adds up.
                </Text>
              </VStack>
            </VStack>
          </VStack>

          <VStack
            align="start"
            justify="start"
            w="full"
            p={{ base: 4, md: 8 }}
            borderRadius="lg"
            border="solid 1px"
            borderColor="gray.700"
          >
            <VStack
              w="full"
              align="start"
              justify="center"
              gap={{ base: 2, md: 4 }}
            >
              <ClockAlertIcon
                size={48}
                strokeWidth={1}
                color="var(--anyflow-colors-brand-800)"
              />

              <VStack w="full" align="start" justify="center" gap={0}>
                <Heading fontSize="2xl" mb={1}>
                  Time sink
                </Heading>
                <Text fontSize="sm">
                  Developers spend 30+ minutes per deployment managing tokens
                  and configurations.
                </Text>
                <HStack
                  w="full"
                  align="center"
                  justify="start"
                  gap={2}
                  as="a"
                  href="https://www.developernation.net/developer-reports/dn22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={{ base: 2, md: 4 }}
                >
                  <Text
                    fontSize="xs"
                    style={{ textDecoration: "underline" }}
                    color="brand.400"
                    flex={1}
                  >
                    47% of developers are already familiar with CI/CD and DevOps
                    activities like Github Actions
                  </Text>
                  <ArrowUpRightIcon
                    size={24}
                    color="var(--anyflow-colors-brand-400)"
                  />
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <VStack
          w="full"
          align="center"
          justify="center"
          spacing={0}
          mb={{ base: 8, md: 16 }}
        >
          <Text fontSize="4xl" fontWeight="bold">
            There’s a better way
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 6, md: 8 }}
          w="full"
        >
          <VStack
            p={{ base: 8, md: 8 }}
            pt={{ base: 8, md: 8 }}
            layerStyle="section"
            borderRadius="lg"
            data-aos="fade-up"
            data-aos-delay={200}
            overflow="hidden"
            border="1px solid"
            borderColor="gray.700"
            align="center"
            justify="center"
            h="460px"
            gap={0}
          >
            <Heading
              color="brand.500"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              mb={4}
              w="full"
              textAlign="left"
            >
              Deploy in seconds
            </Heading>
            <Text
              color="gray.50"
              fontSize={{ base: "sm", md: "md" }}
              mb={{ base: 0, md: 6 }}
              fontWeight="light"
            >
              No token purchases, no config files—just instant deployments.
            </Text>

            <Text color="success.500">Average deployment time: 1 minute</Text>

            <Flex
              display={{ base: "none", md: "flex" }}
              position="relative"
              justify="center"
              align="center"
              h="full"
            >
              <Box
                position="absolute"
                bottom={4}
                width={{ base: "160px", md: "160px" }}
                height={{ base: "160px", md: "160px" }}
              >
                <Box
                  position="absolute"
                  top="0%"
                  left="25%"
                  borderRadius="50%"
                  width="150%"
                  height="150%"
                  zIndex={0}
                  transform="translate(-50%, -50%)"
                  bgGradient="linear(43deg, info.500 0%, success.800 46%, info.500 60%, info.600 80%, brand.400 100%)"
                  filter="blur(40px)"
                  opacity={0.3}
                  animation="pulse 2s infinite"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex={1}
                  width="100%"
                  height="100%"
                  borderRadius="50%"
                  bgGradient="linear(to-br, gray.700, gray.800)"
                />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  borderRadius="50%"
                  border="4px solid"
                  borderColor="transparent"
                  bgGradient="linear(43deg, brand.500 0%, info.500 50%, brand.500 100%)"
                  animation="spin 3s linear infinite"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "-8px",
                    left: "-8px",
                    right: "-8px",
                    bottom: "-8px",
                    borderRadius: "50%",
                    border: "4px solid transparent",
                    bgGradient:
                      "linear(43deg, info.800 0%, success.500 50%, info.500 100%)",
                    animation: "spin 4s linear infinite reverse",
                  }}
                />

                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  zIndex={1}
                >
                  <Heading
                    textStyle="gradient"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="bold"
                    animation="fadeInOut 2s infinite"
                  >
                    Deploying
                  </Heading>
                  <Heading
                    bgGradient="linear(to-r, gray.300, gray.400)"
                    bgClip="text"
                    fontSize={{ base: "sm", md: "sm" }}
                    mt={1}
                    animation="pulse 2s infinite"
                  >
                    Smart contract
                  </Heading>
                </Box>
              </Box>
            </Flex>
          </VStack>
          <VStack
            p={{ base: 8, md: 8 }}
            pt={{ base: 8, md: 8 }}
            layerStyle="section"
            borderRadius="lg"
            data-aos="fade-up"
            data-aos-delay={200}
            overflow="hidden"
            border="1px solid"
            borderColor="gray.700"
            align="center"
            justify="center"
            h="460px"
            gap={0}
          >
            <Heading
              color="brand.500"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              mb={4}
              w="full"
              textAlign="left"
            >
              Zero setups required
            </Heading>
            <Text
              color="gray.50"
              fontSize={{ base: "sm", md: "md" }}
              mb={{ base: 0, md: 6 }}
              fontWeight="light"
            >
              We handle all the infrastructure heavy lifting.
            </Text>

            <Text color="success.500">
              Save hours on deployment tasks and configuration.
            </Text>
            <Flex
              display={{ base: "none", md: "flex" }}
              position="relative"
              justify="center"
              align="center"
              h="full"
            >
              <Box
                position="absolute"
                bottom={4}
                width={{ base: "160px", md: "160px" }}
                height={{ base: "160px", md: "160px" }}
              >
                <Box
                  position="absolute"
                  top="0%"
                  left="25%"
                  borderRadius="50%"
                  width="150%"
                  height="150%"
                  zIndex={0}
                  transform="translate(-50%, -50%)"
                  bgGradient="linear(43deg, info.700 0%, success.800 46%, info.500 60%, info.600 80%, success.400 100%)"
                  filter="blur(40px)"
                  opacity={0.1}
                  animation="pulse 2s infinite"
                />

                <Flex
                  w={{ base: "160px", md: "160px" }}
                  h={{ base: "160px", md: "160px" }}
                  borderRadius="full"
                  bgGradient="linear(to-br, success.500, info.600)"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 0 20px rgba(0, 255, 255, 0.6)"
                  animation="spin 12s linear infinite"
                  border="4px solid"
                  borderColor="success.400"
                >
                  <Text
                    fontSize={{ base: "6xl", md: "5xl" }}
                    color="success.50"
                  >
                    <CogIcon size={80} />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </VStack>

          <VStack
            p={{ base: 8, md: 8 }}
            pt={{ base: 8, md: 8 }}
            layerStyle="section"
            borderRadius="lg"
            data-aos="fade-up"
            data-aos-delay={200}
            overflow="hidden"
            border="1px solid"
            borderColor="gray.700"
            align="center"
            justify="center"
            h="460px"
            gap={0}
          >
            <Heading
              color="brand.500"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              mb={4}
              w="full"
              textAlign="left"
            >
              Enterprise-grade security
            </Heading>
            <Text
              color="gray.50"
              fontSize={{ base: "sm", md: "md" }}
              mb={{ base: 0, md: 6 }}
              fontWeight="light"
            >
              Bank-level encryption and key management are included.
            </Text>
            <Text color="success.500" fontSize="sm">
              Third-party cloud enterprise KMS solution with HSMs
            </Text>

            <Flex
              display={{ base: "none", md: "flex" }}
              position="relative"
              justify="center"
              align="center"
              h="full"
            >
              <Box
                position="absolute"
                bottom={4}
                width={{ base: "160px", md: "160px" }}
                height={{ base: "160px", md: "160px" }}
              >
                <Box
                  position="absolute"
                  top="25%"
                  left="25%"
                  borderRadius="50%"
                  width="150%"
                  height="150%"
                  zIndex={0}
                  transform="translate(-50%, -50%)"
                  bgGradient="linear(43deg, info.700 0%, success.800 46%, info.500 60%, info.600 80%, success.400 100%)"
                  filter="blur(40px)"
                  opacity={0.1}
                  animation="pulse 2s infinite"
                />

                <Flex
                  w={{ base: "160px", md: "160px" }}
                  mx="auto"
                  align="center"
                  justify="center"
                  h={{ base: "160px", md: "160px" }}
                  borderRadius="full"
                  bgGradient="linear(to-br, transparent, info.500)"
                  animation="pulse 2s infinite"
                  boxShadow="0 0 20px rgba(66, 153, 225, 0.6)"
                  _before={{
                    content: '""',
                    top: "-2px",
                    left: "-2px",
                    position: "absolute",
                    w: { base: "160px", md: "160px" },
                    h: { base: "160px", md: "160px" },
                    borderRadius: "full",
                    border: "2px solid",
                    borderColor: "info.400",
                    animation: "ripple 1.5s infinite",
                  }}
                  color="info.50"
                >
                  <ShieldCheckIcon size={80} />
                </Flex>
              </Box>
            </Flex>
          </VStack>

          <Box
            p={{ base: 8, md: 8 }}
            pt={{ base: 8, md: 8 }}
            layerStyle="section"
            borderRadius="lg"
            data-aos="fade-up"
            data-aos-delay={200}
            overflow="hidden"
            border="1px solid"
            borderColor="gray.700"
            h="460px"
            gap={0}
          >
            <Heading
              color="brand.500"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              mb={4}
              w="full"
              textAlign="left"
            >
              {t("home.cards.futureWay.features.costEfficiency.title")}
            </Heading>
            <Text
              color="gray.50"
              fontSize={{ base: "sm", md: "md" }}
              mb={{ base: 0, md: 6 }}
              fontWeight="light"
            >
              {t("home.cards.futureWay.features.costEfficiency.description")}
            </Text>

            <Box
              position="relative"
              height={{ base: "180px", md: "180px" }}
              display={{ base: "none", md: "flex" }}
              alignContent="center"
              justifyContent="center"
            >
              <Box
                position="absolute"
                top="0%"
                left="25%"
                borderRadius="50%"
                width="150%"
                height="150%"
                zIndex={0}
                transform="translate(-50%, -50%)"
                bgGradient="linear(43deg, info.700 0%, success.800 46%, info.500 60%, info.600 80%, success.400 100%)"
                filter="blur(40px)"
                opacity={0.1}
                animation="pulse 2s infinite"
              />

              <Box
                position="absolute"
                bottom={-4}
                width={{ base: "160px", md: "160px" }}
                height={{ base: "160px", md: "160px" }}
                borderRadius="50%"
                bgGradient="linear(to-br, gray.800, transparent)"
                border="2px solid"
                borderColor="green.400"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={1}
                boxShadow="0 0px 20px rgba(72, 187, 120, 0.3)"
              >
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  animation="spin 15s linear infinite"
                >
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <Box
                      key={i}
                      position="absolute"
                      top="44%"
                      left="44%"
                      transform={`rotate(${deg}deg) translateY(-60px)`}
                      width={{ base: "20px", md: "16px" }}
                      height={{ base: "20px", md: "16px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="rgba(72, 187, 120, 0.1)"
                      borderRadius="md"
                      backdropFilter="blur(4px)"
                    >
                      <Text
                        fontSize={{ base: "md", md: "sm" }}
                        fontWeight="bold"
                        color="success.500"
                      >
                        {
                          [
                            "ETH",
                            "BNB",
                            "MATIC",
                            "AVAX",
                            "FTM",
                            "ONE",
                            "USDC",
                            "USDT",
                          ][i]
                        }
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Box
                  position="absolute"
                  width={{ base: "108px", md: "88px" }}
                  height={{ base: "108px", md: "88px" }}
                  borderRadius="50%"
                  bg="rgba(72, 187, 120, 0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid"
                  borderColor="green.400"
                >
                  <Text
                    fontSize={{ base: "5xl", md: "4xl" }}
                    fontWeight="bold"
                    color="info.50"
                  >
                    $
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <Flex justify="center" mt={8}>
          <Button variant="gradient" size="lg">
            Start deploying effortlessly
          </Button>
        </Flex>
      </Container>

      <ModalClose />
    </Box>
  );
};

export default RewardsPage;
