import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
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
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
                pos="relative"
                opacity={0.25 + index * 0.25}
              >
                <Text
                  color="gray.100"
                  fontWeight="light"
                  fontSize="5xl"
                  textStyle={index + 1 === 5 ? "gradient" : undefined}
                >
                  {index + 1 === 5 ? "∞" : index + 1}
                </Text>
                <Text color="gray.100" fontWeight="bold" fontSize="Xl" mb={3}>
                  {step.title}
                </Text>
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
      >
        <VStack align="center" w="full" gap={{ base: 4, md: 8 }}>
          <VStack align="center" gap={{ base: 2, md: 4 }}>
            <Text textStyle="section">Welcome to the Future</Text>
            <Heading textStyle="title" data-aos="fade-up">
              {t("home.newSection.newWay.title")}
            </Heading>
            <Text textStyle="subtitle" data-aos="fade-up">
              Deploy smart contracts in seconds with just one command
            </Text>
            <Text as="h3" color="white" data-aos="fade-up">
              Focus on building great products while we handle the complexity
            </Text>
            <Heading as="h3" fontSize="3xl" color="white" data-aos="fade-up">
              The Smart Way to Deploy Smart Contracts
            </Heading>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default CardStack;
