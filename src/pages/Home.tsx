import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { SEO } from "../components/SEO";

import { chains } from "@/data/chains";
import { useTranslation } from "react-i18next";
import Slider from "@/components/Slider";
import { BUTTON_GITHUB } from "@/const";
import FacSection from "@/components/home/Faq";
import TrustedSection from "@/components/home/Trusted";
import CLIToolSection from "@/components/home/CliTool";
import TerminalSection from "@/components/home/Terminal";
import CardsSection from "@/components/home/Cards";
import { useEffect } from "react";

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Add smooth scrolling behavior to the page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      // Clean up by removing smooth scrolling when component unmounts
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <SEO
        title={`AnyFlow - ${t("home.title")}`}
        description={`${t("home.subtitle1")}${t("home.subtitle2")}${t("home.subtitle3")}`}
      />
      <Container maxW={{ base: "full", md: "container.xl" }}>
        <VStack
          py={{ base: 8, md: 12, lg: "auto" }}
          align="center"
          justify="center"
          spacing={6}
        >
          <Heading
            maxW="container.lg"
            as="h1"
            color="gray.50"
            textAlign="center"
            fontSize={{ base: "5xl", md: "5xl", lg: "7xl" }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {t("home.title")}
          </Heading>

          <Heading
            fontFamily="body"
            fontWeight="light"
            as="h2"
            color="gray.50"
            fontSize={{ base: "2xl", md: "2xl" }}
            textAlign="center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Text as="span" color="brand.500">
              {t("home.subtitle1")}
            </Text>
            <Text as="span" color="gray.50">
              {t("home.subtitle2")}
            </Text>
            <Text as="span" color="gray.50" fontStyle="italic">
              {" "}
              {t("home.subtitle3")}
            </Text>
          </Heading>

          <Button
            mt={{ base: 4, md: 6 }}
            mb={{ base: 8, md: 12 }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            variant="gradient"
            as="a"
            size="lg"
            href={BUTTON_GITHUB}
            letterSpacing={3}
            w={{ base: "full", md: "auto" }}
            aria-label={t("home.cta")}
          >
            {t("home.cta")}
          </Button>
        </VStack>
      </Container>

      <Container
        display={{ base: "none", md: "block" }}
        pos="relative"
        // minH={{ base: "400px", md: "600px" }}
        minH="0"
        maxW={{ base: "full", md: "container.xl" }}
        data-aos="zoom-in"
        mb={{ base: -24, md: 24 }}
        role="region"
        aria-label="Application Preview"
      >
        <Container
          pos="absolute"
          top={{ base: -4, md: -2 }}
          left="50%"
          transform="translateX(-50%) scale(0.8)"
          maxW={{ base: "full", md: "container.xl" }}
          bg="gray.600"
          borderRadius="xl"
          bgGradient="linear(to-br, gray.800, gray.800, gray.800, transparent, gray.800)"
          border="solid 1px"
          borderColor="gray.500"
          height={{ base: "100px", md: "100px" }}
          aria-hidden="true"
        ></Container>

        <Container
          pos="absolute"
          top={{ base: -2, md: 2 }}
          left="50%"
          transform="translateX(-50%) scale(0.9)"
          maxW={{ base: "full", md: "container.xl" }}
          bg="gray.600"
          borderRadius="xl"
          bgGradient="linear(to-br, gray.800, gray.800, gray.800, transparent, gray.800)"
          border="solid 1px"
          borderColor="gray.500"
          height={{ base: "100px", md: "100px" }}
          aria-hidden="true"
        ></Container>

        <Container
          pos="relative"
          bg="gray.700"
          top={{ base: "0px", md: "24px" }}
          left="50%"
          maxW={{ base: "full", md: "container.xl" }}
          p={{ base: 2, md: 4 }}
          borderRadius="xl"
          border="solid 1px"
          borderColor="gray.500"
          transform=" translateX(-50%)"
          overflow="hidden"
        >
          <Box
            borderRadius="xl"
            overflow="hidden"
          >
            <img
              src="/anyflow-app.gif"
              width="100%"
              height="100%"
              alt="AnyFlow application demo"
              loading="lazy"
            />
          </Box>
        </Container>
      </Container>

      {/* Chains */}
      <Container
        maxW={{ base: "container.sm", md: "container.xl" }}
        mb={{ base: 8, md: 12 }}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        px={{ base: 4, md: 6 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          spacing={{ base: 4, md: 0 }}
        >
          <Heading
            as="h2"
            textStyle="title"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            {t("chains", { q: chains.length })}
          </Heading>
          <Button
            variant="outline"
            color="gray.50"
            as="a"
            href="https://forms.gle/zdcSMhhkCnzz5xpW8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("home.addChain")}
          >
            {t("home.addChain")}
          </Button>
        </Stack>
      </Container>

      <Box
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="200"
        bgGradient="linear(to-t, transparent, gray.700)"
        w="full"
        mb={{ base: 0, md: 12 }}
        role="region"
        aria-label="Supported Blockchain Networks"
      >
        <Slider alias="first">
          {chains.map((chain) => (
            <Slider.Slide key={chain.value}>
              <VStack
                align="center"
                justify="center"
                p={{ base: 4, md: 6 }}
                width={{ base: "120px", md: "140px" }}
                bgGradient="linear(to-br, gray.700, gray.800, transparent)"
                color="gray.50"
                rounded="xl"
                border="solid 1px"
                borderColor="gray.600"
                height="full"
              >
                {chain.icon ? (
                  <Image
                    alt={`${chain.value} logo`}
                    src={chain.icon}
                    width={{ base: "24px", md: "32px" }}
                    loading="lazy"
                  />
                ) : null}
                <Text
                  align={{ base: "center" }}
                  fontSize={{ base: "sm", md: "md" }}
                >{chain.name}</Text>
              </VStack>
            </Slider.Slide>
          ))}
        </Slider>
      </Box>

      <CardsSection />
      <TerminalSection />
      <CLIToolSection />
      <TrustedSection />
      <FacSection />
    </>
  );
}