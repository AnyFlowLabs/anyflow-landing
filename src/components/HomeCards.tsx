import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CogIcon, ShieldCheckIcon } from "lucide-react";

const CardStack: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (containerRef.current) {
        const offsetTop = containerRef.current.offsetTop;
        const newScrollY = window.scrollY - offsetTop;
        setScrollY(newScrollY);
      }
      animationRef.current = requestAnimationFrame(handleScroll);
    };

    animationRef.current = requestAnimationFrame(handleScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  const calculateTransform = useCallback(
    (index: number) => {
      const progress = (scrollY - index * windowHeight) / windowHeight;
      const easedProgress = easeOutCubic(Math.min(Math.max(progress, 0), 1));

      const scale =
        index < Math.ceil(scrollY / windowHeight)
          ? Math.max(0.75, 1 - easedProgress * 0.15)
          : 1;
      const translateY = Math.min(0, -easedProgress * 25);

      // const opacity = 1 - easedProgress * 0.5;
      const zIndex = 1 + index;

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        // opacity: isNaN(opacity) ? 0 : opacity,
        zIndex,
      };
    },
    [scrollY, windowHeight],
  );

  return (
    <VStack ref={containerRef} w="full" pos="relative" gap={16}>
      <HStack
        key="the-old-way"
        style={{
          ...calculateTransform(0),
          position: "sticky",
          top: "144px",
          transformOrigin: "center top",
          transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
        layerStyle="sectionLight"
      >
        <VStack align="center" w="full" gap={{ base: 4, md: 8 }}>
          <VStack align="center" gap={{ base: 2, md: 4 }}>
            <Text data-aos="fade-up" textStyle="section">
              The Old Way
            </Text>
            <Heading data-aos="fade-up" textStyle="title">
              The conventional deployment method
            </Heading>
            <Text data-aos="fade-up" textStyle="subtitle">
              Previously, you had to go through a time-intensive and complex
              process
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4} w="full">
            {[
              {
                title: "Cryptocurrency Acquisition",
                description:
                  "Acquire native tokens through complex exchanges and multiple wallets.",
              },
              {
                title: "Account Management",
                description:
                  "Manage various accounts, transfer funds, and configure multiple wallets.",
              },
              {
                title: "Technical Setup",
                description:
                  "Configure RPC providers, manage API keys, and test connections for hours.",
              },
              {
                title: "Security Concerns",
                description:
                  "Secure private keys and ensure their accessibility for deployments.",
              },
              {
                title: "Repeat for Each Network",
                description:
                  "Duplicate efforts across every network for deployment.",
              },
            ].map((step, index) => (
              <Box
                key={index}
                p={4}
                bgGradient={`linear(to-br, gray.600, transparent, transparent, transparent, transparent)`}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.600"
                pos="relative"
              >
                <Text
                  color={index + 1 === 5 ? "red" : "gray.100"}
                  fontWeight="light"
                  fontSize="3xl"
                >
                  {index + 1 === 5 ? "∞" : index + 1}
                </Text>
                <Heading
                  color="gray.100"
                  fontWeight="bold"
                  fontSize={index + 1 === 5 ? "2xl" : "xl"}
                  mb={3}
                >
                  {step.title}
                </Heading>
                <Text color="gray.300" fontSize="sm">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </HStack>

      <HStack
        key="the-future-way"
        style={{
          ...calculateTransform(1),
          position: "sticky",
          top: "144px",
          transformOrigin: "center top",
          transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
        layerStyle="sectionDark"
      >
        <VStack align="center" w="full" gap={{ base: 4, md: 8 }}>
          <VStack align="center" gap={{ base: 2, md: 4 }}>
            <Text data-aos="fade-up" textStyle="section">
              The Future of Deployment
            </Text>
            <Heading textStyle="title" data-aos="fade-up">
              Deploy Smart Contracts{" "}
              <Text as="span" color="brand.500">
                in Minutes
              </Text>
              ,
              <br />
              Not Hours
            </Heading>
            <Text textStyle="subtitle" data-aos="fade-up">
              Experience the magic of one-click deployments with Anyflow - where
              complexity meets simplicity
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} w="full" pb={48}>
            <Box
              p={4}
              layerStyle="section"
              data-aos="fade-up"
              data-aos-delay={200}
              overflow="hidden"
              border="1px solid"
              borderColor="gray.700"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                One-Click Deploy
              </Heading>
              <Heading color="gray.50" fontSize="lg" mb={6}>
                Deploy instantly with one command—no wallet setup or token
                buying needed.
              </Heading>

              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box position="relative" width="180px" height="180px">
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
                    filter="blur(20px)"
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

                  {/* Rotating gradient border */}
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
                      fontSize="md"
                      fontWeight="bold"
                      animation="fadeInOut 2s infinite"
                    >
                      Deploying
                    </Heading>
                    <Heading
                      bgGradient="linear(to-r, gray.300, gray.400)"
                      bgClip="text"
                      fontSize="xs"
                      mt={1}
                      animation="pulse 2s infinite"
                    >
                      Smart Contract
                    </Heading>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              p={4}
              layerStyle="section"
              data-aos="fade-up"
              data-aos-delay={200}
              overflow="hidden"
              border="1px solid"
              borderColor="gray.700"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Automated setup
              </Heading>
              <Heading color="gray.50" fontSize="lg" mb={6}>
                Automatically configures everything from RPC endpoints to
                network selection.
              </Heading>

              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box position="relative" width="180px" height="180px">
                  <Box
                    position="absolute"
                    top="0%"
                    left="25%"
                    borderRadius="50%"
                    width="150%"
                    height="150%"
                    zIndex={0}
                    transform="translate(-50%, -50%)"
                    bgGradient="linear(43deg, info.500 0%, success.600 46%, info.500 60%, success.600 80%, info.400 100%)"
                    filter="blur(40px)"
                    opacity={0.1}
                    animation="pulse 5s infinite"
                  />

                  <Flex
                    transform="translate(-50%, -50%)"
                    w="120px"
                    h="120px"
                    borderRadius="full"
                    bgGradient="linear(to-br, success.500, info.600)"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 0 20px rgba(0, 255, 255, 0.6)"
                    animation="spin 12s linear infinite"
                    border="4px solid"
                    borderColor="success.400"
                  >
                    <Text fontSize="5xl" color="success.50">
                      <CogIcon size={80} />
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box
              p={4}
              layerStyle="section"
              data-aos="fade-up"
              data-aos-delay={200}
              overflow="hidden"
              border="1px solid"
              borderColor="gray.700"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Built-in Security
              </Heading>
              <Heading color="gray.50" fontSize="lg" mb={6}>
                Ensures enterprise-grade security automatically, enforcing best
                practices.
              </Heading>

              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box position="relative" width="180px" height="180px">
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
                    transform="translate(-50%, -50%)"
                    w="120px"
                    mx="auto"
                    align="center"
                    justify="center"
                    h="120px"
                    borderRadius="full"
                    bgGradient="linear(to-br, transparent, info.500)"
                    animation="pulse 2s infinite"
                    boxShadow="0 0 20px rgba(66, 153, 225, 0.6)"
                    _before={{
                      content: '""',
                      top: "-2px",
                      left: "-2px",
                      position: "absolute",
                      w: "120px",
                      h: "120px",
                      borderRadius: "full",
                      border: "2px solid",
                      borderColor: "info.400",
                      animation: "ripple 1.5s infinite",
                    }}
                    color="info.500"
                  >
                    <ShieldCheckIcon size={80} />
                  </Flex>

                  <HStack
                    spacing={2}
                    left={-5}
                    justify="center"
                    position="absolute"
                    bottom={-5}
                    zIndex={10}
                  >
                    <Box
                      px={3}
                      py={1}
                      bg="rgba(72, 187, 120, 0.2)"
                      backdropFilter="blur(8px)"
                      border="1px solid"
                      borderColor="green.400"
                      borderRadius="full"
                      boxShadow="0 4px 12px rgba(72, 187, 120, 0.2)"
                    >
                      <Text fontSize="xs" color="green.200">
                        Secure
                      </Text>
                    </Box>
                    <Box
                      px={3}
                      py={1}
                      bg="rgba(66, 153, 225, 0.2)"
                      backdropFilter="blur(8px)"
                      border="1px solid"
                      borderColor="blue.400"
                      borderRadius="full"
                      boxShadow="0 4px 12px rgba(66, 153, 225, 0.2)"
                    >
                      <Text fontSize="xs" color="blue.200">
                        Audited
                      </Text>
                    </Box>
                    <Box
                      px={3}
                      py={1}
                      bg="rgba(159, 122, 234, 0.2)"
                      backdropFilter="blur(8px)"
                      border="1px solid"
                      borderColor="purple.400"
                      borderRadius="full"
                      boxShadow="0 4px 12px rgba(159, 122, 234, 0.2)"
                    >
                      <Text fontSize="xs" color="purple.200">
                        Protected
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </Box>
            <Box
              p={4}
              layerStyle="section"
              data-aos="fade-up"
              data-aos-delay={200}
              overflow="hidden"
              border="1px solid"
              borderColor="gray.700"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Cost Efficiency
              </Heading>
              <Heading color="gray.50" fontSize="lg" mb={6}>
                Only pay for deployments with clear pricing and no hidden fees
                or mandatory tokens.
              </Heading>

              <Box position="relative" height="160px">
                <Box
                  position="absolute"
                  top="0%"
                  left="25%"
                  borderRadius="50%"
                  width="150%"
                  height="150%"
                  zIndex={0}
                  transform="translate(-50%, -50%)"
                  bgGradient="linear(43deg, success.500 0%, info.500 46%, success.500 60%, info.600 80%, success.400 100%)"
                  filter="blur(20px)"
                  opacity={0.2}
                  animation="pulse 5s infinite"
                />

                <Box
                  position="absolute"
                  top="40%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="154px"
                  height="154px"
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
                        width="16px"
                        height="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="rgba(72, 187, 120, 0.1)"
                        borderRadius="md"
                        backdropFilter="blur(4px)"
                      >
                        <Text
                          fontSize="sm"
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
                    width="88px"
                    height="88px"
                    borderRadius="50%"
                    bg="rgba(72, 187, 120, 0.1)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="2px solid"
                    borderColor="green.400"
                  >
                    <Text fontSize="4xl" fontWeight="bold" color="info.500">
                      $
                    </Text>
                  </Box>
                </Box>

                <HStack
                  spacing={2}
                  left={2}
                  justify="center"
                  position="absolute"
                  bottom={-5}
                  zIndex={10}
                >
                  <Box
                    px={3}
                    py={1}
                    bg="rgba(72, 187, 120, 0.2)"
                    backdropFilter="blur(8px)"
                    border="1px solid"
                    borderColor="green.400"
                    borderRadius="full"
                    boxShadow="0 4px 12px rgba(72, 187, 120, 0.2)"
                  >
                    <Text fontSize="xs" color="green.200">
                      Pay-as-you-go
                    </Text>
                  </Box>
                  <Box
                    px={3}
                    py={1}
                    bg="rgba(66, 153, 225, 0.2)"
                    backdropFilter="blur(8px)"
                    border="1px solid"
                    borderColor="blue.400"
                    borderRadius="full"
                    boxShadow="0 4px 12px rgba(66, 153, 225, 0.2)"
                  >
                    <Text fontSize="xs" color="blue.200">
                      Transparent
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </HStack>

      <HStack
        key="the-anyflow"
        style={{
          ...calculateTransform(2),
          position: "sticky",
          top: "144px",
          transformOrigin: "center top",
          transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
          width: "100%",
        }}
        layerStyle="sectionBlack"
        p={0}
      >
        <VStack
          align="center"
          w="full"
          gap={{ base: 4, md: 8 }}
          position="relative"
          overflow="hidden"
          borderRadius={20}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            overflow="hidden"
            zIndex={0}
          >
            {[...Array(20)].map((_, i) => (
              <Box
                key={i}
                position="absolute"
                width={`${2 + Math.random() * Math.random()}px`}
                height={`${2 + Math.random() * Math.random()}px`}
                bg="gray.400"
                borderRadius="full"
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                animation={`${Math.random() > 0.5 ? "twinkle" : "pulse"} ${2 + Math.random() * 8}s infinite ${Math.random() * 2}s`}
                opacity={1}
                boxShadow="0 0 8px rgba(255,255,255,1)"
              />
            ))}
          </Box>

          <Box
            position="absolute"
            top="0%"
            left="50%"
            borderRadius="50%"
            width="200%"
            height="100%"
            zIndex={0}
            transform="translate(-50%, -50%)"
            bgGradient="linear(49deg, success.500  0%, info.500 46%, info.500 60%, info.600 80%, transparent 100%)"
            filter="blur(100px)"
            opacity={0.2}
            animation="pulse 5s infinite"
          />

          <VStack align="center" gap={{ base: 2, md: 4 }} zIndex={1} p={24}>
            <Text textStyle="section">Streamline and accelerate</Text>

            <Heading
              data-aos="fade-up"
              fontSize="8xl"
              textAlign="center"
              color="gray.50"
            >
              Optimize your workflow for faster development
            </Heading>

            <Text as="h3" color="gray.50" data-aos="fade-up">
              Concentrate on crafting exceptional blockchain solutions while we
              streamline the technical details
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default CardStack;
