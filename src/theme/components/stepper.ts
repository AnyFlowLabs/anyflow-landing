import { stepperAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(stepperAnatomy.keys);

const baseStyle = definePartsStyle({
  step: {
    opacity: 0.5,
    "&[data-status=active],&[data-status=complete]": {
      opacity: 1,
    },
  },
  title: {
    fontSize: "medium",
    textTransform: "uppercase",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  description: {
    fontSize: "xx-small",
    textTransform: "uppercase",
    letterSpacing: "0.05rem",
  },
  indicator: {
    borderRadius: "sm",
    opacity: 0.5,
    "&[data-status=active],&[data-status=complete]": {
      opacity: 1,
      bg: "brand.500",
      borderColor: "brand.500",
    },
  },
});

export const stepperTheme = defineMultiStyleConfig({ baseStyle });
