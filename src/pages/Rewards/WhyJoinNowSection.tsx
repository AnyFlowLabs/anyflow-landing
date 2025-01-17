import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Progress,
  useColorModeValue,
  Circle,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  SparklesIcon,
  RocketIcon,
  CrownIcon,
  StarIcon,
} from "lucide-react";
import { TitleSection } from "./Components";

const WhyJoinNowSection = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("purple.500", "purple.300");

  return (
    <Box
      maxW="full"
      mx={{ base: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
      bg="brand.700"
      borderRadius="lg"
    >
      <Container maxW="container.xl" py={{ base: 12, sm: 16, md: 24, lg: 32 }}>
        <VStack spacing={12} align="center">
          <VStack spacing={4} textAlign="center">
            <HStack spacing={2} px={4} py={1} borderRadius="full" bg="info.600">
              <Text fontSize="md" letterSpacing={1} fontWeight="100">
                Limited time opportunity
              </Text>
            </HStack>
            <TitleSection
              title="Why join now?"
              description="Don't miss out on exclusive rewards and early adopter benefits"
            />
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            <VStack
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              spacing={6}
              align="start"
              role="group"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Circle size={12} bg="purple.100" color="purple.500">
                <RocketIcon size={24} />
              </Circle>
              <VStack align="start" spacing={2}>
                <Heading size="md">Early access program</Heading>
                <Text color={textColor}>Only 50 spots available</Text>
                <Box w="full">
                  <Progress
                    value={0}
                    colorScheme="purple"
                    borderRadius="full"
                  />
                  <Text mt={2} fontSize="sm" color={textColor}>
                    <strong>0</strong> spots taken
                  </Text>
                </Box>
              </VStack>
            </VStack>

            <VStack
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              spacing={6}
              align="start"
              role="group"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Circle size={12} bg="yellow.100" color="yellow.500">
                <SparklesIcon size={24} />
              </Circle>
              <VStack align="start" spacing={2}>
                <Heading size="md">Early Bird Bonus</Heading>
                <Text color={textColor}>
                  Extra $10 bonus for first participants
                </Text>
                <Text fontSize="sm" color={accentColor} fontWeight="bold">
                  Offer ends January 31st
                </Text>
              </VStack>
            </VStack>

            <VStack
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              spacing={6}
              align="start"
              role="group"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Circle size={12} bg="blue.100" color="blue.500">
                <CrownIcon size={24} />
              </Circle>
              <VStack align="start" spacing={2}>
                <Heading size="md">Founding Members</Heading>
                <Text color={textColor}>
                  Join our exclusive Discord community
                </Text>
                <Text fontSize="sm" color={accentColor} fontWeight="bold">
                  50 spots remaining
                </Text>
              </VStack>
            </VStack>

            <VStack
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              spacing={6}
              align="start"
              role="group"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Circle size={12} bg="green.100" color="green.500">
                <StarIcon size={24} />
              </Circle>
              <VStack align="start" spacing={2}>
                <Heading size="md">Launch Offer</Heading>
                <Text color={textColor}>
                  Priority access to future programs
                </Text>
                <Text fontSize="sm" color="red.500" fontWeight="bold">
                  14 days left
                </Text>
              </VStack>
            </VStack>
          </SimpleGrid>

          <Button
            size="lg"
            rightIcon={<ArrowRightIcon />}
            aria-label="Join the early access program now"
            variant="gradient"
          >
            Join now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyJoinNowSection;
