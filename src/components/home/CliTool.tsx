import {
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BookIcon, CheckIcon, HelpingHand } from "lucide-react";

export default function CLIToolSection() {
  const { t } = useTranslation();

  return (
    <Container
      maxW={{ base: "container.sm", md: "container.xl" }}
      my={{ base: 8, md: 12, lg: 16 }}
    >
      <VStack spacing={{ base: 4, md: 12 }} align="center" layerStyle="section">
        <VStack spacing={4} textAlign="center" px={{ base: 4, md: 0 }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign="center"
            data-aos="fade-up"
          >
            {t("home.cli.title")}{" "}
            <Text as="span" color="brand.500">
              CLI tool
            </Text>
          </Heading>

          <Text color="gray.50" fontSize={{ base: "md", md: "lg" }}>
            {t("home.cli.description")}
          </Text>
        </VStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          align="center"
          justify="center"
          spacing={{ base: 4, md: 8 }}
          my={4}
        >
          <HStack>
            <CheckIcon size={24} />
            <Text color="gray.200" fontSize={{ base: "sm", md: "md" }}>
              {t("home.cli.features.easy")}
            </Text>
          </HStack>
          <HStack>
            <BookIcon size={24} />
            <Text color="gray.200" fontSize={{ base: "sm", md: "md" }}>
              {t("home.cli.features.docs")}
            </Text>
          </HStack>
          <HStack>
            <HelpingHand size={24} />
            <Text color="gray.200" fontSize={{ base: "sm", md: "md" }}>
              {t("home.cli.features.community")}
            </Text>
          </HStack>
        </Stack>

        <Image
          src="/carbon.webp"
          alt="Anyflow logo"
          w={{ base: "0", md: "800px" }}
          h={{ base: "0", md: "auto" }}
        />

        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          justify="center"
          align="center"
          spacing={{ base: 4, md: 8 }}
        >
          <Text
            color="gray.50"
            fontSize={{ base: "xs", md: "sm" }}
            fontFamily="mono"
            bg="gray.800"
            p={2}
            px={4}
            borderRadius="lg"
          >
            {t("home.cli.command")}
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 8 }}
            mb={{ base: 4, md: 0 }}
          >
            <Button
              variant="outline"
              size={{ base: "md", md: "lg" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t("home.cli.buttons.try")}
            </Button>
            <Button
              variant="link"
              color="brand.50"
              size={{ base: "md", md: "lg" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t("home.cli.buttons.docs")}
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Container>
  );
}
