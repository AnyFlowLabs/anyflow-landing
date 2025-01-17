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
      <Heading
        as="h2"
        textStyle="title"
        fontSize={{ base: "2xl", md: "5xl" }}
        textAlign={forceAlignLeft ? "left" : "center"}
      >
        {title}
      </Heading>
      {description && (
        <Text
          fontSize="xl"
          color="gray.200"
          maxW={{ base: "full", md: "container.sm" }}
          textAlign={forceAlignLeft ? "left" : "center"}
        >
          {description}
        </Text>
      )}
    </VStack>
  );
};
