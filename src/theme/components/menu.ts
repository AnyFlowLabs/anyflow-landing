import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    borderRadius: 6,
    p: 2,
    overflow: "hidden",
    borderColor: "gray.100",
    _dark: {
      borderColor: "gray.500",
    },
  },
  divider: {
    my: 2,
    mx: -2,
  },
  item: {
    py: 2,
    px: 4,
    borderRadius: 6,
    fontSize: "sm",
    _hover: {
      bg: "gray.50",
      _dark: {
        bg: "gray.800",
      },
    },
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
