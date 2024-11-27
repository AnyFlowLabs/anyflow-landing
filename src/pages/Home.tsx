import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Grid,
  Image,
  SimpleGrid,
  Flex,
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
import GithubIcon from "@/components/Icons/Github";
import KhizaLogo from "@/assets/khiza.svg";
import HomeCards from "@/components/HomeCards";
import {
  BadgeIcon,
  BookIcon,
  CheckIcon,
  CogIcon,
  Copy,
  CopyIcon,
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
        bgGradient="linear(to-t, gray.700, gray.900)"
        overflow="hidden"
        py={{ base: 8, md: 32 }}
        // style={{
        //   backgroundImage: "url(/bg.png)",
        //   backgroundSize: "auto 100%",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center -210px",
        // }}
      >
        <Container maxW="container.xl">
          <VStack py={{ base: 8, md: "auto" }} align="center" justify="center">
            <Heading
              as="h1"
              color="gray.50"
              textAlign="center"
              fontSize={{ base: "5xl", md: "7xl" }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {t("header.title2")}
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
                {t("header.subtitle1")}
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
            className="glow"
            maxW="container.xl"
            bg="gray.800"
            borderRadius={12}
            transform="scale(0.9)"
            // border="solid 2px #fff"
            boxShadow="0 0 5px 0 #b21e4b, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b, 0 0 80px 0 #b21e4b"
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
            borderRadius={12}
            // boxShadow="0 0 5px 0 #e63f66, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b"
            transform=" translateX(-50%)"
            className="glow"
            h="600px"
          >
            <Box borderRadius="lg" overflow="hidden">
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
            <Heading as="h2" fontSize="2xl" color="white">
              {t("chains", { q: chains.length })}
            </Heading>
            <Button variant="link" color="brand.500">
              Want to add your chain ?
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
                  p={4}
                  minW="120px"
                  bgGradient="linear(to-b, gray.800, gray.700)"
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
              fontSize={{ base: "4xl", md: "5xl" }}
              data-aos="fade-up"
              fontWeight="light"
            >
              Deploy Smart Contracts {""}
              <Text
                bgGradient="linear(to-l, brand.400, brand.500, brand.100)"
                bgClip="text"
                as="span"
                fontWeight="bold"
              >
                Faster
              </Text>
              <Text
                as="span"
                display="block"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="medium"
              >
                No complex configurations needed
              </Text>
            </Heading>
            <Text
              color="gray.200"
              fontSize="lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Focus on building great smart contracts while we handle the
              deployment complexity. Get your contracts live in seconds, not
              hours.
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
                  $ anyflow deploy{" "}
                  <Text as="span" color="gray.100" fontWeight="medium">
                    my-contract.sol
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
                      Deploying smart contract...
                    </Text>
                  </HStack>
                  <VStack
                    align="flex-start"
                    spacing={2}
                    color="gray.400"
                    fontFamily="mono"
                  >
                    <Text>✓ Compiling contract</Text>
                    <Text>✓ Verifying source code</Text>
                    <Text>✓ Double checking...</Text>
                    <Text
                      bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                      bgClip="text"
                    >
                      ✨ Contract deployed successfully at
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
            spacing={8}
            w="full"
            mb={16}
          >
            <VStack
              p={6}
              bg="gray.800"
              borderRadius={20}
              align="flex-start"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              spacing={4}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Box
                p={3}
                bg="gray.700"
                borderRadius={20}
                mt={-12}
                bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
                border="solid 1px"
                borderColor="gray.500"
                boxShadow="2xl"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "translateY(-16px)" }}
              >
                <ZapIcon size={80} />
              </Box>

              <Text
                fontWeight="bold"
                fontSize="xl"
                bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                bgClip="text"
              >
                Lightning Fast
              </Text>
              <Text color="gray.300" fontSize="sm">
                Deploy your contracts in seconds with our optimized deployment
                pipeline
              </Text>
            </VStack>

            <VStack
              p={6}
              bg="gray.800"
              borderRadius={20}
              align="flex-start"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              spacing={4}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Box
                p={3}
                bg="gray.700"
                borderRadius={20}
                mt={-12}
                bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
                border="solid 1px"
                borderColor="gray.500"
                boxShadow="2xl"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "translateY(-16px)" }}
              >
                <ShieldEllipsisIcon size={80} />
              </Box>
              <Text
                fontWeight="bold"
                bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                bgClip="text"
              >
                Secure by Default
              </Text>
              <Text color="gray.400" fontSize="sm">
                Built-in security checks and automated auditing for peace of
                mind
              </Text>
            </VStack>

            <VStack
              p={6}
              bg="gray.800"
              borderRadius={20}
              align="flex-start"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              spacing={4}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Box
                p={3}
                bg="gray.700"
                borderRadius={20}
                mt={-12}
                bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.900)"
                border="solid 1px"
                borderColor="gray.500"
                boxShadow="2xl"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "translateY(-16px)" }}
              >
                <CogIcon size={80} />
              </Box>
              <Text
                fontWeight="bold"
                bgGradient="linear(to-l, #55d8e4, #5Be9ab)"
                bgClip="text"
              >
                Fully Configurable
              </Text>
              <Text color="gray.400" fontSize="sm">
                Customize every aspect of your deployment process when needed
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
            Discover the power of our{" "}
            <Text
              as="span"
              bgGradient="linear(to-l, brand.400, brand.500, brand.100)"
              bgClip="text"
            >
              CLI tool
            </Text>
            <Text as="span" display="block" fontWeight="medium">
              Simplifying your development process.
            </Text>
          </Heading>

          <Text color="gray.50" fontSize="sm">
            Our CLI tool is designed to streamline your development process,
            making it easier and more efficient to build applications.
          </Text>

          <SimpleGrid columns={3} gap={4} maxW="container.lg" w="full">
            <HStack
              p={4}
              bg="gray.700"
              borderRadius="lg"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.600"
              boxShadow="2xl"
              color="gray.50"
            >
              <CheckIcon size={32} />
              <Text color="gray.200">Easy to use</Text>
            </HStack>

            <HStack
              p={4}
              bg="gray.700"
              borderRadius="lg"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.600"
              boxShadow="2xl"
              color="gray.50"
            >
              <BookIcon size={32} />
              <Text color="gray.200">Comprehensive documentation</Text>
            </HStack>

            <HStack
              p={4}
              bg="gray.700"
              borderRadius="lg"
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.600"
              boxShadow="2xl"
              color="gray.50"
            >
              <HelpingHand size={32} />
              <Text color="gray.200">Community support</Text>
            </HStack>
          </SimpleGrid>

          <Image src="/carbon.png" alt="Carbon" maxW="container.lg" w="full" />

          <Flex gap={8} w="full" maxW="container.lg">
            <HStack flex={1} align="center" gap={4}>
              <Text
                color="gray.50"
                fontSize="sm"
                fontFamily="mono"
                pr={4}
                bg="gray.800"
                p={2}
                px={4}
                borderRadius="lg"
              >
                npm install anyflow-cli
              </Text>
              <Button
                variant="link"
                color="brand.50"
                size="xs"
                leftIcon={<CopyIcon size={16} />}
              ></Button>
            </HStack>
            <Flex gap={8}>
              <Button
                variant="outline"
                size="lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Try our CLI tool
              </Button>
              <Button
                variant="link"
                color="brand.50"
                size="lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Read our Docs
              </Button>
            </Flex>
          </Flex>
        </VStack>
      </Container>

      <Container maxW="container.xl" my={16}>
        <VStack spacing={2} align="center" flex={1}>
          <Text
            variant="glow"
            fontSize="md"
            letterSpacing={2}
            textTransform="uppercase"
            color="brand.400"
            data-aos="fade-up"
          >
            Trusted By Industry Leaders
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="white"
            textAlign="center"
            data-aos="fade-up"
          >
            Backed by the Best
          </Heading>
          <Text
            color="gray.300"
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center"
            maxW="800px"
            data-aos="fade-up"
          >
            We're proud to be supported by leading organizations in the
            blockchain space
          </Text>
        </VStack>
        <HStack spacing={8} align="stretch" mt={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} flex={2}>
            <VStack
              align="flex-start"
              spacing={0}
              p={8}
              bg="gray.700"
              borderRadius={20}
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "translateY(-16px)" }}
            >
              <a
                href="https://khizadao.com"
                title="Khiza DAO"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Image src={KhizaLogo} alt="Khiza logo" h={10} />
              </a>
              <Text color="gray.300" fontSize="sm">
                Backed by Khiza, a leading venture capital firm in the
                blockchain space
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              spacing={0}
              p={8}
              bg="gray.700"
              borderRadius={20}
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "translateY(-16px)" }}
            >
              <QuickNodeIcon width={200} height={50} />
              <Text color="gray.300" fontSize="sm">
                QuickNode, Your Blockchain Startup Launchpad
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              spacing={0}
              p={8}
              bg="gray.700"
              borderRadius={20}
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "translateY(-16px)" }}
            >
              <Image
                src="data:image/png;base64,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"
                alt="Builder logo"
                h={10}
              />
              <Text color="gray.300" fontSize="sm" mt={8}>
                We are builders taking on a challenge of building and launching
                their crazy ideas
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              spacing={0}
              p={8}
              bg="gray.700"
              borderRadius={20}
              bgGradient="linear(to-br, gray.800, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              boxShadow="2xl"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "translateY(-16px)" }}
            >
              <XdcIcon width={100} height={100} />
              <Text color="gray.300" fontSize="sm">
                XDC Network is an enterprise-grade, open-source blockchain
                protocol. An EVM-compatible chain with smart contract
                capabilities, it is uniquely suited to revolutionize.
              </Text>
            </VStack>
          </SimpleGrid>

          <VStack
            flex={1}
            align="flex-start"
            spacing={4}
            p={8}
            bg="gray.700"
            borderRadius={20}
            bgGradient="linear(to-br, green.500, transparent, transparent, transparent, gray.800)"
            border="solid 1px"
            borderColor="gray.500"
            boxShadow="2xl"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "translateY(-16px)" }}
          >
            <BadgeIcon />
            <Heading size="lg" color="white">
              Solana Hackathon
              <br />
              Top 4 Finalist
            </Heading>
            <Text color="gray.300">
              Our innovative approach to smart contract deployment earned us a
              place among the top 4 finalists in the prestigious Solana
              Hackathon, demonstrating our commitment to pushing the boundaries
              of blockchain technology.
            </Text>
          </VStack>
        </HStack>
      </Container>

      <Container maxW="container.lg" my={16}>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4} align="center" mb={8}>
            <Text
              variant="glow"
              fontSize="md"
              letterSpacing={2}
              textTransform="uppercase"
              color="brand.400"
              data-aos="fade-up"
            >
              Frequently Asked Questions
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              textAlign="center"
              data-aos="fade-up"
            >
              Everything You Need to Know
            </Heading>
            <Text
              color="gray.300"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="800px"
              data-aos="fade-up"
            >
              Get answers to the most common questions about Anyflow's
              deployment platform
            </Text>
          </VStack>

          <Accordion allowMultiple variant="custom" data-aos="fade-up">
            {[
              {
                question: "What is Anyflow?",
                answer:
                  "Anyflow is a revolutionary smart contract deployment platform that simplifies the process of deploying contracts across multiple blockchains. It eliminates the complexity of managing wallets, purchasing tokens, and handling technical configurations.",
              },
              {
                question: "How does one-click deployment work?",
                answer:
                  "Our platform automates the entire deployment process. You simply connect your project, select your target network, and click deploy. We handle all the underlying complexities including wallet management, gas fees, and network configurations.",
              },
              {
                question: "Do I need to buy tokens for deployment?",
                answer:
                  "No! That's one of the key benefits of Anyflow. We handle all the token requirements behind the scenes. You can deploy your contracts without purchasing or managing any native tokens.",
              },
              {
                question: "Is Anyflow secure?",
                answer:
                  "Absolutely! Security is our top priority. We implement enterprise-grade security measures, automated audits, and best practices enforcement. Your code and credentials are always encrypted and protected.",
              },
              {
                question: "Which blockchains are supported?",
                answer:
                  "We support all major EVM-compatible networks including Ethereum, Polygon, BSC, Avalanche, and many more. Our platform is constantly expanding to include new networks based on community demand.",
              },
              {
                question: "How much does it cost?",
                answer:
                  "We offer transparent, pay-as-you-go pricing with no hidden fees. You only pay for successful deployments, and our pricing is competitive with traditional deployment methods while saving you valuable time and resources.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading
                      as="h3"
                      fontSize="xl"
                      color="white"
                      mb={4}
                      display="flex"
                      alignItems="center"
                      gap={3}
                    >
                      <Box color="brand.400">{index + 1}</Box>
                      {faq.question}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.300" fontSize="md" lineHeight="tall">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
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
