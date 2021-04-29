import { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh">
        <Header />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
