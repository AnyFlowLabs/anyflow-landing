import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Badge,
  Box,
  Link,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  MessageSquareIcon,
  BookOpenIcon,
  CodeIcon,
  UsersRoundIcon,
} from "lucide-react";
import { TitleSection } from "./Components";

const DeveloperResourcesSection = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");
  const highlightBg = useColorModeValue("brand.50", "brand.900");

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 24 }}>
      <VStack spacing={{ base: 8, md: 12 }} align="center">
        <TitleSection
          pre="Let's start coding"
          title="Developer Resources"
          // description="Everything you need to get started and succeed"
        />

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 4, md: 8 }}
          w="full"
        >
          <VStack
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            align="start"
            spacing={{ base: 2, md: 6 }}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <HStack
              w={{ base: "full", md: "full" }}
              spacing={{ base: 4, md: 4 }}
              align="center"
            >
              <Box
                p={3}
                bg={highlightBg}
                borderRadius="lg"
                color="brand.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={BookOpenIcon} boxSize={6} />
              </Box>
              <Heading
                size="md"
                color={headingColor}
                flex={1}
                display={{ base: "block", md: "none" }}
              >
                Documentation
              </Heading>
            </HStack>
            <VStack align="start" spacing={4} w="full">
              <Heading
                size="md"
                color={headingColor}
                display={{ base: "none", md: "block" }}
              >
                Documentation
              </Heading>
              <Text color={textColor} fontSize="sm">
                Comprehensive guides and API references
              </Text>
              <Button
                variant="ghost"
                rightIcon={<ArrowRightIcon size={16} />}
                aria-label="View documentation"
                fontWeight="medium"
                as={Link}
                href="https://docs.anyflow.pro/"
                target="_blank"
                w={{base: "full", md: "auto"}}
              >
                View docs
              </Button>
            </VStack>
          </VStack>

          <VStack
            p={{ base: 4, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            align="start"
            spacing={{ base: 2, md: 6 }}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <HStack
              w={{ base: "full", md: "full" }}
              spacing={{ base: 4, md: 4 }}
              align="center"
            >
              <Box
                p={3}
                bg={highlightBg}
                borderRadius="lg"
                color="brand.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={CodeIcon} boxSize={6} />
              </Box>
              <Heading
                size="md"
                color={headingColor}
                flex={1}
                display={{ base: "block", md: "none" }}
              >
                Sample projects
              </Heading>
            </HStack>
            <VStack align="start" spacing={4} w="full">
              <Heading
                size="md"
                color={headingColor}
                display={{ base: "none", md: "block" }}
              >
                Sample projects
              </Heading>
              <Text color={textColor} fontSize="sm">
                Example implementations and templates
              </Text>
              <Button
                variant="ghost"
                rightIcon={<ArrowRightIcon size={16} />}
                aria-label="View templates"
                fontWeight="medium"
                as={Link}
                w={{base: "full", md: "auto"}}
                href="https://github.com/AnyFlowLabs?q=template&type=all&language=&sort=stargazers"
                target="_blank"
              >
                View templates
              </Button>
            </VStack>
          </VStack>

          <VStack
            p={{ base: 4, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            align="start"
            spacing={{ base: 2, md: 6 }}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <HStack
              w={{ base: "full", md: "full" }}
              spacing={{ base: 4, md: 4 }}
              align="center"
            >
              <Box
                p={3}
                bg={highlightBg}
                borderRadius="lg"
                color="brand.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={UsersRoundIcon} boxSize={6} />
              </Box>
              <HStack spacing={{ base: 2, md: 4 }} borderRadius="lg" w="full">
                <Heading
                  size="md"
                  color={headingColor}
                  flex={1}
                  display={{ base: "block", md: "none" }}
                >
                  Community
                </Heading>
                <HStack gap={2} display={{ base: "none", md: "flex" }}>
                  <Badge
                    colorScheme="brand"
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    20+ members
                  </Badge>
                  <Badge
                    colorScheme="green"
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    24/7 Active
                  </Badge>
                </HStack>
              </HStack>
            </HStack>
            <VStack align="start" spacing={4}>
              <Heading
                size="md"
                color={headingColor}
                display={{ base: "none", md: "block" }}
              >
                Community
              </Heading>

              <Text color={textColor} fontSize="sm">
                Join our Discord for real-time support and discussions
              </Text>

              <HStack display={{ base: "flex", md: "none" }} gap={2}>
                <Badge
                  colorScheme="brand"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  20+ members
                </Badge>
                <Badge
                  colorScheme="green"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  24/7 Active
                </Badge>
              </HStack>

              <Button
                rightIcon={<MessageSquareIcon size={16} />}
                aria-label="Join Discord community"
                fontWeight="medium"
                w={{ base: "full", md: "auto" }}
                as={Link}
                href="https://discord.gg/aCygGwBWya"
                target="_blank"
              >
                Join Discord
              </Button>
            </VStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default DeveloperResourcesSection;
