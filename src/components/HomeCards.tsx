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

import { useTranslation } from "react-i18next";
import { ShieldCheckIcon } from "lucide-react";

const CardStack: FC = () => {
  const { t } = useTranslation();

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

      const opacity = 1 - easedProgress * 0.5;
      const zIndex = 1 + index;

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: isNaN(opacity) ? 0 : opacity,
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
              The Complex Journey of Smart Contract Deployment
            </Heading>
            <Text data-aos="fade-up" textStyle="subtitle">
              A time-consuming process filled with multiple steps and potential
              pitfalls that can slow down your development workflow
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4} w="full">
            {[
              {
                title: "Cryptocurrency Acquisition",
                description:
                  "Navigate complex exchanges and manage multiple wallets just to acquire native tokens for deployment",
              },
              {
                title: "Account Management",
                description:
                  "Juggle between different accounts, transfer funds, and maintain multiple wallet configurations",
              },
              {
                title: "Technical Setup",
                description:
                  "Spend hours configuring RPC providers, managing API keys and testing connections",
              },
              {
                title: "Security Concerns",
                description:
                  "Deal with the constant worry of securing private keys while keeping them accessible for deployments",
              },
              {
                title: "Repeat for each network",
                description:
                  "Repeat the same process for each network you want to deploy to",
              },
            ].map((step, index) => (
              <Box
                key={index}
                p={4}
                bgGradient={`linear(to-br, gray.700, transparent, transparent, transparent, transparent)`}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
                boxShadow="2xl"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
                pos="relative"
              >
                <Text
                  color="gray.100"
                  fontWeight="light"
                  fontSize={"3xl"}
                  textStyle={index + 1 === 5 ? "gradient" : undefined}
                >
                  {index + 1 === 5 ? "∞" : index + 1}
                </Text>
                <Heading
                  color="gray.100"
                  fontWeight="bold"
                  fontSize={index + 1 === 5 ? "3xl" : "xl"}
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
              <Text as="span" textStyle="gradient">
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
              key={0}
              p={4}
              layerStyle="sectionDark"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.600"
              _hover={{
                borderColor: "brand.400",
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              data-aos="fade-up"
              data-aos-delay={0}
              overflow="hidden"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                One-Click Deploy
              </Heading>
              <Text color="gray.300" fontSize="sm" mb={6}>
                Deploy your smart contracts instantly with a single command - no
                wallet setup or token purchases needed
              </Text>

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
                    bgGradient="linear(43deg, info.500 0%, success.800 46%, info.500 60%, brand.600 80%, brand.400 100%)"
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
              key={1}
              p={4}
              layerStyle="sectionDark"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.600"
              _hover={{
                borderColor: "brand.400",
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Automated Setup
              </Heading>
              <Text color="gray.300" fontSize="sm" mb={6}>
                Our platform handles all configurations automatically - from RPC
                endpoints to network selection
              </Text>

              <Box position="relative" mt={2}>
                <Box
                  w="full"
                  h="8px"
                  bg="gray.600"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <Box
                    h="full"
                    bgGradient="linear(to-r, brand.500, info.500)"
                    animation="progressBar 6s infinite"
                  />
                </Box>

                <HStack spacing={4} mt={4} justify="space-between">
                  <Box textAlign="center">
                    <Text color="brand.500" fontSize="xs" mb={1}>
                      Repository
                    </Text>
                    <Box
                      w="6"
                      h="6"
                      borderRadius="full"
                      bgGradient="linear(to-br, brand.500, info.500)"
                    />
                  </Box>

                  <Box textAlign="center">
                    <Text color="brand.500" fontSize="xs" mb={1}>
                      Networks
                    </Text>
                    <Box
                      w="6"
                      h="6"
                      borderRadius="full"
                      bgGradient="linear(to-br, brand.500, info.500)"
                    />
                  </Box>

                  <Box textAlign="center">
                    <Text color="brand.500" fontSize="xs" mb={1}>
                      Review
                    </Text>
                    <Box
                      w="6"
                      h="6"
                      borderRadius="full"
                      bgGradient="linear(to-br, brand.500, info.500)"
                    />
                  </Box>

                  <Box textAlign="center">
                    <Text color="info.500" fontSize="xs" mb={1}>
                      Deploy
                    </Text>
                    <Box
                      w="6"
                      h="6"
                      borderRadius="full"
                      bgGradient="linear(to-br, brand.500, info.500)"
                    >
                      <Text color="white" textAlign="center" lineHeight="24px">
                        ✓
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box
              key={2}
              p={4}
              layerStyle="sectionDark"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.600"
              _hover={{
                borderColor: "brand.400",
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              data-aos="fade-up"
              data-aos-delay={200}
              overflow="hidden"
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Built-in Security
              </Heading>
              <Text color="gray.300" fontSize="sm" mb={6}>
                Enterprise-grade security by default, with automated audits and
                best practices enforcement
              </Text>

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
              key={3}
              p={4}
              layerStyle="sectionDark"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.600"
              _hover={{
                borderColor: "brand.400",
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <Heading color="brand.500" fontWeight="bold" fontSize="xl" mb={4}>
                Cost Efficiency
              </Heading>
              <Text color="gray.300" fontSize="sm" mb={6}>
                Pay only for what you deploy, with transparent pricing and no
                hidden fees or token requirements
              </Text>

              <Box position="relative" height="120px" mb={4}>
                <Box
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translateX(-50%)"
                  width="80%"
                  height="80px"
                  borderRadius="lg"
                  bg="gray.800"
                  overflow="hidden"
                >
                  {/* Animated Cost Bars */}
                  <HStack
                    height="100%"
                    spacing={2}
                    justify="center"
                    align="flex-end"
                    padding={2}
                  >
                    {[0.4, 0.8, 0.6, 0.9, 0.5].map((height, i) => (
                      <Box
                        key={i}
                        width="15%"
                        height={`${height * 100}%`}
                        bg="brand.500"
                        borderRadius="sm"
                        animation={`pulse ${1 + i * 0.2}s infinite`}
                      />
                    ))}
                  </HStack>
                </Box>

                {/* Floating Dollar Symbol */}
                <Box
                  position="absolute"
                  top="0"
                  left="50%"
                  transform="translateX(-50%)"
                  width="40px"
                  height="40px"
                  borderRadius="full"
                  bg="green.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  animation="fadeInOut 2s infinite"
                >
                  <Text fontSize="xl" color="white" fontWeight="bold">
                    $
                  </Text>
                </Box>
              </Box>

              {/* Cost Tags */}
              <HStack spacing={2} justify="center">
                <Box px={3} py={1} bg="green.500" borderRadius="full">
                  <Text fontSize="xs" color="white">
                    Pay-as-you-go
                  </Text>
                </Box>
                <Box px={3} py={1} bg="blue.500" borderRadius="full">
                  <Text fontSize="xs" color="white">
                    No Hidden Fees
                  </Text>
                </Box>
              </HStack>
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
        >
          {/* Animated background elements */}
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
                width="4px"
                height="4px"
                bg="brand.400"
                borderRadius="full"
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                animation={`float ${3 + Math.random() * 4}s infinite`}
                opacity={0.3}
              />
            ))}
            <Box
              position="absolute"
              width="full"
              height="full"
              bgGradient="radial(circle at 50% 50%, brand.500 0%, transparent 70%)"
              opacity={0.1}
              animation="pulse 4s infinite"
            />
          </Box>

          <VStack align="center" gap={{ base: 2, md: 4 }} zIndex={1} p={32}>
            <Text
              textStyle="section"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                height: "2px",
                width: "0%",
                bottom: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                bgGradient: "linear(to-r, transparent, brand.500, transparent)",
                animation: "expandWidth 2s ease-out forwards",
              }}
            >
              Welcome to the Future
            </Text>

            <Heading
              data-aos="fade-up"
              fontSize="8xl"
              animation="shimmer 3s infinite"
            >
              {t("home.newSection.newWay.title")}
            </Heading>

            <Box position="relative">
              <Text
                textStyle="subtitle"
                data-aos="fade-up"
                position="relative"
                zIndex={2}
              >
                Deploy smart contracts in seconds with just one command
              </Text>
              <Box
                position="absolute"
                top="50%"
                left="-20px"
                transform="translateY(-50%)"
                width="40px"
                height="40px"
                borderRadius="full"
                bgGradient="linear(to-r, brand.500, info.500)"
                animation="spin 4s linear infinite"
                opacity={0.6}
              />
            </Box>

            <Text
              as="h3"
              color="white"
              data-aos="fade-up"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                width: "120%",
                height: "1px",
                bottom: "-8px",
                left: "-10%",
                bgGradient: "linear(to-r, transparent, gray.500, transparent)",
                animation: "pulse 2s infinite",
              }}
            >
              Focus on building great products while we handle the complexity
            </Text>

            <Heading
              as="h3"
              fontSize="3xl"
              color="white"
              data-aos="fade-up"
              position="relative"
            >
              The Smart Way to Deploy Smart Contracts
            </Heading>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default CardStack;
