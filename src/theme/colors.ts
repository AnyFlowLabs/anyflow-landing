import type { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    "50": "#fef2f4",
    "100": "#fee5e9",
    "200": "#fbd0d9",
    "300": "#f8a9ba",
    "400": "#f37995",
    "500": "#e83664",
    "600": "#d6285d",
    "700": "#b51b4e",
    "800": "#971a47",
    "900": "#821942",
  },
  gray: {
    50: "#fafafa",
    100: "#eef1f8",
    200: "#e3e7f3",
    300: "#a3abc1",
    400: "#3f4356",
    500: "#323940",
    600: "#2b2e3b",
    700: "#1c1e28",
    800: "#101017",
    900: "#000",
  },
  success: {
    "50": "#EDFDF6",
    "100": "#E0FBEF",
    "200": "#BCF6DD",
    "300": "#9CF2CD",
    "400": "#7DEDBD",
    "500": "#5BE9AB",
    "600": "#23E18F",
    "700": "#17AB6B",
    "800": "#0F7046",
    "900": "#083A25",
  },
  danger: {
    "50": "#fff6ef",
    "100": "#ffe9d9",
    "200": "#ffcfb0",
    "300": "#ffae7f",
    "400": "#fe783d",
    "500": "#fc632c",
    "600": "#f64216",
    "700": "#d7290a",
    "800": "#ab2111",
    "900": "#8a2012",
  },
  warning: {
    "50": "#fffce7",
    "100": "#fff9c1",
    "200": "#ffef86",
    "300": "#ffde41",
    "400": "#ffca0d",
    "500": "#e2a400",
    "600": "#d18600",
    "700": "#a65e02",
    "800": "#89490a",
    "900": "#743c0f",
  },
  info: {
    "50": "#EDFBFC",
    "100": "#DCF7F9",
    "200": "#BDF0F5",
    "300": "#9AE8EF",
    "400": "#77E0E9",
    "500": "#55D8E4",
    "600": "#22C9D8",
    "700": "#1A97A3",
    "800": "#11666E",
    "900": "#083135",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  ...overridenChakraColors,
  ...extendedColors,
};
