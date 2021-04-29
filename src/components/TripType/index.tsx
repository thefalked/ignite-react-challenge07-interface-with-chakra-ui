import { Image } from "@chakra-ui/image";
import { Center, Container, Divider, Flex, Text } from "@chakra-ui/layout";

export default function TripType() {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-evenly" flexWrap="wrap" my="4">
        <Flex mx="5" my="6" direction={["row", "column"]} align="center">
          <Image
            src="/assets/svgs/cocktail.svg"
            d={["none", "block"]}
            mr="2"
            mb="6"
            w="85px"
          />
          <Image src="/assets/svgs/ellipse.svg" d={["inline", "none"]} mr="2" />
          <Text fontSize={["18px", "2xl"]} fontWeight={["medium", "semibold"]}>
            vida noturna
          </Text>
        </Flex>
        <Flex mx="5" my="6" direction={["row", "column"]} align="center">
          <Image
            src="/assets/svgs/surf.svg"
            d={["none", "block"]}
            mr="2"
            w="85px"
            mb="6"
          />
          <Image src="/assets/svgs/ellipse.svg" d={["inline", "none"]} mr="2" />
          <Text fontSize={["18px", "2xl"]} fontWeight={["medium", "semibold"]}>
            praia
          </Text>
        </Flex>
        <Flex mx="5" my="6" direction={["row", "column"]} align="center">
          <Image
            src="/assets/svgs/building.svg"
            d={["none", "block"]}
            mr="2"
            mb="6"
            w="85px"
          />
          <Image src="/assets/svgs/ellipse.svg" d={["inline", "none"]} mr="2" />
          <Text fontSize={["18px", "2xl"]} fontWeight={["medium", "semibold"]}>
            moderno
          </Text>
        </Flex>
        <Flex mx="5" my="6" direction={["row", "column"]} align="center">
          <Image
            src="/assets/svgs/museum.svg"
            d={["none", "block"]}
            mr="2"
            mb="6"
            w="85px"
          />
          <Image src="/assets/svgs/ellipse.svg" d={["inline", "none"]} mr="2" />
          <Text fontSize={["18px", "2xl"]} fontWeight={["medium", "semibold"]}>
            clássico
          </Text>
        </Flex>
        <Flex mx="5" my="6" direction={["row", "column"]} align="center">
          <Image
            src="/assets/svgs/earth.svg"
            d={["none", "block"]}
            mr="2"
            mb="6"
            w="85px"
          />
          <Image src="/assets/svgs/ellipse.svg" d={["inline", "none"]} mr="2" />
          <Text fontSize={["18px", "2xl"]} fontWeight={["medium", "semibold"]}>
            e mais...
          </Text>
        </Flex>
      </Flex>
      <Center>
        <Divider orientation="horizontal" w="60px" bg="gray.600" />
      </Center>
    </Container>
  );
}
