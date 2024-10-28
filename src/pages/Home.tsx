import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import Group from "@/assets/group.svg";
import { chains } from "@/data/chains";
import { DOCS_URL } from "@/data/button-access";

import { useTranslation } from "react-i18next";
import Template from "./components/Layout";
import Slider from "@/components/ui/slide";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Template>
      <Container maxW="container.lg">
        <VStack spacing={8} py={{ base: 16, md: 32 }}>
          <Heading
            as="h2"
            size="2xl"
            color="white"
            textAlign="center"
            fontSize={["50px", null, "79px"]}
            lineHeight={["80px"]}
          >
            {t("header.title2")}
          </Heading>

          <Heading fontWeight="light" as="h3" color="white" fontSize="lg">
            <Text as="span" color="brand.600">
              {t("header.subtitle1")}
            </Text>
            {t("header.subtitle2")}
          </Heading>

          <Flex
            w="full"
            bg="black"
            p={6}
            mt={{ base: 4, md: 16 }}
            rounded="md"
            flexDir={["column", null, "row"]}
            gap={{ base: 4, md: 16 }}
            alignItems="center"
          >
            <VStack flex={1} align="stretch" spacing={2}>
              <Heading color="white" fontSize="lg">
                Stay tuned! Support for Solana is coming soon to AnyFlow!
              </Heading>
              <Text color="gray.100" fontSize="smaller">
                We are currently in the alpha stage, and we want you to be part
                of this journey. Request early access and help us shape the
                future of our platform!
              </Text>
            </VStack>
            <Button
              variant="solid"
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBLFsdjxCJPuc8X7yEqzrwd-i8cloKxNUkcMMzPY1m6OMb5Q/viewform"
              target="_blank"
              referrerPolicy="no-referrer"
              w={{ base: "full", md: "auto" }}
            >
              Request Access
            </Button>
          </Flex>
        </VStack>
      </Container>

      <Container maxW="container.lg">
        <Flex flexDir={{ base: "column", md: "row" }} gap={12}>
          <VStack spacing={6} align={["center", null, "start"]} flex={1}>
            <Heading color="brand.500" fontWeight="light" fontSize="large">
              {t("secondSection.info")}
            </Heading>
            <Heading as="h3" fontSize="3xl" color="white">
              {t("secondSection.title")}
            </Heading>
            <Text color="gray.200" fontSize="medium">
              {t("secondSection.subtitle")}
            </Text>
            <Button
              as="a"
              href={DOCS_URL}
              target="_blank"
              variant="outline"
              w={{ base: "full", md: "auto" }}
            >
              {t("header.docs")}
            </Button>
          </VStack>

          <Box flex={2}>
            <Image src={Group} alt="App image" rounded="xl" w="100%" />
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.lg" my={12}>
        <Heading as="h2" textAlign="center" fontSize="2xl" color="white">
          {t("chains", { q: chains.length })}
        </Heading>
      </Container>

      <Slider>
        {chains.map((chain) => (
          <Slider.Slide key={chain.value}>
            <VStack
              align="center"
              justify="center"
              p={4}
              minW="120px"
              bg="gray.700"
              color="gray.50"
              rounded={8}
            >
              {chain.icon ? (
                <img alt={chain.value} src={chain.icon} width="32px" />
              ) : null}
              <Text>{chain.value}</Text>
            </VStack>
          </Slider.Slide>
        ))}
      </Slider>

      <Container maxW="container.lg">
        <HStack
          flexDir={{ base: "column", md: "row" }}
          mt={20}
          spacing={4}
          align="stretch"
        >
          <IntegrationDisplay
            title={t("features.continuousIntegration.title")}
            description={t("features.continuousIntegration.description")}
          />
          <IntegrationDisplay
            title={t("features.handsOffDeployment.title")}
            description={t("features.handsOffDeployment.description")}
          />

          <IntegrationDisplay
            title={t("features.unifiedCosts.title")}
            description={t("features.unifiedCosts.description")}
          />
        </HStack>
      </Container>
    </Template>
  );
}

export interface IntegrationDisplayProps {
  title: string;
  description: string;
}

export const IntegrationDisplay: React.FC<IntegrationDisplayProps> = ({
  description,
  title,
}) => {
  return (
    <VStack
      justifyContent="space-between"
      gap={4}
      borderRadius={8}
      p={6}
      bg="gray.700"
    >
      <Heading as="h4" fontSize="3xl" flex={1}>
        {title}
      </Heading>
      <Text flex={1} fontSize="smaller">
        {description}
      </Text>
    </VStack>
  );
};
