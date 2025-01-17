import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Circle,
  Box,
} from "@chakra-ui/react";
import {
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  DollarSignIcon,
  FileTextIcon,
  MessageCircleIcon,
  SparklesIcon,
  CodeIcon,
  Share2Icon,
  LinkIcon,
} from "lucide-react";
import { TitleSection } from "./Components";

const SimpleStepsSection = () => {
  return (
    <Box w="full" py={{ base: 4, md: 8 }} position="relative" overflow="hidden">
      {/* <Box
        position="absolute"
        top="0"
        left="50%"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 50% 0%, transparent 0%, info.600 70%, transparent 100%)"
        filter="blur(100px)"
        w={{ base: "full", md: "25vw" }}
        h={{ base: "full", md: "25vh" }}
        transform="translate(-50%, -50%)"
        opacity="0.5"
      /> */}

      <Container maxW="container.xl" position="relative">
        <VStack spacing={12} align="center" w="full">
          <TitleSection
            pre="Reward Program"
            title="3 simple steps to earn rewards"
            description="Complete all steps to earn up to $70 in rewards. Most developers finish in under 2 hours!"
          />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {[
              {
                step: 1,
                title: "Deploy Contract",
                tasks: [
                  { icon: CodeIcon, text: "Deploy to XDC Network" },
                  { icon: FileTextIcon, text: "Quick feedback form" },
                ],
                time: "20 min",
                reward: 10,
              },
              {
                step: 2,
                title: "Detailed Feedback",
                tasks: [
                  { icon: CheckCircleIcon, text: "Complete survey" },
                  { icon: MessageCircleIcon, text: "Improvement ideas" },
                ],
                time: "30 min",
                reward: 20,
              },
              {
                step: 3,
                title: "Quick Interview",
                tasks: [
                  { icon: MessageCircleIcon, text: "Feedback discussion" },
                  { icon: UsersIcon, text: "Experience sharing" },
                ],
                time: "30 min",
                reward: 40,
              },
            ].map((item, index) => (
              <VStack
                key={index}
                p={10}
                bgGradient="linear(to-br, transparent, transparent, transparent, transparent, gray.800)"
                borderRadius="2xl"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                spacing={8}
                align="start"
                position="relative"
                transition="all 0.4s ease-in-out"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                }}
                backdropFilter="blur(10px)"
              >
                <HStack spacing={4} w="full">
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

                <VStack align="start" spacing={6} w="full">
                  <VStack align="start" spacing={4} w="full">
                    {item.tasks.map((task, i) => (
                      <HStack
                        key={i}
                        color="gray.300"
                        transition="all 0.3s"
                        _hover={{ color: "brand.400" }}
                      >
                        <task.icon size={18} />
                        <Text fontSize="lg">{task.text}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <HStack justify="center" w="full">
                    <HStack color="gray.400" flex={1}>
                      <ClockIcon size={16} />
                      <Text>{item.time}</Text>
                    </HStack>

                    <Text
                      bg="green.400"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="bold"
                    >
                      Earn $ {item.reward}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          <HStack gap={8} color="gray.400" fontSize="md">
            <Button
              size="lg"
              variant="gradient"
              rightIcon={<SparklesIcon />}
              px={12}
              py={7}
              fontSize="xl"
              _hover={{
                transform: "translateY(-2px)",
              }}
            >
              Start earning now
            </Button>
            <HStack>
              <ClockIcon size={18} color="var(--anyflow-colors-info-500)" />
              <Text color="gray.200">Average completion: 1.5 hours</Text>
            </HStack>
            <HStack>
              <DollarSignIcon
                size={18}
                color="var(--anyflow-colors-info-500)"
              />
              <Text color="gray.200">Total earnings: up to $70</Text>
            </HStack>
          </HStack>

          <HStack
            spacing={4}
            p={{ base: 4, sm: 8, md: 16, lg: 24 }}
            bg="gray.800"
            w="full"
            borderRadius="2xl"
            border="2px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
          >
            <TitleSection
              pre="Referral Program"
              title="Refer a friend"
              description="Invite friends who complete the program and earn an additional $10 for each successful referral up to $70 in total rewards"
              forceAlignLeft
            />
            <Button
              leftIcon={<Share2Icon />}
              variant="outline"
              colorScheme="brand"
              size="lg"
              _hover={{
                transform: "translateY(-2px)",
              }}
            >
              Share on X
            </Button>
            <Button
              leftIcon={<LinkIcon />}
              variant="subtle"
              colorScheme="brand"
              size="lg"
              _hover={{
                transform: "translateY(-2px)",
              }}
              onClick={() => {
                // Add referral link logic here
                window.location.href = "/app/welcome?ref=xyz";
              }}
            >
              Copy referral link
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default SimpleStepsSection;
