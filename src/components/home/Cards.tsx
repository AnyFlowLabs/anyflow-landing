/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CogIcon, ShieldCheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BUTTON_GITHUB } from "@/const";

const CardsSection: FC = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  const calculateTransform = useCallback(
    (index: number) => {
      if (isMobile) return {};

      const progress = (scrollY - index * windowHeight) / windowHeight;
      const easedProgress = easeOutCubic(Math.min(Math.max(progress, 0), 1));

      const scale =
        index < Math.ceil(scrollY / windowHeight)
          ? Math.max(0.75, 1 - easedProgress * 0.15)
          : 1;
      const translateY = Math.min(0, -easedProgress * 25);

      const zIndex = 1 + index;

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        zIndex,
      };
    },
    [scrollY, windowHeight, isMobile],
  );

  return (
    <Container
      maxW={{ base: "full", md: "container.xl" }}
      mb={{ base: 44, md: 12, lg: 16 }}
    >
      <VStack
        ref={containerRef}
        w="full"
        pos="relative"
        gap={{ base: 8, md: 16 }}
      >
        <HStack
          key="the-old-way"
          style={{
            ...calculateTransform(0),
            position: isMobile ? "relative" : "sticky",
            top: "72px",
            transformOrigin: "center top",
            transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
          layerStyle="sectionLight"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack align="center" w="full" gap={{ base: 4, md: 8 }}>
            <VStack align="center" gap={{ base: 2, md: 4 }}>
              <Text data-aos="fade-up" textStyle="section">
                {t("home.cards.oldWay.title")}
              </Text>
              <Heading data-aos="fade-up" textStyle="title" textAlign="center">
                {t("home.cards.oldWay.subtitle")}
              </Heading>
              <Text
                data-aos="fade-up"
                textStyle="subtitle"
                textAlign="center"
                px={4}
              >
                {t("home.cards.oldWay.description")}
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 5 }}
              spacing={{ base: 4, md: 6 }}
              w="full"
            >
              {[1, 2, 3, 4, 5].map((step) => (
                <Box
                  key={step}
                  p={{ base: 6, md: 4 }}
                  bgGradient={`linear(to-br, gray.600, transparent, transparent, transparent, transparent)`}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.600"
                  pos="relative"
                >
                  <Text
                    color={step === 5 ? "red" : "gray.100"}
                    fontWeight="light"
                    fontSize={{ base: "4xl", md: "3xl" }}
                  >
                    {step === 5 ? "∞" : step}
                  </Text>
                  <Heading
                    color="gray.100"
                    fontWeight="bold"
                    fontSize={
                      step === 5
                        ? { base: "2xl", md: "xl" }
                        : { base: "xl", md: "lg" }
                    }
                    mb={3}
                  >
                    {/* @ts-ignore */}
                    {t(`home.cards.oldWay.steps.step${step}.title`)}
                  </Heading>
                  <Text color="gray.300" fontSize={{ base: "md", md: "sm" }}>
                    {/* @ts-ignore */}
                    {t(`home.cards.oldWay.steps.step${step}.description`)}
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
            position: isMobile ? "relative" : "sticky",
            top: "72px",
            transformOrigin: "center top",
            transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
          layerStyle="sectionDark"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack align="center" w="full" gap={{ base: 4, md: 8 }}>
            <VStack align="center" gap={{ base: 2, md: 4 }}>
              <Text data-aos="fade-up" textStyle="section">
                {t("home.cards.futureWay.title")}
              </Text>
              <Heading textStyle="title" data-aos="fade-up" textAlign="center">
                {t("home.cards.futureWay.subtitle1")}
                <Text as="span" color="brand.500">
                  {t("home.cards.futureWay.subtitle2")}
                </Text>
                {t("home.cards.futureWay.subtitle3")}
              </Heading>
              <Text
                textStyle="subtitle"
                data-aos="fade-up"
                textAlign="center"
                px={4}
              >
                {t("home.cards.futureWay.description")}
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing={{ base: 6, md: 8 }}
              w="full"
              pb={{ base: 12, md: 48 }}
            >
              <VStack
                p={{ base: 6, md: 4 }}
                pt={{ base: 8, md: 8 }}
                layerStyle="section"
                data-aos="fade-up"
                data-aos-delay={200}
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
                align="center"
                justify="center"
              >
                <Heading
                  color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "xl" }}
                  mb={4}
                  w="full"
                  textAlign="left"
                >
                  {t("home.cards.futureWay.features.oneClick.title")}
                </Heading>
                <Heading
                  color="gray.50"
                  fontSize={{ base: "xl", md: "lg" }}
                  mb={{ base: 0, md: 6 }}
                >
                  {t("home.cards.futureWay.features.oneClick.description")}
                </Heading>

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
                p={{ base: 6, md: 4 }}
                pt={{ base: 8, md: 8 }}
                layerStyle="section"
                data-aos="fade-up"
                data-aos-delay={200}
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
                align="center"
                justify="center"
              >
                <Heading
                  color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "xl" }}
                  mb={4}
                  w="full"
                  textAlign="left"
                >
                  {t("home.cards.futureWay.features.automatedSetup.title")}
                </Heading>
                <Heading
                  color="gray.50"
                  fontSize={{ base: "xl", md: "lg" }}
                  mb={{ base: 0, md: 6 }}
                >
                  {t(
                    "home.cards.futureWay.features.automatedSetup.description",
                  )}
                </Heading>

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
                p={{ base: 6, md: 4 }}
                pt={{ base: 8, md: 8 }}
                layerStyle="section"
                data-aos="fade-up"
                data-aos-delay={200}
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
                align="center"
                justify="center"
              >
                <Heading
                  color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "xl" }}
                  mb={4}
                  w="full"
                  textAlign="left"
                >
                  {t("home.cards.futureWay.features.security.title")}
                </Heading>
                <Heading
                  color="gray.50"
                  fontSize={{ base: "xl", md: "lg" }}
                  mb={{ base: 0, md: 6 }}
                >
                  {t("home.cards.futureWay.features.security.description")}
                </Heading>

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
                p={{ base: 6, md: 4 }}
                pt={{ base: 8, md: 8 }}
                layerStyle="section"
                data-aos="fade-up"
                data-aos-delay={200}
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
              >
                <Heading
                  color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "xl" }}
                  mb={4}
                >
                  {t("home.cards.futureWay.features.costEfficiency.title")}
                </Heading>
                <Heading
                  color="gray.50"
                  fontSize={{ base: "xl", md: "lg" }}
                  mb={{ base: 0, md: 6 }}
                >
                  {t(
                    "home.cards.futureWay.features.costEfficiency.description",
                  )}
                </Heading>

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
                    bottom={4}
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
          </VStack>
        </HStack>

        <HStack
          key="the-anyflow"
          style={{
            ...calculateTransform(2),
            position: isMobile ? "relative" : "sticky",
            top: "72px",
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

            <VStack
              align="center"
              gap={{ base: 2, md: 4 }}
              zIndex={1}
              p={{ base: 8, md: 24 }}
            >
              <Text textStyle="section">{t("home.cards.anyflow.title")}</Text>

              <Heading
                data-aos="fade-up"
                fontSize={{ base: "4xl", md: "8xl" }}
                textAlign="center"
                color="gray.50"
              >
                {t("home.cards.anyflow.subtitle")}
              </Heading>

              <Text
                as="h3"
                color="gray.50"
                data-aos="fade-up"
                textAlign="center"
                px={4}
              >
                {t("home.cards.anyflow.description")}
              </Text>

              <Button
                variant="gradient"
                size="lg"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={BUTTON_GITHUB}
                boxShadow="2xl"
              >
                {t("home.cards.anyflow.cta")}
              </Button>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default CardsSection;
