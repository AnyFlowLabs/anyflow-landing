import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  useMediaQuery,
  AspectRatio,
} from "@chakra-ui/react";
import {
  BoltIcon,
  LockIcon,
  CoinsIcon,
  RocketIcon,
  SquareStackIcon,
} from "lucide-react";
import BackedSection from "./Backted";
import FeaturedSection from "./Featured";
import { useEffect, useState } from "react";
import { APP_URL } from "@/const";

const HeroSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const roles = ["web3 CTO", "web3 tech lead", "web3 developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        maxW="container.xl"
        py={{ base: 4, md: 16 }}
        zIndex={2}
        pos="relative"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 0, md: 16 }}
        >
          <VStack spacing={4} align={{ base: "center", lg: "start" }} flex={1}>
            <Box overflow="hidden" position="relative" w="full">
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontWeight="400"
                fontFamily="heading"
                letterSpacing={0.5}
                textAlign={{ base: "left", md: "left" }}
                w={{ base: "full", md: "auto" }}
              >
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.400, success.600)"
                  bgClip="text"
                >
                  Hey{" "}
                </Text>
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.500, success.400)"
                  bgClip="text"
                  fontWeight="bold"
                  animation={
                    isAnimating
                      ? `roleSlideUp 0.5s ease-out forwards`
                      : `roleSlideDown 0.5s ease-out`
                  }
                >
                  {roles[roleIndex]}
                </Text>
                <Text
                  as="span"
                  bgGradient="linear(to-r, info.400, success.600)"
                  bgClip="text"
                >
                  , ready to shape the future?
                </Text>
              </Text>
            </Box>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              lineHeight="shorter"
              color="white"
              textAlign={{ base: "left", lg: "left" }}
              data-aos="fade-up"
            >
              Earn up to{" "}
              <Text
                as="strong"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
                fontWeight="900"
              >
                $70
              </Text>{" "}
              testing the future of smart contract deployment
            </Heading>

            <Flex
              w="full"
              flexDir={{ base: "column", md: "row" }}
              gap={4}
              align="center"
              justify="flex-start"
            >
              <HStack
                fontSize="xs"
                letterSpacing={0.5}
                textTransform="uppercase"
                color="gray.100"
                bg="rgba(255,255,255,0.1)"
                px={4}
                py={2}
                borderRadius="lg"
                data-aos="fade-up"
                w={{ base: "full", md: "auto" }}
                data-aos-delay={100}
              >
                <SquareStackIcon size={16} />
                <Text fontWeight="light" fontFamily="heading" letterSpacing={1}>
                  Limited Spots Available
                </Text>
              </HStack>

              <HStack
                fontSize="sm"
                color="gray.100"
                data-aos="fade-up"
                data-aos-delay={200}
                w={{ base: "full", md: "auto" }}
              >
                <Text fontWeight="light" fontFamily="heading" letterSpacing={1}>
                  50 spots available
                </Text>
              </HStack>
            </Flex>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.100"
              maxW="xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Join leading web3 developers in revolutionizing smart contract
              deployment across 12+ chains. Share your expertise, earn rewards,
              and shape the future of blockchain development
            </Text>

            {isMobile && (
              <Box flex={1} position="relative" w="full">
                <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/N1Dv0E4YoQg?autoplay=1&loop=1&mute=0&controls=0&autohide=1&showinfo=0"
                  title="Hero video"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{
                    borderRadius: "0.5rem",
                    border: "solid 2px rgba(255,255,255,0.1)",
                  }}
                />
                </AspectRatio>
              </Box>
            )}

            <Button
              as={Link}
              href={APP_URL + "/rewards"}
              target="_blank"
              size="lg"
              variant="gradient"
              color="white"
              px={16}
              py={8}
              rightIcon={<RocketIcon size={24} />}
              data-aos="fade-up"
              data-aos-delay={300}
              w={{ base: "full", md: "auto" }}
            >
              Start now
            </Button>

            <HStack
              spacing={{ base: 2, md: 12 }}
              pt={{ base: 2, md: 8 }}
              w="full"
              flexDir={{ base: "row", md: "row" }}
              align={{ base: "start", md: "start" }}
            >
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <BoltIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Setup in 5 minutes
                </Text>
              </HStack>
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <LockIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  No wallet connection required
                </Text>
              </HStack>
              <HStack
                flexDir={{ base: "column", md: "row" }}
                align="center"
                gap={2}
                color="info.500"
                data-aos="fade-up"
                data-aos-delay={100}
                w={{ base: "full", md: "auto" }}
              >
                <CoinsIcon size={24} />
                <Text
                  fontFamily="heading"
                  fontWeight="light"
                  color="gray.200"
                  fontSize="xs"
                  letterSpacing={{ base: 0, md: 0.25 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Up to $70 in rewards
                </Text>
              </HStack>
            </HStack>
          </VStack>

          {!isMobile && (
            <Box flex={1} position="relative" mt={{ base: 8, md: 0 }} w="full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/N1Dv0E4YoQg?autoplay=1&loop=1&mute=0&controls=0&autohide=1&showinfo=0"
                  title="Hero video"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{
                    borderRadius: "0.5rem",
                    border: "solid 2px rgba(255,255,255,0.1)",
                  }}
                />
              </AspectRatio>
            </Box>
          )}
        </Flex>
      </Container>

      <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
        <HStack
          spacing={{ base: 4, md: 6 }}
          w="full"
          align="center"
          justify="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <BackedSection />
          <FeaturedSection />
        </HStack>
      </Container>
    </>
  );
};

export default HeroSection;
