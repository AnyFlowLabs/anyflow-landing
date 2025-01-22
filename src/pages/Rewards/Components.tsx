import { VStack, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";

export const TitleSection: FC<{
  pre?: string;
  title: string;
  description?: string;
  forceAlignLeft?: boolean;
}> = ({ pre, title, description, forceAlignLeft }) => {
  return (
    <VStack
      gap={{ base: 0, md: 0 }}
      w="full"
      align={forceAlignLeft ? "start" : "center"}
      justify="center"
    >
      {pre && (
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          bgGradient="linear(to-r, info.400, success.600)"
          bgClip="text"
          fontWeight="bold"
          fontFamily="heading"
          letterSpacing={0.5}
          textAlign={{ base: "left", md: forceAlignLeft ? "left" : "center" }}
          w={{ base: "full", md: "auto" }}
        >
          {pre}
        </Text>
      )}
      <Heading
        as="h2"
        textStyle="title"
        fontSize={{ base: "2xl", md: "5xl" }}
        textAlign={{ base: "left", md: forceAlignLeft ? "left" : "center" }}
        w={{ base: "full", md: "auto" }}
      >
        {title}
      </Heading>
      {description && (
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.50"
          maxW={{ base: "full", md: "container.sm" }}
          w={{ base: "full", md: "auto" }}
          textAlign={{ base: "left", md: forceAlignLeft ? "left" : "center" }}
        >
          {description}
        </Text>
      )}
    </VStack>
  );
};
