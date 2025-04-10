import { Badge, Flex } from "@chakra-ui/react";
import { LogoFull } from "./LogoFull";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <Flex
        role="button"
        as="a"
        align="center"
        justify="center"
        gap={2}
      >
        <>
          <LogoFull width={169} height={30} />
          <Badge bg="brand.600" color="white">
            BETA
          </Badge>
        </>
      </Flex>
    </Link>
  );
};
