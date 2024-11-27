import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Badge,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

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

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: isNaN(opacity) ? 0 : opacity,
      };
    },
    [scrollY, windowHeight],
  );

  return (
    <VStack ref={containerRef} w="full" pos="relative" gap={4} p={0} m={0}>
      <HStack
        key="1"
        w="full"
        p={{ base: 8, md: 12 }}
        bg="gray.800"
        mb={{ base: 8, md: 12 }}
        borderRadius={20}
        style={{
          ...calculateTransform(0),
          position: "sticky",
          top: "144px",
          zIndex: 1,
          transformOrigin: "center top",
          transition:
            "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out",
        }}
        bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
        border="solid 1px"
        borderColor="gray.500"
        boxShadow="2xl"
      >
        <VStack align="flex-start" w="full" spacing={8}>
          <VStack align="flex-start">
            <Text
              data-aos="fade-up"
              fontSize="md"
              letterSpacing={2}
              textTransform="uppercase"
              color="brand.500"
            >
              The Old Way
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "4xl", md: "5xl" }}
              color="white"
              fontWeight="bold"
              lineHeight="1.1"
              data-aos="fade-up"
            >
              The Complex Journey of Smart Contract Deployment
            </Heading>
            <Text
              color="gray.300"
              fontSize={{ base: "lg", md: "xl" }}
              data-aos="fade-up"
            >
              A time-consuming process filled with multiple steps and potential
              pitfalls that can slow down your development workflow
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                title: "1. Cryptocurrency Acquisition",
                description:
                  "Navigate complex exchanges and manage multiple wallets just to acquire native tokens for deployment",
                icon: "💰",
              },
              {
                title: "2. Account Management",
                description:
                  "Juggle between different accounts, transfer funds, and maintain multiple wallet configurations",
                icon: "🔑",
              },
              {
                title: "3. Technical Setup",
                description:
                  "Spend hours configuring RPC providers, managing API keys and testing connections",
                icon: "⚙️",
              },
              {
                title: "4. Security Concerns",
                description:
                  "Deal with the constant worry of securing private keys while keeping them accessible for deployments",
                icon: "🛡️",
              },
            ].map((step, index) => (
              <Box
                key={index}
                p={4}
                bg="gray.700"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.600"
                _hover={{
                  borderColor: "brand.500",
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
                data-aos="fade-up"
                data-aos-delay={50 * index}
              >
                <Text color="gray.50" fontWeight="bold" fontSize="lg" mb={3}>
                  {step.title}
                </Text>
                <Text color="gray.300" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </HStack>

      <HStack
        key="1"
        w="full"
        p={{ base: 8, md: 12 }}
        bg="gray.800"
        mb={{ base: 8, md: 12 }}
        borderRadius={20}
        style={{
          ...calculateTransform(1),
          position: "sticky",
          top: "144px",
          zIndex: 1,
          transformOrigin: "center top",
          transition:
            "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out",
        }}
        bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
        border="solid 1px"
        borderColor="gray.500"
        boxShadow="2xl"
      >
        <VStack align="flex-start" w="full" spacing={8}>
          <VStack align="flex-start" spacing={6}>
            <Text
              variant="glow"
              data-aos="fade-up"
              fontSize="md"
              letterSpacing={2}
              textTransform="uppercase"
              color="brand.400"
            >
              The Future of Deployment
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "4xl", md: "6xl" }}
              color="white"
              fontWeight="bold"
              lineHeight="1.1"
              data-aos="fade-up"
            >
              Deploy Smart Contracts in Minutes,
              <br />
              Not Hours
            </Heading>
            <Text
              color="gray.300"
              fontSize={{ base: "lg", md: "xl" }}
              data-aos="fade-up"
            >
              Experience the magic of one-click deployments with Anyflow - where
              complexity meets simplicity
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {[
              {
                title: "1. One-Click Deploy",
                description:
                  "Deploy your smart contracts instantly with a single command - no wallet setup or token purchases needed",
                icon: "🚀",
              },
              {
                title: "2. Automated Setup",
                description:
                  "Our platform handles all configurations automatically - from RPC endpoints to network selection",
                icon: "⚡",
              },
              {
                title: "3. Built-in Security",
                description:
                  "Enterprise-grade security by default, with automated audits and best practices enforcement",
                icon: "🛡️",
              },
              {
                title: "4. Cost Efficiency",
                description:
                  "Pay only for what you deploy, with transparent pricing and no hidden fees or token requirements",
                icon: "💎",
              },
            ].map((step, index) => (
              <Box
                key={index}
                p={4}
                bg="gray.700"
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
                data-aos-delay={100 * index}
              >
                <Text color="brand.500" fontWeight="bold" fontSize="lg" mb={3}>
                  {step.title}
                </Text>
                <Text color="gray.300" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </HStack>

      <Box
        bgGradient="linear(to-br, brand.500, gray.900, gray.900,  gray.900, gray.800)"
        border="solid 1px"
        p={{ base: 8, md: 16 }}
        borderColor="gray.500"
        boxShadow="2xl"
        key="new-way"
        w="full"
        borderRadius={20}
        style={{
          ...calculateTransform(2),
          position: "sticky",
          top: "144px",
          zIndex: 2,
          transformOrigin: "center top",
          transition:
            "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out",
        }}
      >
        <VStack align="center" flex={1} gap={4}>
          <Text
            variant="glow"
            data-aos="fade-up"
            colorScheme="brand"
            fontSize="md"
            textTransform="uppercase"
            color="green.500"
            px={4}
            py={2}
          >
            Welcome to the Future
          </Text>
          <Heading as="h3" fontSize="6xl" color="white" data-aos="fade-up">
            {t("home.newSection.newWay.title")}
          </Heading>
          <Text as="h3" color="white" data-aos="fade-up">
            Deploy smart contracts in seconds with just one command
          </Text>
          <Text as="h3" color="white" data-aos="fade-up">
            Focus on building great products while we handle the complexity
          </Text>
          <Heading as="h3" fontSize="3xl" color="white" data-aos="fade-up">
            The Smart Way to Deploy Smart Contracts
          </Heading>
        </VStack>
      </Box>
    </VStack>
  );
};

export default CardStack;
