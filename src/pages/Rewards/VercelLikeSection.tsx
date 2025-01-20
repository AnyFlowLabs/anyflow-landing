import { Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { QuoteIcon } from "lucide-react";

const VercelLikeSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
      <HStack
        w="full"
        align="center"
        justify="center"
        spacing={{ base: 8, md: 20 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack
          w="full"
          align="flex-start"
          justify="center"
          spacing={{ base: 0, md: 2 }}
        >
          <QuoteIcon size={32} style={{ transform: "rotate(180deg)" }} />
          <Text
            mt={4}
            textAlign="left"
            fontSize="xl"
            fontFamily="body"
            fontWeight="light"
            lineHeight="shorter"
            color="gray.50"
            fontStyle="italic"
          >
            "Every deployment felt like a gamble with manual gas setups and
            private key risks. AnyFlow’s automation ensures I can deploy
            confidently and focus on scaling my project.
          </Text>
          <HStack
            align="center"
            justify="center"
            gap={{ base: 2, md: 4 }}
            mt={4}
          >
            <Image
              src="/rewards/avatar-1.png"
              alt="Wagner M. B."
              width={12}
              height={12}
            />

            <VStack w="full" align="start" gap={0} flex={1}>
              <Text fontWeight="bold" color="gray.50">
                Samantha Torres{" "}
              </Text>
              <Text fontWeight="medium" color="gray.300" fontSize="sm">
                Developer @ Web3 startup
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack w="full" align="flex-start" justify="flex-start" spacing={0}>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            bgGradient="linear(to-r, info.400, success.600)"
            bgClip="text"
            fontWeight="bold"
            fontFamily="heading"
            letterSpacing={0.5}
            textAlign={{ base: "left", md: "left" }}
          >
            Tired of wasting time on developments?
          </Text>
          <Text
            textAlign="left"
            fontSize={{ base: "4xl", md: "6xl" }}
            color="gray.100"
            lineHeight="1.2"
            fontWeight="bold"
          >
            You're not alone. That’s why we’re building{" "}
            <Text
              as="span"
              color="brand.400"
              bgGradient="linear(to-r, brand.200, brand.500)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              the “Vercel” of smart contracts.
            </Text>
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default VercelLikeSection;
