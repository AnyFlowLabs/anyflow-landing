import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { chains } from "@/data/chains";
import { useTranslation } from "react-i18next";
import Slider from "@/components/Slider";
import { BUTTON_GITHUB } from "@/const";
import KhizaLogo from "@/assets/khiza.svg";
import HomeCards from "@/components/HomeCards";
import {
  BookIcon,
  CheckIcon,
  CogIcon,
  HelpingHand,
  ShieldEllipsisIcon,
  TerminalIcon,
  ZapIcon,
} from "lucide-react";
import QuickNodeIcon from "@/components/Icons/QuickNode";
import XdcIcon from "@/components/Icons/XDC";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <VStack
        align="center"
        justify="center"
        gap={0}
        mt="-72px"
        w="full"
        bgGradient="linear(to-t, gray.700, gray.800)"
        overflow="hidden"
        py={{ base: 8, md: 32 }}
      >
        <Container maxW="container.xl">
          <VStack py={{ base: 8, md: "auto" }} align="center" justify="center">
            <Heading
              maxW="container.lg"
              as="h1"
              color="gray.50"
              textAlign="center"
              fontSize={{ base: "5xl", md: "7xl" }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {t("header.title")}
            </Heading>

            <Heading
              fontFamily="body"
              fontWeight="light"
              as="h3"
              color="gray.50"
              fontSize="2xl"
              textAlign="center"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Text as="span" color="brand.500">
                {t("header.subtitle")}
              </Text>
              <Text as="span" color="gray.50">
                {t("header.subtitle2")}
              </Text>
              <Text as="span" color="gray.50" fontStyle="italic">
                {" "}
                {t("header.subtitle3")}
              </Text>
            </Heading>

            <Button
              mt={6}
              mb={12}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              variant="gradient"
              as="a"
              size="lg"
              href={BUTTON_GITHUB}
              letterSpacing={3}
              w={{ base: "full", md: "auto" }}
            >
              {t("home.cta")}
            </Button>

            {/* <Flex
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
                {t("form.title")}
              </Heading>
              <Text color="gray.100" fontSize="smaller">
                {t("form.description")}
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
              {t("form.button")}
            </Button>
          </Flex> */}
          </VStack>
        </Container>

        <Box pos="relative" minH="80vh" w="full" data-aos="zoom-in">
          <Container
            maxW="container.xl"
            bg="gray.600"
            borderRadius={20}
            bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, transparent)"
            border="solid 1px"
            borderColor="gray.500"
            transform="scale(0.9)"
            // border="solid 2px #fff"
            // boxShadow="0 0 5px 0 #b21e4b, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b, 0 0 80px 0 #b21e4b"
            height="500px"
          ></Container>

          <Container
            pos="absolute"
            bg="gray.700"
            top="50px"
            left="50%"
            // border="solid 4px #fff"
            maxW="container.xl"
            p={4}
            // animation={`glow 2s infinite`}
            bgGradient="linear(to-br, gray.700, transparent, transparent, transparent, transparent)"
            borderRadius={20}
            border="solid 1px"
            borderColor="gray.500"
            // boxShadow="0 0 5px 0 #e63f66, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b"
            transform=" translateX(-50%)"
            overflow="hidden"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "translateX(-50%) scale(1.05)",
            }}
          >
            <Box borderRadius={20} overflow="hidden" h="600px">
              <img src="/anyflow-app.gif" width="100%" height="100%" alt="" />
            </Box>
          </Container>
        </Box>

        <Container
          maxW="container.xl"
          mb={12}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <HStack align="center" justify="space-between">
            <Heading textStyle="title">
              {t("chains", { q: chains.length })}
            </Heading>
            <Button variant="link" color="brand.500">
              {t("home.addChain")}
            </Button>
          </HStack>
        </Container>

        <Box
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
          bgGradient="linear(to-t, transparent, gray.700)"
        >
          <Slider alias="first">
            {chains.map((chain) => (
              <Slider.Slide key={chain.value}>
                <VStack
                  align="center"
                  justify="center"
                  p={8}
                  minW="120px"
                  bgGradient="linear(to-br, gray.700, gray.800, transparent)"
                  color="gray.50"
                  rounded="xl"
                  border="solid 1px"
                  borderColor="gray.600"
                >
                  {chain.icon ? (
                    <img alt={chain.value} src={chain.icon} width="32px" />
                  ) : null}
                  <Text>{chain.value}</Text>
                </VStack>
              </Slider.Slide>
            ))}
          </Slider>
        </Box>
      </VStack>

      {/* <Container maxW="container.xl">
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
            <Image
              src="/anyflow-app.gif"
              alt="App image"
              rounded="xl"
              w="100%"
            />
          </Box>
        </Flex>
      </Container> */}

      <Container
        maxW="container.xl"
        // p={{ base: 8, md: 12 }}
        // bg="gray.800"
        my={{ base: 8, md: 12 }}
        // borderRadius={12}
      >
        <HomeCards />
      </Container>

      <Container maxW="container.xl" my={16}>
        <VStack
          spacing={12}
          align="center"
          bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, transparent)"
          pt={12}
          border="solid 1px"
          borderColor="gray.500"
          boxShadow="2xl"
          borderRadius={20}
        >
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              color="gray.50"
              fontSize={{ base: "4xl", md: "5xl" }}
              data-aos="fade-up"
              fontWeight="light"
            >
              {t("home.deployment.title")}
            </Heading>
            <Text
              color="gray.50"
              fontSize="xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("home.deployment.description")}
            </Text>
          </VStack>

          <Box
            w="full"
            maxW="container.lg"
            overflow="hidden"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Box
              bg="gray.900"
              borderRadius="xl"
              p={1}
              display="flex"
              flexDirection="column"
              gap={4}
            >
              <HStack spacing={4} p={4} borderRadius="lg" bg="gray.800">
                <Box bg="brand.500" p={2} borderRadius="md">
                  <TerminalIcon size={24} />
                </Box>
                <Text color="gray.100" fontFamily="mono">
                  {t("home.deployment.terminal.command")}{" "}
                  <Text as="span" color="gray.100" fontWeight="medium">
                    {t("home.deployment.terminal.fileName")}
                  </Text>
                </Text>
              </HStack>

              <Box
                bg="gray.900"
                p={8}
                borderRadius="lg"
                position="relative"
                overflow="hidden"
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack spacing={3}>
                    <Spinner size="sm" color="brand.500" />
                    <Text color="brand.500" fontFamily="mono">
                      {t("home.deployment.terminal.deploying")}
                    </Text>
                  </HStack>
                  <VStack
                    align="flex-start"
                    spacing={2}
                    color="gray.400"
                    fontFamily="mono"
                  >
                    <Text>{t("home.deployment.terminal.steps.compiling")}</Text>
                    <Text>{t("home.deployment.terminal.steps.verifying")}</Text>
                    <Text>{t("home.deployment.terminal.steps.checking")}</Text>
                    <Text
                      bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                      bgClip="text"
                    >
                      {t("home.deployment.terminal.steps.success")} 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            maxW="container.lg"
            spacing={8}
            w="full"
            mb={16}
          >
            <VStack
              p={6}
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
              <Heading fontWeight="bold" fontSize="xl">
                {t("home.deployment.features.ultraFast.title")}
              </Heading>
              <Text color="gray.50" fontSize="md">
                {t("home.deployment.features.ultraFast.description")}
              </Text>
            </VStack>

            <VStack
              p={6}
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
              <Heading fontWeight="bold" fontSize="xl" color="gray.50">
                {t("home.deployment.features.security.title")}
              </Heading>
              <Text color="gray.50" fontSize="md">
                {t("home.deployment.features.security.description")}
              </Text>
            </VStack>

            <VStack
              p={6}
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
              <Heading fontWeight="bold" fontSize="xl" color="gray.50">
                {t("home.deployment.features.configurable.title")}
              </Heading>
              <Text color="gray.50" fontSize="md">
                {t("home.deployment.features.configurable.description")}
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" my={12}>
        <VStack
          gap={4}
          borderRadius={20}
          bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
          border="solid 1px"
          borderColor="gray.500"
          boxShadow="2xl"
          minH="580px"
          p={{ base: 8, md: 16 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            data-aos="fade-up"
          >
            {t("home.cli.title")}{" "}
            <Text as="span" color="brand.500">
              CLI tool
            </Text>
          </Heading>

          <Text color="gray.50" fontSize="lg">
            {t("home.cli.description")}
          </Text>

          <HStack w="full" align="center" justify="center" spacing={8} my={4}>
            <HStack>
              <CheckIcon size={32} />
              <Text color="gray.200">{t("home.cli.features.easy")}</Text>
            </HStack>
            <HStack>
              <BookIcon size={32} />
              <Text color="gray.200">{t("home.cli.features.docs")}</Text>
            </HStack>
            <HStack>
              <HelpingHand size={32} />
              <Text color="gray.200">{t("home.cli.features.community")}</Text>
            </HStack>
          </HStack>

          <Text color="gray.50" fontSize="sm" fontFamily="mono" pr={4} bg="gray.800" p={2} px={4} borderRadius="lg">
            {t("home.cli.command")}
          </Text>

          <Button variant="outline" size="lg" data-aos="fade-up" data-aos-delay="400">
            {t("home.cli.buttons.try")}
          </Button>
          <Button variant="link" color="brand.50" size="lg" data-aos="fade-up" data-aos-delay="400">
            {t("home.cli.buttons.docs")}
          </Button>
        </VStack>
      </Container>

      <Container maxW="container.xl" my={16}>
        <VStack spacing={2} align="center" flex={1}>
          <Text textStyle="section" data-aos="fade-up">
            {t("home.trusted.title")}
          </Text>
          <Heading textStyle="title" textAlign="center" data-aos="fade-up">
            {t("home.trusted.title")}
          </Heading>
          <Text fontSize="md" color="gray.100">
            {t("home.trusted.description")}
          </Text>
        </VStack>
        <HStack spacing={8} align="stretch" mt={12}>
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8} flex={2}>
            <VStack layerStyle="section" p={6}>
              <Box w="full" h="60px">
                <a
                  href="https://khizadao.com"
                  title="Khiza DAO"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Image src={KhizaLogo} alt="Khiza logo" h={10} />
                </a>
              </Box>
              <Text fontSize="md" color="gray.100">
                {t("home.partners.khiza.description")}
              </Text>
            </VStack>

            <VStack layerStyle="section" p={6}>
              <Box w="full" h="60px">
                <QuickNodeIcon width={200} height={50} />
              </Box>
              <Text fontSize="md" color="gray.100">
                {t("home.partners.quicknode.description")}
              </Text>
            </VStack>

            <VStack layerStyle="section" p={6}>
              <Box w="full" h="60px">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFjCAYAAABMqNIyAAAACXBIWXMAADddAAA3XQEZgEZdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbxSURBVHgB7ddBq2d1GcDx59z5z4xZopNjlhFNSLUyDNq5cExaF62T7B20DYIEiZahQtsUatkikNrEYOsIBqSINl400cJCZXScO+M93V7FD/p+PnDOb3vgcL7PeWYAAGjZBhb6x+M/fW0W2Wc//sIff/zEkHUYWGjf9yuzyGb+5x0NQJQAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgEDWYUh76+rPrsxCN+7ss8rpvg1tAhh35/Tj12ahP/3ngYFVrMBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlmHYanXrz77nbM5dN8s8s8PLw5UCeBiR/vRz/d9vzKL/P3GPQNVVmAgSwCBLAEEsgQQyBJAIEsAgSwBBLIEEMgSQCBLAIEsAQSyBBDIEkAgSwCBLAEEsgQQyBJAIEsAgSwBBLIEEMgSQCBLAIEsAQSyBBDIEkAgSwCBLAEEsgQQyBJAIEsAgazDxD31/FtP79tcmUV++duX7zt3cjKrnFy8PCttX7t/lvrrEJYP4L5t3z87rs4ivzl//5ycfDSrfP3CA7PS9o2vzCrbdnZ7aQizAgNZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlkCCGQJIJAlgECWAAJZAghkCSCQJYBAlgACWQIIZAkgkCWAQJYAAlmHYanXrz77nbM5dN8s8s8PLw5UCeBiR/vRz/d9vzKL/P3GPQNVVmAgSwCBLAEEsgQQyBJAIEsAgSwBBLIEEMgSQCBLAIEsAQSyBBDIEkAgSwCBLAEEsgQQyBJAIEsAgSwBBLIEEMgSQCBLAIEsAQSyBBDIEkAgSwCBLAEEsgQQyBJAIEsAgSwBBLIEEMgSQCDrMMRtrwwAAAAA/8/+C8NTq3AdR3rlAAAAAElFTkSuQmCC"
                  alt="Builder logo"
                  h={10}
                />
              </Box>
              <Text fontSize="md" color="gray.100">
                {t("home.partners.builder.description")}
              </Text>
            </VStack>

            <VStack layerStyle="section" p={6}>
              <Box w="full" h="60px">
                <XdcIcon width={100} height={50} />
              </Box>
              <Text fontSize="md" color="gray.100">
                {t("home.partners.xdc.description")}
              </Text>
            </VStack>

            <VStack layerStyle="section" p={6}>
              <Box w="full" h="60px">
                <svg
                  width="146"
                  height="80"
                  viewBox="0 0 646 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1064_606)">
                    <path
                      d="M108.53 75.6899L90.81 94.6899C90.4267 95.1026 89.9626 95.432 89.4464 95.6573C88.9303 95.8827 88.3732 95.9994 87.81 95.9999H3.81C3.40937 95.9997 3.01749 95.8827 2.68235 95.6631C2.34722 95.4436 2.08338 95.1311 1.92313 94.7639C1.76288 94.3967 1.71318 93.9908 1.78012 93.5958C1.84706 93.2008 2.02772 92.8338 2.3 92.5399L20 73.5399C20.3833 73.1273 20.8474 72.7979 21.3636 72.5725C21.8797 72.3472 22.4368 72.2305 23 72.2299H107C107.404 72.2216 107.802 72.333 108.143 72.5502C108.484 72.7674 108.754 73.0806 108.917 73.4504C109.081 73.8203 109.131 74.2303 109.062 74.6288C108.993 75.0273 108.808 75.3965 108.53 75.6899ZM90.81 37.4199C90.4253 37.0091 89.9608 36.6811 89.445 36.4558C88.9292 36.2306 88.3728 36.1129 87.81 36.11H3.81C3.40937 36.1102 3.01749 36.2272 2.68235 36.4468C2.34722 36.6663 2.08338 36.9788 1.92313 37.346C1.76288 37.7132 1.71318 38.1191 1.78012 38.5141C1.84706 38.9091 2.02772 39.2761 2.3 39.57L20 58.58C20.3847 58.9908 20.8492 59.3188 21.365 59.5441C21.8808 59.7693 22.4372 59.887 23 59.8899H107C107.4 59.8878 107.79 59.7693 108.124 59.5491C108.458 59.3288 108.72 59.0162 108.879 58.6494C109.038 58.2826 109.087 57.8774 109.019 57.4833C108.952 57.0892 108.772 56.7232 108.5 56.43L90.81 37.4199ZM3.81 23.7699H87.81C88.3732 23.7694 88.9303 23.6527 89.4464 23.4273C89.9626 23.202 90.4267 22.8726 90.81 22.4599L108.53 3.45995C108.808 3.16647 108.993 2.79726 109.062 2.39877C109.131 2.00028 109.081 1.59031 108.917 1.22045C108.754 0.850591 108.484 0.537368 108.143 0.320195C107.802 0.103021 107.404 -0.0084012 107 -5.10783e-05H23C22.4368 0.000541762 21.8797 0.117167 21.3636 0.342553C20.8474 0.567938 20.3833 0.897249 20 1.30995L2.3 20.3099C2.02772 20.6038 1.84706 20.9708 1.78012 21.3658C1.71318 21.7608 1.76288 22.1667 1.92313 22.5339C2.08338 22.9011 2.34722 23.2136 2.68235 23.4331C3.01749 23.6527 3.40937 23.7697 3.81 23.7699Z"
                      fill="url(#paint0_linear_1064_606)"
                    />
                    <path
                      d="M210.94 40.6002H166V25.8002H222.62V11.0002H165.85C163.91 10.9897 161.988 11.3613 160.192 12.0938C158.396 12.8264 156.761 13.9055 155.383 15.2696C154.004 16.6337 152.907 18.2561 152.155 20.044C151.403 21.832 151.01 23.7506 151 25.6902V40.6902C151.008 42.6315 151.398 44.5523 152.149 46.3425C152.9 48.1328 153.996 49.7575 155.375 51.1237C156.755 52.49 158.39 53.5709 160.187 54.3047C161.984 55.0385 163.909 55.4108 165.85 55.4002H210.85V70.2002H152.07V85.0002H210.94C212.88 85.0108 214.802 84.6391 216.598 83.9066C218.394 83.174 220.029 82.0949 221.407 80.7308C222.786 79.3667 223.883 77.7444 224.635 75.9564C225.387 74.1684 225.78 72.2498 225.79 70.3102V55.3102C225.782 53.3689 225.392 51.4482 224.641 49.6579C223.89 47.8676 222.794 46.2429 221.415 44.8767C220.035 43.5105 218.4 42.4296 216.603 41.6958C214.806 40.962 212.881 40.5897 210.94 40.6002Z"
                      fill="white"
                    />
                    <path
                      d="M298 11H252.89C250.947 10.9842 249.02 11.3519 247.219 12.0821C245.419 12.8123 243.78 13.8905 242.397 15.2552C241.013 16.6198 239.913 18.2439 239.159 20.0345C238.404 21.8251 238.01 23.747 238 25.69V70.31C238.01 72.253 238.404 74.1749 239.159 75.9655C239.913 77.7561 241.013 79.3802 242.397 80.7448C243.78 82.1095 245.419 83.1877 247.219 83.9179C249.02 84.6481 250.947 85.0158 252.89 85H298C299.94 85.0105 301.862 84.6389 303.658 83.9064C305.454 83.1738 307.089 82.0947 308.467 80.7306C309.846 79.3665 310.943 77.7441 311.695 75.9562C312.447 74.1682 312.84 72.2496 312.85 70.31V25.69C312.84 23.7504 312.447 21.8318 311.695 20.0438C310.943 18.2559 309.846 16.6335 308.467 15.2694C307.089 13.9053 305.454 12.8262 303.658 12.0936C301.862 11.3611 299.94 10.9895 298 11ZM297.89 70.2H253V25.8H297.87L297.89 70.2Z"
                      fill="white"
                    />
                    <path
                      d="M456 11.0001H412C410.06 10.9896 408.138 11.3612 406.342 12.0937C404.546 12.8263 402.911 13.9054 401.533 15.2695C400.154 16.6336 399.057 18.256 398.305 20.0439C397.553 21.8319 397.16 23.7505 397.15 25.6901V85.0001H412.15V60.6901H455.95V85.0001H470.95V25.6901C470.94 23.742 470.544 21.8152 469.786 20.0206C469.027 18.2261 467.922 16.5993 466.532 15.2338C465.143 13.8684 463.497 12.7914 461.689 12.0648C459.881 11.3382 457.948 10.9764 456 11.0001ZM455.89 45.8901H412.09V25.8001H455.89V45.8901Z"
                      fill="white"
                    />
                    <path
                      d="M631.15 11.0002H587.15C585.21 10.9897 583.288 11.3613 581.492 12.0938C579.696 12.8264 578.062 13.9055 576.683 15.2696C575.304 16.6337 574.207 18.2561 573.455 20.044C572.703 21.832 572.31 23.7506 572.3 25.6902V85.0002H587.3V60.6902H631V85.0002H646V25.6902C645.99 23.7506 645.597 21.832 644.845 20.044C644.093 18.2561 642.996 16.6337 641.617 15.2696C640.238 13.9055 638.604 12.8264 636.808 12.0938C635.012 11.3613 633.09 10.9897 631.15 11.0002ZM631 45.8902H587.2V25.8002H631V45.8902Z"
                      fill="white"
                    />
                    <path
                      d="M544 70.2001H538L516.55 17.2001C515.815 15.3716 514.55 13.8045 512.918 12.6999C511.286 11.5952 509.361 11.0033 507.39 11.0001H494.08C492.786 10.9935 491.504 11.2418 490.307 11.7307C489.109 12.2197 488.02 12.9397 487.1 13.8497C486.181 14.7598 485.45 15.8419 484.949 17.0345C484.448 18.227 484.187 19.5066 484.18 20.8001V85.0001H499.18V25.8001H505.18L526.62 78.8001C527.367 80.6251 528.642 82.1858 530.281 83.283C531.919 84.3803 533.848 84.9641 535.82 84.9601H549.13C550.424 84.9667 551.706 84.7185 552.903 84.2295C554.101 83.7406 555.19 83.0205 556.11 82.1105C557.029 81.2005 557.76 80.1183 558.261 78.9258C558.762 77.7332 559.023 76.4537 559.03 75.1601V11.0001H544V70.2001Z"
                      fill="white"
                    />
                    <path
                      d="M341.1 11H326.1V70.31C326.11 72.2539 326.505 74.1766 327.26 75.9678C328.015 77.7591 329.116 79.3836 330.5 80.7484C331.884 82.1132 333.525 83.1912 335.326 83.9208C337.128 84.6504 339.056 85.0171 341 85H386V70.2H341.1V11Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1064_606"
                      x1="10.81"
                      y1="98.29"
                      x2="98.89"
                      y2="-1.01005"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.08" stop-color="#9945FF" />
                      <stop offset="0.3" stop-color="#8752F3" />
                      <stop offset="0.5" stop-color="#5497D5" />
                      <stop offset="0.6" stop-color="#43B4CA" />
                      <stop offset="0.72" stop-color="#28E0B9" />
                      <stop offset="0.97" stop-color="#19FB9B" />
                    </linearGradient>
                    <clipPath id="clip0_1064_606">
                      <rect width="646" height="96" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>

              <Text fontSize="md" color="gray.100">
                {t("home.partners.builder.description")}
              </Text>
            </VStack>
          </SimpleGrid>
        </HStack>
      </Container>

      <Container maxW="container.lg" my={16}>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4} align="center" mb={8}>
            <Text textStyle="section" data-aos="fade-up">
              {t("home.faq.section")}
            </Text>
            <Heading textStyle="title" data-aos="fade-up">
              {t("home.faq.title")}
            </Heading>
            <Text textStyle="subtitle" data-aos="fade-up">
              {t("home.faq.subtitle")}
            </Text>
          </VStack>

          <Accordion allowMultiple variant="custom" data-aos="fade-up" boxShadow="2xl">
            {[
              {
                question: t("home.faq.questions.what.question"),
                answer: t("home.faq.questions.what.answer"),
              },
              {
                question: t("home.faq.questions.how.question"),
                answer: t("home.faq.questions.how.answer"),
              },
              {
                question: t("home.faq.questions.tokens.question"),
                answer: t("home.faq.questions.tokens.answer"),
              },
              {
                question: t("home.faq.questions.security.question"),
                answer: t("home.faq.questions.security.answer"),
              },
              {
                question: t("home.faq.questions.chains.question"),
                answer: t("home.faq.questions.chains.answer"),
              },
            ].map((item, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
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
      bgGradient="linear(to-r, gray.500, transparent)"
      p={12}
      align="flex-start"
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
