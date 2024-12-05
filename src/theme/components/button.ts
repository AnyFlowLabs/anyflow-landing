import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    borderRadius: "md",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 3,
      py: 2,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 8,
      py: 6,
    },
    xl: {
      fontSize: "xl",
      px: { base: 8, md: 16 },
      py: { base: 4, md: 6 },
    },
  },
  variants: {
    navbar: (props) => ({
      color: mode("gray.900", "gray.100")(props),
      px: 4,
      bg: "inherit",
      _hover: {
        color: mode("gray.900", "gray.100")(props),
        bg: mode("gray.100", "gray.800")(props),
      },
    }),
    ghost: (props) => ({
      color: mode("gray.900", "gray.50")(props),
      bg: mode("gray.50", "gray.700")(props),
      _hover: {
        color: mode("gray.50", "gray.900")(props),
        bg: mode("gray.900", "gray.50")(props),
      },
    }),
    icon: (props) => ({
      color: mode("brand.50", "brand.50")(props),
      bg: "brand.500",
      rounded: "full",
      h: "44px",
      w: "44px",
      p: 0,
      _hover: {
        color: mode("brand.50", "brand.900")(props),
        bg: mode("brand.900", "brand.50")(props),
      },
    }),
    outline: (props) => ({
      border: "2px solid",
      borderColor: mode("gray.900", "gray.50")(props),
      color: mode("gray.900", "gray.50")(props),
      bg: "transparent",
      _hover: {
        color: mode("gray.50", "gray.900")(props),
        bg: mode("gray.900", "gray.50")(props),
      },
    }),
    solid: {
      bg: "brand.500",
      color: "brand.50",
      _hover: {
        bg: "brand.600",
      },
    },
    gradient: {
      bgGradient: "linear(to-r, brand.500, brand.700)",
      color: "brand.50",
      _hover: {
        bgGradient: "linear(to-r, brand.500, brand.800)",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "ghost",
  },
});

export { buttonTheme };
