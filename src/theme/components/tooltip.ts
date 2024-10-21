import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  borderRadius: 4,
  py: 1,
  px: 3,
  fontWeight: "normal",
  border: "none",
  bg: "white",
  color: "gray.900",
  _dark: {
    color: "gray.50",
    bg: "black",
  },
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
