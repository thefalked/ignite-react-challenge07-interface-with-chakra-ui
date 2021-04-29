import { Container, Flex, Heading } from "@chakra-ui/layout";

import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCard } from "../components/ContinentCard";
import { ContinentInfo } from "../components/ContinentInfo";

export default function Africa() {
  return (
    <>
      <ContinentBanner src="/assets/images/continentImage.png" name="África" />
      <ContinentInfo country={10} languages={20} cities={33} plusCities={60}>
        A África é o terceiro continente mais extenso com cerca de 30 milhões de
        quilômetros quadrados, cobrindo 20,3% da área total da terra firme do
        planeta. É o segundo continente mais populoso da Terra com cerca de um
        bilhão de pessoas, representando cerca de um sétimo da população
        mundial, e 54 países independentes.
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
            imageSrc="/assets/images/cities/praga.png"
            flagSrc="/assets/images/cities/flagPraga.png"
            country="República Tcheca"
            city="Praga"
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
        </Flex>
      </Container>
    </>
  );
}
