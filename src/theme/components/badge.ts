import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const finished = defineStyle({
  bg: "success.500",
  color: "success.900",
});

const failed = defineStyle({
  bg: "danger.500",
  color: "danger.100",
});

const deploying = defineStyle({
  bg: "warning.500",
  color: "warning.100",
});

const glow = defineStyle({
  bg: "transparent",
  py: 0.5,
  px: 2.5,
  border: "solid 1px",
  borderRadius: "md",
  borderColor: "brand.500",
  boxShadow: "0 0 5px 0 #e63f66, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b",
  color: "brand.50",
  // color: "gray.50",
  fontSize: "sm",
  fontWeight: "300",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontFamily: "heading",
  textShadow: `0 0 4px #fff, 0 0 2px #b21e4b, 0 0 5px #e63f66, 0 0 10px #e63f66, 0 0 15px #b21e4b, 0 0 20px #b21e4b, 0 0 30px #b21e4b, 0 0 60px #b21e4b`,
});

export const badgeTheme = defineStyleConfig({
  variants: { finished, failed, deploying, glow },
});
