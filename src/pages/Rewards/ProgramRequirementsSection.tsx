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
  Icon,
  Flex,
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
    <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
      <VStack spacing={16} align="centers" justify="center" w="full">
        <TitleSection
          pre="Program Requirements"
          title="Who Can Participate?"
          description="Our program is designed for developers at all experience levels"
        />
        <HStack spacing={12} w="full" align="start" justify="center">
          <VStack align="start" spacing={8}>
            <Heading size="lg" color="white" letterSpacing="tight">
              Who is it for?
            </Heading>
            <SimpleGrid columns={2} spacing={{ base: 4, md: 16 }}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 2, md: 4 }}
                color="gray.200"
                fontSize="lg"
              >
                <VStack
                  w="full"
                  align="start"
                  bg="gray.600"
                  p={{ base: 2, md: 4 }}
                  borderRadius="lg"
                >
                  <Icon as={UserIcon} color="gray.50" boxSize={12} />
                  <Text>Beginners starting their Web3 journey</Text>
                </VStack>
                <VStack
                  w="full"
                  align="start"
                  bg="gray.600"
                  p={{ base: 2, md: 4 }}
                  borderRadius="lg"
                >
                  <Icon as={CodeIcon} color="gray.50" boxSize={12} />
                  <Text>Experienced developers</Text>
                </VStack>
                <VStack
                  w="full"
                  align="start"
                  bg="gray.600"
                  p={{ base: 2, md: 4 }}
                  borderRadius="lg"
                >
                  <Icon as={BrainIcon} color="gray.50" boxSize={12} />
                  <Text>Tech team leaders</Text>
                </VStack>
                <VStack
                  w="full"
                  align="start"
                  bg="gray.600"
                  p={{ base: 4, md: 4 }}
                  borderRadius="lg"
                >
                  <Icon as={UserCogIcon} color="gray.50" boxSize={12} />
                  <Text>CTOs and technical decision makers</Text>
                </VStack>
              </SimpleGrid>
              <VStack align="start" justify="center" spacing={8}>
                <Heading
                  size="sm"
                  fontWeight="100"
                  color="gray.300"
                  letterSpacing="wider"
                  py={2}
                  px={4}
                  borderRadius="full"
                  border="solid 1px"
                  borderColor="gray.50"
                >
                  Technical Requirements
                </Heading>
                <SimpleGrid
                  columns={{ base: 1, md: 1 }}
                  spacing={{ base: 2, md: 0 }}
                  color="gray.200"
                  fontSize="lg"
                  h="full"
                >
                  <HStack w="full" align="center" justify="start">
                    <Icon as={CheckIcon} color="green.400" boxSize={8} />
                    <Text fontSize="xl" flex={1}>
                      Experience with smart contract development
                    </Text>
                  </HStack>
                  <HStack w="full" align="center" justify="start">
                    <Icon as={CheckIcon} color="green.400" boxSize={8} />
                    <Text fontSize="xl" flex={1}>
                      Experience with smart contract development
                    </Text>
                  </HStack>
                  <HStack w="full" align="center" justify="start">
                    <Icon as={CheckIcon} color="green.400" boxSize={8} />
                    <Text fontSize="xl" flex={1}>
                      Familiarity with Solidity or similar languages
                    </Text>
                  </HStack>
                  <HStack w="full" align="center" justify="start">
                    <Icon as={CheckIcon} color="green.400" boxSize={8} />
                    <Text fontSize="xl" flex={1}>
                      Understanding of blockchain deployment processes
                    </Text>
                  </HStack>
                </SimpleGrid>
              </VStack>
            </SimpleGrid>
          </VStack>
        </HStack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 2, md: 8 }}
          w="full"
        >
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
              <HStack spacing={{ base: 2, md: 4 }} align="center">
                <Circle
                  size={10}
                  bg="brand.500"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  {item.step}
                </Circle>
                <Heading size="md" color="white" letterSpacing="tight">
                  {item.title}
                </Heading>
              </HStack>
              <Text color="gray.400" fontSize="lg" pl={0}>
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>

      <Flex
        w="full"
        justify="center"
        gap={{ base: 4, md: 8 }}
        mt={{ base: 8, md: 16 }}
      >
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
        <HStack spacing={4} justify={{ base: "flex-start", md: "flex-end" }}>
          <DollarSignIcon size={32} color="var(--anyflow-colors-green-400)" />
          <Heading size="lg" color="white" letterSpacing="tight">
            Earn up to $70 for completing the program
          </Heading>
        </HStack>
      </Flex>
    </Container>
  );
};

export default ProgramRequirementsSection;
