import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";

export default function Banner() {
  return (
    <Box pos="relative">
      <Image
        src="/assets/images/background.png"
        alt="Background image"
        w="100%"
        h={[163, 335]}
        objectFit="cover"
      />
      <Container
        maxW="container.xl"
        px={["4", "24"]}
        pos="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        d="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Flex
          justifyContent="center"
          h="100%"
          direction="column"
          maxW={["100%", "45%"]}
        >
          <Heading
            as="h1"
            fontSize={["xl", "4xl"]}
            fontWeight="medium"
            color="gray.100"
            mb={["2", "5"]}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text color="gray.200" fontSize={["14px", "xl"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Flex>
        <Box d={["none", "block"]}>
          <Image
            src="/assets/svgs/airplane.svg"
            alt="airplane"
            h="270.74px"
            sx={{ transform: "rotate(3deg) translateY(12%)" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
