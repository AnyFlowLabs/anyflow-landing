import { VStack, Text, HStack, Flex, Box, Button } from "@chakra-ui/react";
import LogoFooter from "@/assets/logo-footer.svg";
import KhizaLogo from "@/assets/khiza.svg";
import GithubIconSvg from "@/assets/github.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import DiscordIcon from "@/assets/discord.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BUTTON_GITHUB, DOCS_URL } from "@/const";
import LinkIcon from "@/components/LinkIcon";
import { Logo } from "./Logo";
import GithubIcon from "./Icons/Github";
import { ChangeLanguageMenu } from "./ChangeLanguageMenu";
import { AOSInit } from "./AOS";
import { HelmetProvider } from "react-helmet-async";
import { OptimizedImage } from "./OptimizedImage";
import ElonMuskIcon from "./Icons/XIcon";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <AOSInit />
      <HStack
        as="header"
        role="banner"
        flexDir={{ base: "column", md: "row" }}
        bg="transparent"
        justify="space-between"
        p={4}
        gap={{ base: 4, md: 0 }}
        w="full"
      >
        <Logo />
        <nav>
          <HStack gap={{ base: 4, md: 8 }}>
            <a
              target="_blank"
              className="hidden text-white lg:inline"
              href={DOCS_URL}
              referrerPolicy="no-referrer"
            >
              Docs
            </a>
            <Link to={"/chains"}>Chains</Link>

            <Button
              as="a"
              href={BUTTON_GITHUB}
              leftIcon={<GithubIcon width={18} height={18} />}
            >
              {t("header.button_github")}
            </Button>
          </HStack>
        </nav>
      </HStack>

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
          <ChangeLanguageMenu />
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
              <Box
                as="a"
                href="https://x.com/anyflow_"
                target="_blank"
                rel="noopener noreferrer"
              >
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
