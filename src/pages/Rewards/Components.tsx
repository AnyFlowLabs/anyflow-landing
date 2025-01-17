import { VStack, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";

export const TitleSection: FC<{
  pre?: string;
  title: string;
  description?: string;
}> = ({ pre, title, description }) => {
  return (
    <VStack gap={{ base: 0, md: 0 }} w="full" align="center" justify="center">
      {pre && (
        <Text
          fontSize="xl"
          bgGradient="linear(to-r, info.400, success.600)"
          bgClip="text"
          fontWeight="bold"
          fontFamily="heading"
          letterSpacing={0.5}
        >
          {pre}
        </Text>
      )}
      <Heading as="h2" textStyle="title" fontSize={{ base: "2xl", md: "5xl" }}>
        {title}
      </Heading>
      {description && (
        <Text fontSize="xl" color="gray.200">
          {description}
        </Text>
      )}
    </VStack>
  );
};
