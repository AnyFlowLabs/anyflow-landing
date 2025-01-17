import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Box,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { ArrowRightIcon, GithubIcon, MessageCircleIcon } from "lucide-react";
import { TitleSection } from "./Components";
import ElonMuskIcon from "@/components/Icons/XIcon";

const GetStartedSection = () => {
  return (
    <Container
      maxW="container.xl"
      position="relative"
      py={{ base: 16, md: 24 }}
    >
      <VStack spacing={12} align="center" w="full">
        <TitleSection
          pre="Quick Setup"
          title="Join our community in 3 steps"
          description="Complete these simple steps to unlock your rewards journey"
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {[
            {
              step: 1,
              title: "Follow on X",
              description: "Stay updated with latest news and announcements",
              icon: ElonMuskIcon,
              gradient: "linear(to-br, blue.600, blue.400)",
            },
            {
              step: 2,
              title: "Join Discord Community",
              description: "Connect with community and get 24/7 support",
              icon: MessageCircleIcon,
              gradient: "linear(to-br, purple.600, purple.400)",
            },
            {
              step: 3,
              title: "Connect GitHub",
              description: "Required for program participation and rewards",
              icon: GithubIcon,
              gradient: "linear(to-br, gray.600, gray.400)",
            },
          ].map((item, index) => (
            <VStack
              key={index}
              align="start"
              spacing={6}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "translateY(-4px)",
                cursor: "pointer",
              }}
              position="relative"
              overflow="hidden"
              animation={`bounce ${index + 1 * 2}s infinite`}
            >
              <HStack spacing={{ base: 4, md: 8 }}>
                <Box p={4} borderRadius="lg" bg="brand.500">
                  <Icon as={item.icon} boxSize={8} color="white" />
                </Box>
                <VStack align="start" spacing={2}>
                  <Heading size="md" color="white">
                    {item.title}
                  </Heading>
                  <Text color="gray.200" fontSize="sm">
                    {item.description}
                  </Text>
                </VStack>
                <ArrowRightIcon />
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default GetStartedSection;
