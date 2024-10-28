import {
  VStack,
  Image,
  Grid,
  Text,
  HStack,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import LogoFooter from "@/assets/logo-footer.svg";
import KhizaLogo from "@/assets/khiza.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import DiscordIcon from "@/assets/discord.svg";
import GithubIcon from "@/assets/github.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BUTTON_GITHUB, DOCS_URL } from "@/const";
import LinkIcon from "@/components/LinkIcon";
import { Logo } from "./Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <>
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

          <Button as="a" href={BUTTON_GITHUB}>
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
            Backed By
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
        <Grid
          w="full"
          templateColumns={["1fr", null, "repeat(2, 1fr)"]}
          gap={6}
          textAlign={["center", null, "left"]}
        >
          <Text fontSize="small">© 2024 Anyflow. All rights reserved.</Text>

          <HStack justify={{ base: "center", md: "end" }} gap={4}>
            <LinkIcon
              src={GithubIcon}
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
        </Grid>
      </VStack>
    </>
  );
}
