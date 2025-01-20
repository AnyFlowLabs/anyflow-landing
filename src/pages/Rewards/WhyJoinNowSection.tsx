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
import { useMemo } from "react";

const WhyJoinNowSection = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("purple.500", "purple.300");

  const cards = useMemo(() => [
    {
      icon: RocketIcon,
      iconBg: "purple.100",
      iconColor: "purple.500",
      title: "Early access program",
      description: "Only 50 spots available",
      footer: (
        <Box w="full">
          <Progress value={0} colorScheme="purple" borderRadius="full" />
          <Text mt={2} fontSize="sm" color={textColor}>
            <strong>0</strong> spots taken
          </Text>
        </Box>
      ),
    },
    {
      icon: SparklesIcon,
      iconBg: "yellow.100", 
      iconColor: "yellow.500",
      title: "Early Bird Bonus",
      description: "Extra $10 bonus for first participants",
      footer: (
        <Text fontSize="sm" color={accentColor} fontWeight="bold">
          Offer ends January 31st
        </Text>
      ),
    },
    {
      icon: CrownIcon,
      iconBg: "blue.100",
      iconColor: "blue.500", 
      title: "Founding Members",
      description: "Join our exclusive Discord community",
      footer: (
        <Text fontSize="sm" color={accentColor} fontWeight="bold">
          50 spots remaining
        </Text>
      ),
    },
    {
      icon: StarIcon,
      iconBg: "green.100",
      iconColor: "green.500",
      title: "Launch Offer",
      description: "Priority access to future programs",
      footer: (
        <Text fontSize="sm" color="red.500" fontWeight="bold">
          14 days left
        </Text>
      ),
    },
  ], [textColor, accentColor]);

  return (
    <Box
      maxW="full"
      mx={{ base: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
      bg="brand.700"
      borderRadius="lg"
    >
      <Container maxW="container.xl" py={{ base: 4, sm: 16, md: 24, lg: 32 }}>
        <VStack spacing={{ base: 4, md: 12 }} align="center">
          <VStack spacing={{ base: 4, md: 4 }} textAlign="center">
            <HStack
              spacing={2}
              px={4}
              py={1}
              borderRadius="full"
              bg="info.600"
              w={{ base: "full", md: "auto" }}
            >
              <Text
                fontSize="md"
                letterSpacing={1}
                fontWeight="100"
                w={{ base: "full", md: "auto" }}
              >
                Limited time opportunity
              </Text>
            </HStack>
            <TitleSection
              title="Why join now?"
              description="Don't miss out on exclusive rewards and early adopter benefits"
            />
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 2, md: 8 }}
            w="full"
          >
            {cards.map((card, index) => (
              <VStack
                key={index}
                bg={cardBg}
                p={{ base: 4, md: 7}}
                borderRadius="lg"
                boxShadow="lg"
                spacing={6}
                align="start"
                role="group"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Circle size={12} bg={card.iconBg} color={card.iconColor} display="flex" alignItems="center" justifyContent="center">
                  <card.icon size={24} />
                </Circle>
                <VStack align="start" spacing={2}>
                  <Heading size="md">{card.title}</Heading>
                  <Text color={textColor}>{card.description}</Text>
                  {card.footer}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          <Button
            size="lg"
            rightIcon={<ArrowRightIcon />}
            aria-label="Join the early access program now"
            variant="outline"
            w={{ base: "full", md: "auto" }}
          >
            Join now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyJoinNowSection;
