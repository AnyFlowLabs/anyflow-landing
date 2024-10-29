import {
  VStack,
  Image,
  Text,
  HStack,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import LogoFooter from "@/assets/logo-footer.svg";
import KhizaLogo from "@/assets/khiza.svg";
import GithubIconSvg from "@/assets/github.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import DiscordIcon from "@/assets/discord.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BUTTON_GITHUB, DOCS_URL } from "@/const";
import LinkIcon from "@/components/LinkIcon";
import { Logo } from "./Logo";
import GithubIcon from "./Icons/Github";
import { ChangeLanguageMenu } from "./ChangeLanguageMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <Box bgGradient="linear(to-l, gray.800, gray.900)">
      <HStack
        flexDir={{ base: "column", md: "row" }}
        bg="gray.800"
        justify="space-between"
        p={4}
        gap={{ base: 4, md: 0 }}
      >
        <Logo />
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
      </HStack>

      <Box as="main">{children}</Box>

      <VStack
        as="footer"
        mx="auto"
        maxW="container.lg"
        px={{ base: 3, md: 6 }}
        spacing={8}
        pb={16}
        pt={32}
      >
        <Image src={LogoFooter} alt="Anyflow" />
        <Flex alignItems="center" justifyContent="center" gap={4}>
          <Text color="gray.400" fontSize="sm">
            {t("footer.backedBy.text")}
          </Text>
          <a
            href="https://khizadao.com"
            title="Khiza DAO"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Image src={KhizaLogo} alt="Khiza logo" h={5} />
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
          <HStack justify={{ base: "center", md: "end" }} gap={4} flex={1}>
            <LinkIcon
              src={GithubIconSvg}
              alt="Github"
              url={"https://github.com/AnyFlowLabs"}
            />
            <LinkIcon
              src={LinkedinIcon}
              alt="Linkedin"
              url={"https://www.linkedin.com/company/anyflowtool/"}
            />
            <LinkIcon
              src={DiscordIcon}
              alt="Discord"
              url={"https://discord.gg/aCygGwBWya"}
            />
            <LinkIcon
              src={TwitterIcon}
              alt="Twitter"
              url={"https://twitter.com/anyflow_"}
            />
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
