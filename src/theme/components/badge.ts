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

export const badgeTheme = defineStyleConfig({
  variants: { finished, failed, deploying },
});
