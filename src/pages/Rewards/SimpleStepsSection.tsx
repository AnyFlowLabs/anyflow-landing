import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Circle,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  DollarSignIcon,
  SendIcon,
  FileTextIcon,
  MessageCircleIcon,
} from "lucide-react";
import { TitleSection } from "./Components";

const SimpleStepsSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <VStack spacing={8} align="center" w="full">
        <TitleSection
          pre="Reward Program"
          title="3 simple steps to earn rewards"
          description="Complete all steps to earn up to $70 in rewards. Most developers finish in under 2 hours!"
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
          <VStack
            p={8}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            spacing={6}
            align="start"
            position="relative"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Circle size={8} bg="brand.500" color="white" fontSize="xl">
              1
            </Circle>

            <VStack align="start" spacing={4}>
              <Heading size="md" color="white">
                Deploy Contract
              </Heading>

              <VStack align="start" spacing={3}>
                <HStack color="gray.300">
                  <SendIcon size={16} />
                  <Text>Deploy to XDC Network</Text>
                </HStack>
                <HStack color="gray.300">
                  <FileTextIcon size={16} />
                  <Text>Quick feedback form</Text>
                </HStack>
              </VStack>

              <HStack spacing={4} pt={2}>
                <HStack color="gray.400">
                  <ClockIcon size={16} />
                  <Text fontSize="sm">20 min total</Text>
                </HStack>
                <HStack color="green.400">
                  <DollarSignIcon size={16} />
                  <Text fontSize="sm">Earn $10</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            p={8}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            spacing={6}
            align="start"
            position="relative"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Circle size={8} bg="brand.500" color="white" fontSize="xl">
              2
            </Circle>

            <VStack align="start" spacing={4}>
              <Heading size="md" color="white">
                Detailed Feedback
              </Heading>

              <VStack align="start" spacing={3}>
                <HStack color="gray.300">
                  <CheckCircleIcon size={16} />
                  <Text>Complete survey</Text>
                </HStack>
                <HStack color="gray.300">
                  <MessageCircleIcon size={16} />
                  <Text>Improvement ideas</Text>
                </HStack>
              </VStack>

              <HStack spacing={4} pt={2}>
                <HStack color="gray.400">
                  <ClockIcon size={16} />
                  <Text fontSize="sm">30 min total</Text>
                </HStack>
                <HStack color="green.400">
                  <DollarSignIcon size={16} />
                  <Text fontSize="sm">Earn $10</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            p={8}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            spacing={6}
            align="start"
            position="relative"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Circle size={8} bg="brand.500" color="white" fontSize="xl">
              3
            </Circle>

            <VStack align="start" spacing={4}>
              <Heading size="md" color="white">
                Quick Interview
              </Heading>

              <VStack align="start" spacing={3}>
                <HStack color="gray.300">
                  <MessageCircleIcon size={16} />
                  <Text>Feedback discussion</Text>
                </HStack>
                <HStack color="gray.300">
                  <UsersIcon size={16} />
                  <Text>Experience sharing</Text>
                </HStack>
              </VStack>

              <HStack spacing={4} pt={2}>
                <HStack color="gray.400">
                  <ClockIcon size={16} />
                  <Text fontSize="sm">30 min total</Text>
                </HStack>
                <HStack color="green.400">
                  <DollarSignIcon size={16} />
                  <Text fontSize="sm">Earn $20</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <VStack spacing={4} pt={12}>
          <Button size="lg" colorScheme="brand" rightIcon={<ArrowRightIcon />}>
            Start earning now
          </Button>
          <HStack spacing={6} color="gray.400" fontSize="sm">
            <HStack>
              <ClockIcon size={16} />
              <Text>Average completion time: 1.5 hours</Text>
            </HStack>
            <Text>•</Text>
            <HStack>
              <DollarSignIcon size={16} />
              <Text>Total potential earnings: $40</Text>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default SimpleStepsSection;
