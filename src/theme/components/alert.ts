import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 4,
    "&[data-status=error]": {
      bg: "danger.500",
      borderColor: "danger.500",
    },
  },
});

export const alertTheme = defineMultiStyleConfig({ baseStyle });
