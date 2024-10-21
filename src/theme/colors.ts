import type { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    "50": "#fef2f4",
    "100": "#fde6e9",
    "200": "#fbd0d9",
    "300": "#f7aab9",
    "400": "#f27a93",
    "500": "#e63f66",
    "600": "#d42a5b",
    "700": "#b21e4b",
    "800": "#951c45",
    "900": "#801b40",
  },
  gray: {
    50: "#fafafa",
    100: "#CDD0DA",
    200: "#9CA0B5",
    300: "#6B718F",
    400: "#464A5E",
    500: "#20222B",
    600: "#1A1C23",
    700: "#14151A",
    800: "#0D0E12",
    900: "#020203",
  },
  success: {
    "50": "#f1fdfd",
    "100": "#d9fcfc",
    "200": "#b9f6f7",
    "300": "#8aecf0",
    "400": "#42d7e0",
    "500": "#19d6e5",
    "600": "#19acc0",
    "700": "#1d8a9b",
    "800": "#236f7e",
    "900": "#225c6b",
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
    "50": "#f1f4fb",
    "100": "#e2e9f7",
    "200": "#c0d0ec",
    "300": "#88a9dd",
    "400": "#477cc9",
    "500": "#325e9f",
    "600": "#264c8b",
    "700": "#1f3a6c",
    "800": "#1c335a",
    "900": "#1b2d4d",
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
