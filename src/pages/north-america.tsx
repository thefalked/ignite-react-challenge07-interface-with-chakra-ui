import { Container, Flex, Heading } from "@chakra-ui/layout";

import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCard } from "../components/ContinentCard";
import { ContinentInfo } from "../components/ContinentInfo";

export default function NorthAmerica() {
  return (
    <>
      <ContinentBanner
        src="/assets/images/continentImage.png"
        name="América do Norte"
      />
      <ContinentInfo country={60} languages={30} cities={50} plusCities={120}>
        A América do Norte é um subcontinente que compreende a porção
        setentrional do continente americano.
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
          alignItems="center"
          justifyContent={["center", "space-between"]}
          flexWrap="wrap"
        >
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
          <ContinentCard
            imageSrc="/assets/images/cities/amsterda.png"
            flagSrc="/assets/images/cities/flagAmsterda.png"
            country="Holanda"
            city="Amsterdã"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/london.png"
            flagSrc="/assets/images/cities/flagLondon.png"
            country="Reino Unido"
            city="Londres"
          />
          <ContinentCard
            imageSrc="/assets/images/cities/paris.png"
            flagSrc="/assets/images/cities/flagParis.png"
            country="França"
            city="Paris"
          />
        </Flex>
      </Container>
    </>
  );
}
