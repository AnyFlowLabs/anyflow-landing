import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

export function Providers() {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
