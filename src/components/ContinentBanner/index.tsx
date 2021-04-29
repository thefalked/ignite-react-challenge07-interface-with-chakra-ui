import { Box, Container, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  src: string;
  name: string;
}

export function ContinentBanner({ src, name }: ContinentBannerProps) {
  return (
    <Box pos="relative">
      <Image src={src} w="100%" h={["150px", "500px"]} />
      <Container
        maxW="container.xl"
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        d="flex"
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-end"]}
      >
        <Text
          fontWeight="semibold"
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          mb={["0", "59px"]}
        >
          {name}
        </Text>
      </Container>
    </Box>
  );
}
