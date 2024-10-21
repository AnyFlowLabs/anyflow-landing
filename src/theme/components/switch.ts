import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    transition: "all 500ms ease",
  },
  thumb: {
    bg: "brand.500",
    _dark: {
      _checked: {
        bg: "white",
      },
    },
    _checked: {
        bg: "white"
    }
  },
  track: {
    bg: "gray.100",
    transition: "all 250ms ease-in",
    _checked: {
      bg: "brand.500",
    },
    _dark: {
      bg: "gray.700",
      _checked: {
        bg: "brand.500",
      },
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
