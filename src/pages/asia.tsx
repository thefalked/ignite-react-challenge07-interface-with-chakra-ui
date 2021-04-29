import { Container, Flex, Heading } from "@chakra-ui/layout";

import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCard } from "../components/ContinentCard";
import { ContinentInfo } from "../components/ContinentInfo";

export default function Asia() {
  return (
    <>
      <ContinentBanner src="/assets/images/continentImage.png" name="Ásia" />
      <ContinentInfo country={40} languages={30} cities={50} plusCities={120}>
        A Ásia é o maior dos continentes, tanto em área como em população.
        Abrange um terço das partes sólidas da superfície da Terra e é
        responsável por abrigar quase três quintos da população mundial.
      </ContinentInfo>
      <Container maxW="container.xl">
        <Heading
          fontWeight="medium"
          fontSize={["2xl", "4xl"]}
          color="gray.600"
          mb={["5", "10"]}
        >
          Cidades +100
        </Heading>
        <Flex
          direction={["column", "row"]}
          justifyContent={["center", "space-between"]}
          flexWrap="wrap"
        >
          <ContinentCard
            imageSrc="/assets/images/cities/paris.png"
            flagSrc="/assets/images/cities/flagParis.png"
            country="França"
            city="Paris"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/london.png"
            flagSrc="/assets/images/cities/flagLondon.png"
            country="Reino Unido"
            city="Londres"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/roma.png"
            flagSrc="/assets/images/cities/flagRoma.png"
            country="Itália"
            city="Roma"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/amsterda.png"
            flagSrc="/assets/images/cities/flagAmsterda.png"
            country="Holanda"
            city="Amsterdã"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/praga.png"
            flagSrc="/assets/images/cities/flagPraga.png"
            country="República Tcheca"
            city="Praga"
          />
        </Flex>
      </Container>
    </>
  );
}
