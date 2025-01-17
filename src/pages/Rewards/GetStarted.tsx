import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "lucide-react";
import { TitleSection } from "./Components";

const GetStartedSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <VStack spacing={8} align="center" w="full">
        <TitleSection
          pre="Initial Setup"
          title="Get started in 3 easy steps"
          description="Complete these steps to begin earning rewards"
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          <VStack
            p={8}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
            align="start"
            spacing={4}
          >
            <Heading size="md" color="gray.100">
              1. Follow us on Twitter
            </Heading>
            <Text color="gray.300">
              Stay updated with latest news and announcements
            </Text>
            <Button variant="outline" rightIcon={<ArrowRightIcon />}>
              Follow on Twitter
            </Button>
          </VStack>

          <VStack
            p={8}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
            align="start"
            spacing={4}
          >
            <Heading size="md" color="gray.100">
              2. Join our Discord
            </Heading>
            <Text color="gray.300">Connect with community and get support</Text>
            <Button variant="outline" rightIcon={<ArrowRightIcon />}>
              Join Discord
            </Button>
          </VStack>

          <VStack
            p={8}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
            align="start"
            spacing={4}
          >
            <Heading size="md" color="gray.100">
              3. Create GitHub Account
            </Heading>
            <Text color="gray.300">Required for program participation</Text>
            <Button variant="outline" rightIcon={<ArrowRightIcon />}>
              Connect GitHub
            </Button>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default GetStartedSection;
