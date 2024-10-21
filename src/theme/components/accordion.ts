import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const custom = definePartsStyle({
  base: {
    border: "none",
  },
  container: {
    border: "none",
    bg: "white",
    _dark: {
      bg: "gray.700",
    },
  },
  root: {
    borderWidth: "1px",
    borderColor: "gray.100",
    _dark: {
      borderColor: "gray.600",
    },
    borderRadius: "4px",
    overflow: "hidden",
  },
  panel: {
    border: "none",
  },
  button: {
    borderWidth: 0,
    padding: 4,
    borderBottomWidth: 1,
    borderColor: "gray.100",
    _dark: {
      borderColor: "gray.500",
    },
  },
  icon: {
    border: "none",
    background: "gray.100",
    borderRadius: "full",
    color: "gray.500",
    _dark: {
      background: "gray.600",
      color: "gray.400",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { custom },
});
