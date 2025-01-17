import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Circle,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  DollarSignIcon,
  FileTextIcon,
  MessageCircleIcon,
  CheckIcon,
  CodeIcon,
  BrainIcon,
  UserIcon,
  UserCogIcon,
} from "lucide-react";
import { TitleSection } from "./Components";

const ProgramRequirementsSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
      <VStack spacing={16} align="center">
        <TitleSection
          pre="Program Requirements"
          title="Who Can Participate?"
          description="Our program is designed for developers at all experience levels"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="full">
          <VStack align="start" spacing={8}>
            <Heading size="lg" color="white" letterSpacing="tight">
              Who is it for?
            </Heading>
            <List spacing={6} color="gray.200" fontSize="lg">
              <ListItem>
                <ListIcon as={UserIcon} color="green.400" boxSize={5} />
                Beginners starting their Web3 journey
              </ListItem>
              <ListItem>
                <ListIcon as={CodeIcon} color="green.400" boxSize={5} />
                Experienced developers
              </ListItem>
              <ListItem>
                <ListIcon as={BrainIcon} color="green.400" boxSize={5} />
                Tech team leaders
              </ListItem>
              <ListItem>
                <ListIcon as={UserCogIcon} color="green.400" boxSize={5} />
                CTOs and technical decision makers
              </ListItem>
            </List>
          </VStack>

          <VStack align="start" spacing={8}>
            <Heading size="lg" color="white" letterSpacing="tight">
              Technical Requirements
            </Heading>
            <List spacing={6} color="gray.200" fontSize="lg">
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" boxSize={5} />
                Experience with smart contract development
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" boxSize={5} />
                Familiarity with Solidity or similar languages
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" boxSize={5} />
                Understanding of blockchain deployment processes
              </ListItem>
            </List>
          </VStack>
        </SimpleGrid>

        <VStack spacing={12} w="full">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" alignItems="center">
            <Heading size="2xl" color="white" letterSpacing="tight" lineHeight="shorter">
              Program Steps
            </Heading>
            <HStack spacing={4} justify={{ base: "flex-start", md: "flex-end" }}>
              <DollarSignIcon size={32} color="var(--anyflow-colors-green-400)" />
              <Heading size="lg" color="white" letterSpacing="tight">
                Earn up to $70 for completing the program
              </Heading>
            </HStack>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {[
              {
                step: 1,
                title: "Complete Onboarding",
                description: "Complete onboarding and technical assessment",
                icon: CheckCircleIcon,
              },
              {
                step: 2,
                title: "Test & Feedback",
                description: "Test deployment features and provide feedback",
                icon: MessageCircleIcon,
              },
              {
                step: 3,
                title: "Submit Report",
                description: "Submit a detailed feedback report",
                icon: FileTextIcon,
              },
            ].map((item) => (
              <VStack key={item.step} spacing={6} align="start">
                <HStack spacing={4}>
                  <Circle
                    size={12}
                    bg="brand.500"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    {item.step}
                  </Circle>
                  <Heading size="lg" color="white" letterSpacing="tight">
                    {item.title}
                  </Heading>
                </HStack>
                <Text color="gray.200" fontSize="lg" pl={16}>
                  {item.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <Button
          size="lg"
          variant="gradient"
          rightIcon={<ArrowRightIcon />}
          px={12}
          py={7}
          fontSize="xl"
        >
          Apply Now
        </Button>
      </VStack>
    </Container>
  );
};

export default ProgramRequirementsSection;
