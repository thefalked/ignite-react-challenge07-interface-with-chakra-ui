import { Container, Flex, Heading } from "@chakra-ui/layout";

import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCard } from "../components/ContinentCard";
import { ContinentInfo } from "../components/ContinentInfo";

export default function Oceania() {
  return (
    <>
      <ContinentBanner src="/assets/images/continentImage.png" name="Oceania" />
      <ContinentInfo country={30} languages={50} cities={37} plusCities={60}>
        Oceania ou Oceânia é uma região geográfica composta por vários grupos de
        ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo
        explorador francês Dumont d'Urville.
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
            imageSrc="/assets/images/cities/london.png"
            flagSrc="/assets/images/cities/flagLondon.png"
            country="Reino Unido"
            city="Londres"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/amsterda.png"
            flagSrc="/assets/images/cities/flagAmsterda.png"
            country="Holanda"
            city="Amsterdã"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/paris.png"
            flagSrc="/assets/images/cities/flagParis.png"
            country="França"
            city="Paris"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/roma.png"
            flagSrc="/assets/images/cities/flagRoma.png"
            country="Itália"
            city="Roma"
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
