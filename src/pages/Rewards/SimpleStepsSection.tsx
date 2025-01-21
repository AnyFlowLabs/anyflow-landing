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
  Link,
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
import { APP_URL } from "@/const";

const SimpleStepsSection = () => {
  return (
    <Box
      w="full"
      py={{ base: 16, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="50%"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 50% 0%, transparent 0%, info.600 70%, transparent 100%)"
        filter="blur(100px)"
        w={{ base: "full", md: "500px" }}
        h={{ base: "100px", md: "500px" }}
        transform="translate(-50%, -50%)"
        opacity="0.5"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={{ base: 4, md: 12 }} align="center" w="full">
          <TitleSection
            pre="Reward Program"
            title="3 simple steps to earn rewards"
            description="Complete all steps to earn up to $70 in rewards. Most developers finish in under 2 hours!"
          />

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 2, md: 8 }}
            w="full"
          >
            {[
              {
                step: 1,
                title: "Deploy Contract",
                tasks: [
                  {
                    icon: CodeIcon,
                    text: "Deploy to XDC Network",
                    time: "5 ~ 10 min",
                  },
                  {
                    icon: FileTextIcon,
                    text: "Quick feedback form",
                    time: "5 ~ 10 min",
                  },
                ],
                time: "20 min",
                reward: 10,
              },
              {
                step: 2,
                title: "Detailed Feedback",
                tasks: [
                  {
                    icon: CheckCircleIcon,
                    text: "Complete survey",
                    time: "10 ~ 20 min",
                  },
                  {
                    icon: MessageCircleIcon,
                    text: "Improvement ideas",
                    time: "10 ~ 15 min",
                  },
                ],
                time: "30 min",
                reward: 20,
              },
              {
                step: 3,
                title: "Quick Interview",
                tasks: [
                  {
                    icon: MessageCircleIcon,
                    text: "Feedback discussion",
                    time: "20 min",
                  },
                  {
                    icon: UsersIcon,
                    text: "Experience sharing",
                    time: "10 min",
                  },
                ],
                time: "30 min",
                reward: 40,
              },
            ].map((item, index) => (
              <VStack
                key={index}
                p={{ base: 4, md: 10 }}
                bgGradient="linear(to-br, transparent, transparent, transparent, transparent, gray.800)"
                borderRadius="lg"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                spacing={{ base: 4, md: 8 }}
                align="start"
                position="relative"
                transition="all 0.4s ease-in-out"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                }}
                backdropFilter="blur(10px)"
              >
                <HStack spacing={{ base: 4, md: 6 }} w="full">
                  <Circle
                    size={{ base: 10, md: 12 }}
                    bg="brand.500"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                    border="2px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                  >
                    {item.step}
                  </Circle>
                  <Heading
                    fontSize={{ base: "2xl", md: "2xl" }}
                    color="white"
                    letterSpacing="tight"
                  >
                    {item.title}
                  </Heading>
                </HStack>

                <VStack align="start" spacing={{ base: 4, md: 6 }} w="full">
                  <VStack align="start" spacing={{ base: 2, md: 4 }} w="full">
                    {item.tasks.map((task, i) => (
                      <HStack
                        key={i}
                        color="gray.300"
                        transition="all 0.3s"
                        _hover={{ color: "brand.400" }}
                      >
                        <task.icon size={18} />
                        <Text fontSize={{ base: "sm", md: "md" }} flex={1}>
                          {task.text}
                        </Text>
                        <Text fontSize="xs" color="gray.400">
                          {task.time}
                        </Text>
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

          <HStack
            gap={{ base: 4, md: 8 }}
            color="gray.400"
            fontSize="md"
            flexDir={{ base: "column", md: "row" }}
            w={{ base: "full", md: "auto" }}
          >
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
              w={{ base: "full", md: "auto" }}
              as={Link}
              href={APP_URL + "/rewards"}
              target="_blank"
            >
              Start earning now
            </Button>
            <HStack w={{ base: "full", md: "auto" }}>
              <ClockIcon size={18} color="var(--anyflow-colors-info-500)" />
              <Text color="gray.200">Average completion: 1.5 hours</Text>
            </HStack>
            <HStack w={{ base: "full", md: "auto" }}>
              <DollarSignIcon
                size={18}
                color="var(--anyflow-colors-info-500)"
              />
              <Text color="gray.200">Total earnings: $40</Text>
            </HStack>
          </HStack>

          <HStack
            spacing={{ base: 4, md: 8 }}
            bg="gray.800"
            w={{ base: "auto", md: "full" }}
            borderRadius="lg"
            border={{ base: "none", md: "2px solid" }}
            borderColor={{
              base: "transparent",
              md: "rgba(255, 255, 255, 0.1)",
            }}
            backdropFilter="blur(10px)"
            flexDir={{ base: "column", md: "row" }}
            mx={{ base: -8, md: 0 }}
            px={{ base: 8, sm: 12, md: 16, lg: 24 }}
            py={{ base: 8, sm: 12, md: 16, lg: 24 }}
          >
            <TitleSection
              pre="Referral Program"
              title="Refer a friend"
              description="Invite friends who complete the program and earn an additional $10 for each successful referral up to $70 in total rewards"
              forceAlignLeft
            />
            <Button
              as={Link}
              leftIcon={<Share2Icon />}
              variant="outline"
              colorScheme="brand"
              size="lg"
              w={{ base: "full", md: "auto" }}
              _hover={{
                transform: "translateY(-2px)",
              }}
              href={`https://twitter.com/intent/tweet?text=Discover%20%40anyflow_%3A%20the%20tool%20that%20makes%20multichain%20smart%20contract%20deployment%20fast%2C%20secure%2C%20and%20effortless.%20Join%20the%20rewards%20program%2C%20test%20the%20platform%2C%20and%20earn%20up%20to%20%2470%20for%20your%20feedback!%20%F0%9F%9A%80%0A%F0%9F%91%89%20https%3A%2F%2Fbit.ly%2F40JrcJa%0A`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on X
            </Button>
            <Button
              leftIcon={<LinkIcon />}
              as={Link}
              href={APP_URL + "/rewards"}
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              colorScheme="brand"
              size="lg"
              w={{ base: "full", md: "auto" }}
              _hover={{
                transform: "translateY(-2px)",
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
