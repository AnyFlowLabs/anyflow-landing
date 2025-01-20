import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  UsersIcon,
  WalletIcon,
  LayersIcon,
  MessageSquareIcon,
} from "lucide-react";
import CardsSection from "./CardsSection";
import VercelLikeSection from "./VercelLikeSection";
import { TitleSection } from "./Components";
import RecommendedSection from "./RecommendedSection";
import GetStartedSection from "./GetStarted";
import HeroSection from "./HeroSection";
import SimpleStepsSection from "./SimpleStepsSection";
import ProgramRequirementsSection from "./ProgramRequirementsSection";
import RewardsFaqSection from "./RewardsFaqSection";
import ReadyToEarnSection from "./ReadyToEarnSection";
import WhyJoinNowSection from "./WhyJoinNowSection";
import DeveloperResourcesSection from "./DeveloperResourcesSection";
import ModalClose from "./ModalClose";
import { APP_URL } from "@/const";

const RewardsPage = () => {
  return (
    <Box as="main">
      <ModalClose />
      <HeroSection />

      <VercelLikeSection />

      <CardsSection />

      <Container maxW="container.xl" py={{ base: 8, md: 24 }}>
        <VStack spacing={{ base: 1, md: 2 }} align="center" w="full">
          <TitleSection
            pre="Benefits"
            title="Why join our program?"
            description="Get rewarded while helping shape the future of web3 deployment"
          />

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 8 }}
            w="full"
            pt={{ base: 4, md: 8 }}
          >
            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              gap={{ base: 4, md: 6 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <WalletIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={{ base: 2, md: 4 }}>
                <Heading size="md" color="white">
                  Earn while testing
                </Heading>
                <VStack align="start" spacing={2} gap={{ base: 1, md: 2 }}>
                  <Text color="info.500">Up to $70 per completion</Text>
                  <Text color="info.500">$10 early bird bonus</Text>
                  <Text color="info.500">$10 per referral</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  View reward structure
                </Button>
                <Text fontSize="sm" color="gray.400">
                  Payout at the end of each month
                </Text>
              </VStack>
            </VStack>

            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <LayersIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={{ base: 2, md: 4 }}>
                <Heading size="md" color="white">
                  Shape the future
                </Heading>
                <VStack align="start" spacing={2} gap={{ base: 1, md: 2 }}>
                  <Text color="info.500">Up to $70 per completion</Text>
                  <Text color="info.500">12+ Supported chains</Text>
                  <Text color="info.500">Direct impact on features</Text>
                  <Text color="info.500">Early access to updates</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  Explore supported chains
                </Button>
              </VStack>
            </VStack>

            <VStack
              flex={1}
              p={{ base: 6, md: 12 }}
              bgGradient="linear(to-br, gray.600, transparent, transparent, transparent, gray.800)"
              border="solid 1px"
              borderColor="gray.500"
              borderRadius="lg"
              align="start"
              transition="all 0.3s ease-in-out"
              backdropFilter="blur(4px)"
              _hover={{
                bgGradient:
                  "linear(to-br, gray.600, transparent, transparent, transparent, gray.900)",
                transform: "translateY(-2px)",
              }}
            >
              <UsersIcon size={32} color="var(--anyflow-colors-brand-500)" />
              <VStack align="start" spacing={{ base: 2, md: 4 }}>
                <Heading size="md" color="white">
                  Join the community
                </Heading>
                <VStack align="start" spacing={2} gap={{ base: 1, md: 2 }}>
                  <Text color="info.300">24 active members</Text>
                  <Text color="info.300">24/7 Support</Text>
                </VStack>
                <Button
                  variant="link"
                  color="brand.400"
                  rightIcon={<MessageSquareIcon size={16} />}
                >
                  Join Discord community
                </Button>
              </VStack>
            </VStack>
          </SimpleGrid>

          <Button
            size="lg"
            variant="gradient"
            mt={{ base: 4, md: 8 }}
            rightIcon={<ArrowRightIcon />}
            w={{ base: "full", md: "auto" }}
            as={Link}
            href={APP_URL + "/rewards"}
            target="_blank"
          >
            Start earning now
          </Button>
        </VStack>
      </Container>

      <RecommendedSection />
      <GetStartedSection />

      <SimpleStepsSection />

      <ProgramRequirementsSection />

      <WhyJoinNowSection />

      <DeveloperResourcesSection />

      <RewardsFaqSection />

      <ReadyToEarnSection />
    </Box>
  );
};

export default RewardsPage;
