import { Badge, Flex } from "@chakra-ui/react";
import { LogoFull } from "./LogoFull";

export const Logo = () => {
  return (
    <Flex
      role="button"
      as="a"
      href="/"
      align="center"
      justify="center"
      gap={2}
    >
      <>
        <LogoFull width={169} height={30} />
        <Badge bg="brand.500" color="brand.50">
          BETA
        </Badge>
      </>
    </Flex>
  );
};
