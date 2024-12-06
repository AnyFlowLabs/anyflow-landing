import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  CogIcon,
  ShieldEllipsisIcon,
  TerminalIcon,
  ZapIcon,
} from "lucide-react";

export default function TerminalSection() {
  const { t } = useTranslation();

  return (
    <Container
      maxW={{ base: "container.sm", md: "container.xl" }}
      my={{ base: 8, md: 12, lg: 16 }}
    >
      <VStack spacing={{ base: 4, md: 12 }} align="center" layerStyle="section">
        <VStack spacing={4} textAlign="center" px={{ base: 4, md: 0 }}>
          <Heading textStyle="title" data-aos="fade-up">
            {t("home.deployment.title")}
          </Heading>
          <Text textStyle="subtitle" data-aos="fade-up" data-aos-delay="100">
            {t("home.deployment.description")}
          </Text>
        </VStack>

        <Box
          w="full"
          maxW={{ base: "100%", md: "container.lg" }}
          overflow="hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
          px={{ base: 4, md: 0 }}
        >
          <Box
            bg="gray.900"
            borderRadius="xl"
            p={2}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <HStack spacing={4} p={4} borderRadius="lg" bg="gray.800">
              <Box bg="brand.500" p={2} borderRadius="md">
                <TerminalIcon size={24} />
              </Box>
              <Text
                color="gray.100"
                fontFamily="mono"
                fontSize={{ base: "sm", md: "md" }}
              >
                {t("home.deployment.terminal.command")}{" "}
                <Text as="span" color="gray.100" fontWeight="medium">
                  {t("home.deployment.terminal.fileName")}
                </Text>
              </Text>
            </HStack>

            <Box
              bg="gray.900"
              p={{ base: 4, md: 8 }}
              borderRadius="lg"
              position="relative"
              overflow="hidden"
            >
              <VStack align="flex-start" spacing={4}>
                <HStack spacing={{ base: 2, md: 4 }}>
                  <Spinner size={{ base: "xs", md: "sm" }} color="brand.500" />
                  <Text
                    color="brand.500"
                    fontFamily="mono"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {t("home.deployment.terminal.deploying")}
                  </Text>
                </HStack>
                <VStack
                  align="flex-start"
                  spacing={{ base: 2, md: 4 }}
                  color="gray.400"
                  fontFamily="mono"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <Text>{t("home.deployment.terminal.steps.compiling")}</Text>
                  <Text>{t("home.deployment.terminal.steps.verifying")}</Text>
                  <Text>{t("home.deployment.terminal.steps.checking")}</Text>
                  <Text
                    bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                    bgClip="text"
                  >
                    {t("home.deployment.terminal.steps.success")}{" "}
                    0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          maxW="container.lg"
          spacing={{ base: 4, md: 8 }}
          w="full"
          mb={{ base: 8, md: 16 }}
          px={{ base: 4, md: 0 }}
        >
          <VStack
            p={{ base: 4, md: 8 }}
            bg="gray.800"
            align="flex-start"
            layerStyle="section"
            spacing={4}
            data-aos="fade-up"
            data-aos-delay="300"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              borderRadius="50%"
              width="100%"
              height="100%"
              zIndex={0}
              transform="translate(-50%, -50%)"
              bgGradient="linear(43deg, success.500 0%, info.500 46%, success.500 60%, info.600 80%, success.400 100%)"
              filter="blur(50px)"
              opacity={0.2}
              animation="pulse 5s infinite"
            />
            <ZapIcon size={48} />
            <Heading fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              {t("home.deployment.features.ultraFast.title")}
            </Heading>
            <Text color="gray.50" fontSize={{ base: "sm", md: "md" }}>
              {t("home.deployment.features.ultraFast.description")}
            </Text>
          </VStack>

          <VStack
            p={{ base: 4, md: 8 }}
            bg="gray.800"
            align="flex-start"
            layerStyle="section"
            spacing={4}
            data-aos="fade-up"
            data-aos-delay="300"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              borderRadius="50%"
              width="100%"
              height="100%"
              zIndex={0}
              transform="translate(-50%, -50%)"
              bgGradient="linear(43deg, success.500 0%, info.500 46%, success.500 60%, info.600 80%, success.400 100%)"
              filter="blur(50px)"
              opacity={0.2}
              animation="pulse 5s infinite"
            />
            <ShieldEllipsisIcon size={48} />
            <Heading
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.50"
            >
              {/* @ts-ignore */}
              {t("home.deployment.features.security.title")}
            </Heading>
            <Text color="gray.50" fontSize={{ base: "sm", md: "md" }}>
              {/* @ts-ignore */}
              {t("home.deployment.features.security.description")}
            </Text>
          </VStack>

          <VStack
            p={{ base: 4, md: 8 }}
            bg="gray.800"
            align="flex-start"
            layerStyle="section"
            spacing={4}
            data-aos="fade-up"
            data-aos-delay="300"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              borderRadius="50%"
              width="100%"
              height="100%"
              zIndex={0}
              transform="translate(-50%, -50%)"
              bgGradient="linear(43deg, success.500 0%, info.500 46%, success.500 60%, info.600 80%, success.400 100%)"
              filter="blur(50px)"
              opacity={0.2}
              animation="pulse 5s infinite"
            />
            <CogIcon size={48} />
            <Heading
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.50"
            >
              {/* @ts-ignore */}
              {t("home.deployment.features.configurable.title")}
            </Heading>
            <Text color="gray.50" fontSize={{ base: "sm", md: "md" }}>
              {/* @ts-ignore */}
              {t("home.deployment.features.configurable.description")}
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
