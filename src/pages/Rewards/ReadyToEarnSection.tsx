import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Box,
  useColorModeValue,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  MessageSquareIcon,
  CodeIcon,
  FlameIcon,
  ZapIcon,
  LockIcon,
  CoinsIcon,
  SparkleIcon,
  WalletIcon,
  RocketIcon,
} from "lucide-react";
import { TitleSection } from "./Components";
import { APP_URL } from "@/const";
import { tagTwitterConversion } from "./tag";
import { useCallback } from "react";

function ReadyToEarnSection() {
  const highlightColor = useColorModeValue("yellow.400", "yellow.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  const handleTwitterConversion = useCallback(() => {
    tagTwitterConversion();
  }, []);

  return (
    <Box
      maxW="full"
      mx={{ base: 0, sm: 8, md: 12, lg: 12, xl: 12 }}
      my={{ base: 0, md: 12 }}
      bg={{ base: "transparent", md: "gray.800" }}
      borderRadius="lg"
    >
      <Container maxW="container.xl" py={{ base: 4, sm: 16, md: 24, lg: 32 }}>
        <VStack spacing={4}>
          <HStack
            bg={useColorModeValue("yellow.100", "yellow.900")}
            px={6}
            py={3}
            borderRadius={{ base: "lg", md: "full" }}
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <FlameIcon color="var(--anyflow-colors-danger-300)" />
            <Text
              color={highlightColor}
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              role="status"
              aria-live="polite"
            >
              Only 50 spots remaining - Early Bird Bonus ends in 48h
            </Text>
          </HStack>

          <TitleSection
            title="Ready to earn your rewards?"
            // description="Join our community of developers and start earning today"
          />

          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={{ base: 1, md: 4 }}
            w={{ base: "full", md: "auto" }}
            maxW="container.md"
            my={{ base: 4, md: 6 }}
          >
            {[
              { icon: <ZapIcon />, text: "Setup in 5 min" },
              { icon: <LockIcon />, text: "No wallet needed" },
              { icon: <CoinsIcon />, text: "Up to $70 in rewards" },
            ].map((item, index) => (
              <HStack key={index} role="group" aria-label={item.text}>
                <Box color="brand.500">{item.icon}</Box>
                <Text color={textColor} fontWeight="medium">
                  {item.text}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>

          <VStack spacing={{ base: 4, md: 6 }} w="full">
            <Button
              size="lg"
              variant="gradient"
              rightIcon={<ArrowRightIcon />}
              fontSize="lg"
              py={7}
              px={10}
              aria-label="Start earning rewards now"
              transition="all 0.2s"
              _hover={{ transform: "translateY(-2px)" }}
              _active={{ transform: "scale(0.98)" }}
              w={{ base: "full", md: "auto" }}
              as={Link}
              href={APP_URL + "/rewards"}
              target="_blank"
              onClick={handleTwitterConversion}
            >
              Start earning now
            </Button>
            <Text color={textColor} fontSize="sm" fontWeight="medium">
              Join{" "}
              <Text as="span" fontWeight="bold" color="brand.500">
                20+ developers
              </Text>{" "}
              already earning rewards
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            spacing={{ base: 4, md: 6 }}
            w="full"
            maxW="container.md"
          >
            {[
              {
                icon: <MessageSquareIcon />,
                text: "Follow updates",
                label: "Follow our updates",
                href: "https://x.com/anyflow_",
              },
              {
                icon: <CodeIcon />,
                text: "Start project",
                label: "Start your project",
                href: "https://app.anyflow.pro/",
              },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                leftIcon={item.icon}
                aria-label={item.label}
                as={Link}
                href={item.href}
                target="_blank"
              >
                {item.text}
              </Button>
            ))}
          </SimpleGrid>

          <Box w="full" maxW="container.md">
            <Heading
              as="h3"
              size="lg"
              color={headingColor}
              mb={{ base: 4, md: 8 }}
              textAlign={{ base: "left", md: "center" }}
            >
              Why join now:
            </Heading>
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              spacing={{ base: 0, md: 4 }}
            >
              {[
                {
                  icon: SparkleIcon,
                  title: "Early Bird Bonus",
                  text: "Extra $10 for first participants",
                },
                {
                  icon: WalletIcon,
                  title: "Earn While Testing",
                  text: "Up to $70 per completion",
                },
                {
                  icon: RocketIcon,
                  title: "Exclusive Community",
                  text: "Join our web3 developer network",
                },
                {
                  icon: ZapIcon,
                  title: "Quick Setup",
                  text: "Get started in just 5 minutes",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  transition="all 0.2s"
                  _hover={{
                    transform: "translateY(-4px)",
                  }}
                >
                  <VStack align="start" spacing={{ base: 2, md: 4 }}>
                    <Text
                      fontSize={{ base: "lg", md: "2xl" }}
                      role="img"
                      aria-label={item.title}
                      textAlign={{ base: "left", md: "center" }}
                      mx={{ base: "0", md: "auto" }}
                    >
                      {<item.icon strokeWidth={1.5} />}
                    </Text>
                    <VStack align="start" spacing={1}>
                      <Heading
                        size={{ base: "sm", md: "lg" }}
                        color={headingColor}
                        textAlign={{ base: "left", md: "center" }}
                      >
                        {item.title}
                      </Heading>
                      <Text
                        color={textColor}
                        fontSize={{ base: "xs", md: "sm" }}
                        textAlign={{ base: "left", md: "center" }}
                      >
                        {item.text}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default ReadyToEarnSection;
