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
    <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
      <VStack spacing={{ base: 8, md: 12 }} align="center">
        <TitleSection
          pre="Let's start coding"
          title="Developer Resources"
          description="Everything you need to get started and succeed"
        />

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 6, md: 8 }} 
          w="full"
        >
          <VStack
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            align="start"
            spacing={6}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <Box
              p={3}
              bg={highlightBg}
              borderRadius="lg"
              color="brand.500"
            >
              <Icon as={BookOpenIcon} boxSize={6} />
            </Box>
            <VStack align="start" spacing={4}>
              <Heading size="md" color={headingColor}>
                Documentation
              </Heading>
              <Text color={textColor} fontSize="sm">
                Comprehensive guides and API references to help you build faster
              </Text>
              <Button
                variant="ghost"
                colorScheme="brand"
                size="sm"
                rightIcon={<ArrowRightIcon size={16} />}
                aria-label="View documentation"
                fontWeight="medium"
              >
                View Docs
              </Button>
            </VStack>
          </VStack>

          <VStack
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl" 
            align="start"
            spacing={6}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <Box
              p={3}
              bg={highlightBg}
              borderRadius="lg"
              color="brand.500"
            >
              <Icon as={CodeIcon} boxSize={6} />
            </Box>
            <VStack align="start" spacing={4}>
              <Heading size="md" color={headingColor}>
                Sample Projects
              </Heading>
              <Text color={textColor} fontSize="sm">
                Ready-to-use templates and example implementations to kickstart your development
              </Text>
              <Button
                variant="ghost"
                colorScheme="brand"
                size="sm"
                rightIcon={<ArrowRightIcon size={16} />}
                aria-label="View templates"
                fontWeight="medium"
              >
                View Templates
              </Button>
            </VStack>
          </VStack>

          <VStack
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            align="start"
            spacing={6}
            role="group"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)", 
              shadow: "2xl",
              borderColor: "brand.500",
            }}
          >
            <Box
              p={3}
              bg={highlightBg}
              borderRadius="lg"
              color="brand.500"
            >
              <Icon as={UsersRoundIcon} boxSize={6} />
            </Box>
            <VStack align="start" spacing={4}>
              <Heading size="md" color={headingColor}>
                Community
              </Heading>
              <Text color={textColor} fontSize="sm">
                Join our vibrant Discord community for real-time support and discussions
              </Text>
              <HStack 
                spacing={3} 
                p={3}
                bg={useColorModeValue("brand.50", "brand.900")}
                borderRadius="lg"
                w="full"
              >
                <Badge 
                  colorScheme="brand" 
                  fontSize="sm" 
                  px={3} 
                  py={1} 
                  borderRadius="full"
                >
                  20+ members
                </Badge>
                <Badge 
                  colorScheme="green" 
                  fontSize="sm" 
                  px={3} 
                  py={1} 
                  borderRadius="full"
                >
                  24/7 Active
                </Badge>
              </HStack>
              <Button
                variant="ghost"
                colorScheme="brand"
                size="sm"
                rightIcon={<MessageSquareIcon size={16} />}
                aria-label="Join Discord community"
                fontWeight="medium"
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
