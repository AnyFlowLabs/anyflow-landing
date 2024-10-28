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
import { useTranslation } from "react-i18next";
import Slider from "@/components/Slider";
import { BUTTON_GITHUB, DOCS_URL } from "@/const";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Container maxW="container.lg">
        <VStack
          h={{ base: "100%", md: "75vh" }}
          py={{ base: 8, md: "auto" }}
          align="center"
          justify="center"
        >
          <Heading
            as="h2"
            size="2xl"
            color="white"
            textAlign="center"
            fontSize={{ base: "5xl", md: "7xl" }}
          >
            {t("header.title2")}
          </Heading>

          <Heading
            fontWeight="light"
            as="h3"
            color="white"
            fontSize="2xl"
            my={8}
            textAlign="center"
          >
            <Text as="span" color="brand.500">
              {t("header.subtitle1")}
            </Text>
            <Text as="span" color="white">
              {t("header.subtitle2")}
            </Text>
            <Text as="span" color="white" fontWeight="bold">
              {" "}
              {t("header.subtitle3")}
            </Text>
          </Heading>

          <Flex
            w="full"
            bgGradient="linear(to-tl, gray.900, gray.800)"
            p={6}
            mt={{ base: 4, md: 16 }}
            rounded="md"
            flexDir={["column", null, "row"]}
            gap={{ base: 4, md: 16 }}
            alignItems="center"
            boxShadow="lg"
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

      <Container maxW="container.lg" mb={12} mt={24}>
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

        <HStack
          my={12}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 8 }}
        >
          <Heading flex={1} fontSize="2xl">
            {t("callToAction")}
          </Heading>
          <Button
            variant="solid"
            as="a"
            href={BUTTON_GITHUB}
            w={{ base: "full", md: "auto" }}
          >
            {t("githubButton")}
          </Button>
        </HStack>
      </Container>
    </>
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
