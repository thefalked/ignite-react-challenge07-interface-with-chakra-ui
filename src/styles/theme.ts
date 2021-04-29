import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      "900": "#FFBA08",
    },
    gray: {
      "900": "#000000",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#47585B",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#999999",
      "200": "#DADADA",
      "100": "#F5F8FA",
      "50": "#FFFFFF",
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.600",
      }
    }
  },
});
