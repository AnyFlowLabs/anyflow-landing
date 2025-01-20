import { VStack, Text, HStack, Flex, Box } from "@chakra-ui/react";
import LogoFooter from "@/assets/logo-footer.svg";
import KhizaLogo from "@/assets/khiza.svg";
import GithubIconSvg from "@/assets/github.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import DiscordIcon from "@/assets/discord.svg";

import { useTranslation } from "react-i18next";
import LinkIcon from "@/components/LinkIcon";
import { ChangeLanguageMenu } from "./ChangeLanguageMenu";
import { AOSInit } from "./AOS";
import { HelmetProvider } from "react-helmet-async";
import { OptimizedImage } from "./OptimizedImage";
import ElonMuskIcon from "@/components/Icons/XIcon";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <AOSInit />

      <Box as="main" role="main">
        {children}
      </Box>

      <VStack
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="container.lg"
        px={{ base: 3, md: 6 }}
        spacing={8}
        pb={16}
        pt={32}
      >
        <OptimizedImage src={LogoFooter} alt="Anyflow" cacheKey="logo-footer" />
        <Flex alignItems="center" justifyContent="center" gap={4}>
          <Text color="gray.300" fontSize="sm">
            {t("footer.backedBy.text")}
          </Text>
          <a
            href="https://khizadao.com"
            title="Khiza DAO"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <OptimizedImage
              src={KhizaLogo}
              alt="Khiza logo"
              h={5}
              cacheKey="khiza-logo"
            />
          </a>
        </Flex>
        <HStack
          w="full"
          gap={6}
          flexDir={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Text fontSize="small" color="gray.300" flex={1}>
            {t("footer.copyright")}
          </Text>
          {/* <ChangeLanguageMenu /> */}
          <nav aria-label="Social Media Links">
            <HStack justify={{ base: "center", md: "end" }} gap={4} flex={1}>
              <LinkIcon
                src={GithubIconSvg}
                alt="Github"
                url={"https://github.com/AnyFlowLabs"}
                style={{ width: 24, height: 24 }}
              />
              <LinkIcon
                src={LinkedinIcon}
                alt="Linkedin"
                url={"https://www.linkedin.com/company/anyflowtool/"}
                style={{ width: 24, height: 24 }}
              />
              <LinkIcon
                src={DiscordIcon}
                alt="Discord"
                url={"https://discord.gg/aCygGwBWya"}
                style={{ width: 24, height: 24 }}
              />
              <Box as="a" href="https://x.com/anyflow_" target="_blank" rel="noopener noreferrer">
                <ElonMuskIcon
                  style={{
                    width: 22,
                    height: 22,
                    color: "var(--anyflow-colors-gray-400)",
                  }}
                />
              </Box>
            </HStack>
          </nav>
        </HStack>
      </VStack>
    </HelmetProvider>
  );
}
