import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

import "@fontsource/red-hat-display";
import "@fontsource/geist-mono";
import "@fontsource/geist-sans";

const header = {
  height: "72px",
};

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
      body: {
        bg: "gray.800",
        _dark: {
          bg: "gray.700",
        },
      },
      "::-webkit-scrollbar": {
        width: "6px",
        bg: "rgba(0, 0, 0, .1)",
      },
      "::-webkit-scrollbar-track": {
        width: "8px",
        bg: "rgba(0, 0, 0, .2)",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "gray.500",
        _dark: {
          bg: "red",
        },
        borderRadius: "8px",
      },
      ".glow": {
        borderRadius: "lg",
        backgroundImage: "linear-gradient(43deg, brand.700 0%, brand.500 46%)",
        marginRight: "25px",
        filter: "brightness(120%)",
      },
      ".glow:before": {
        zIndex: -1,
        position: "absolute",
        content: '""',
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        backgroundColor: "gray.900",
        backgroundImage:
          "linear-gradient(43deg, #5Be9ab 0%, #5Be9ab 46%, #55d8e4 100%)",
        filter: "blur(60px)",
      },
      "@keyframes glow": {
        "0%": {
          boxShadow:
            "0 0 5px 0 #e63f66, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b",
        },
        "50%": {
          boxShadow:
            "0 0 10px 0 #e63f66, 0 0 20px 0 #b21e4b, 0 0 70px 0 #b21e4b",
        },
        "100%": {
          boxShadow:
            "0 0 5px 0 #e63f66, 0 0 10px 0 #b21e4b, 0 0 50px 0 #b21e4b",
        },
      },
      "@keyframes cursorMove": {
        "0%": {
          transform: "translate(50%, 50%) scale(1)",
          opacity: 1,
        },
        "50%": {
          transform: "translate(50%, 50%) scale(0.8)",
          opacity: 0.8,
        },
        "100%": {
          transform: "translate(50%, 50%) scale(1)",
          opacity: 1,
        },
      },
      "@keyframes progressBar": {
        "0%": { width: "0%" },
        "50%": { width: "100%" },
        "100%": { width: "0%" },
      },
      "@keyframes buttonPress": {
        "0%, 100%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(0.95)",
        },
      },
      "@keyframes cursorClick": {
        "0%, 100%": {
          transform: "translate(50%, 50%) rotate(-45deg)",
        },
        "50%": {
          transform: "translate(50%, 60%) rotate(-45deg)",
        },
      },

      "@keyframes fadeIn": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },

      "@keyframes fadeInOut": {
        "0%": { opacity: 0.6 },
        "50%": { opacity: 1 },
        "100%": { opacity: 0.6 },
      },

      "@keyframes spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },

      "@keyframes pulse": {
        "0%": { opacity: 0.6, transform: "scale(0.98)" },
        "50%": { opacity: 1, transform: "scale(1)" },
        "100%": { opacity: 0.6, transform: "scale(0.98)" },
      },
    },
  },
  fonts,
  colors,
  config,
  header,
  components,
  container: {
    xl: "1440px",
  },
  textStyles: {
    gradient: {
      bgGradient: "linear(to-br, success.500, info.500)",
      bgClip: "text",
    },
    section: {
      fontSize: "md",
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "brand.500",
    },
    title: {
      fontSize: { base: "4xl", md: "5xl" },
      color: "gray.50",
      fontWeight: "bold",
      lineHeight: "1.1",
      textAlign: "center",
    },
    subtitle: {
      color: "gray.300",
      fontSize: { base: "lg", md: "xl" },
      textAlign: "center",
    },
  },
  layerStyles: {
    section: {
      bgGradient:
        "linear(to-br, gray.800, transparent, transparent, transparent, transparent)",
      pt: 12,
      border: "solid 1px",
      borderColor: "gray.500",
      boxShadow: "2xl",
      borderRadius: 20,
      w: "full",
      p: { base: 8, md: 16 },
    },
    sectionDark: {
      bg: "gray.800",
      _dark: {
        bgGradient:
          "linear(to-br, gray.700, transparent, transparent, transparent, transparent)",
      },
      pt: 12,
      border: "solid 1px",
      borderColor: "gray.500",
      boxShadow: "2xl",
      borderRadius: 20,
      w: "full",
      p: { base: 8, md: 16 },
    },
    sectionBlack: {
      bg: "gray.900",
      _dark: {
        bgGradient:
          "linear(to-br, gray.700, transparent, transparent, transparent, transparent)",
      },
      pt: 12,
      border: "solid 1px",
      borderColor: "gray.500",
      boxShadow: "2xl",
      borderRadius: 20,
      w: "full",
      p: { base: 8, md: 16 },
    },
    sectionLight: {
      bg: "gray.700",
      _dark: {
        bg: "gray.700",
      },
      bgGradient:
        "linear(to-br, gray.800, transparent, transparent, transparent)",
      border: "solid 1px",
      borderColor: "gray.500",
      boxShadow: "2xl",
      borderRadius: 20,
      w: "full",
      p: { base: 8, md: 16 },
    },
  },
});

export default customTheme;
