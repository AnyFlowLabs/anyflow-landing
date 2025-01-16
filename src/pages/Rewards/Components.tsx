import { VStack, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";

export const TitleSection: FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <VStack>
      <Heading as="h2" textStyle="title" fontSize={{ base: "2xl", md: "3xl" }}>
        {title}
      </Heading>
      {description && (
        <Text fontSize="lg" color="gray.600">
          {description}
        </Text>
      )}
    </VStack>
  );
};
