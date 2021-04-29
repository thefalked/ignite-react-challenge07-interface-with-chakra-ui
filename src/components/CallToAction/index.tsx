import { Box, Heading } from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Box mt="6" mb="52px">
      <Heading
        as="h2"
        textAlign="center"
        fontWeight="medium"
        fontSize={["xl", "4xl"]}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
    </Box>
  );
}
