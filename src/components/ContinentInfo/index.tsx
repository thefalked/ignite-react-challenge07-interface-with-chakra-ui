import { Container, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContinentInfoProps {
  country: Number;
  languages: Number;
  cities: Number;
  plusCities: Number;
  children: ReactNode;
}

export function ContinentInfo({
  country,
  languages,
  cities,
  plusCities,
  children,
}: ContinentInfoProps) {
  return (
    <Container maxW="container.xl" mt={["6", "20"]} mb={["8", "20"]}>
      <Flex direction={["column", "row"]}>
        <Text
          fontSize={["sm", "2xl"]}
          mr={["0", "35px"]}
          w={["100%", "50%"]}
          textAlign="justify"
        >
          {children}
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={["4", "0"]}
          ml={["0", "35px"]}
          w={["100%", "50%"]}
        >
          <Flex direction="column">
            <Text
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
              color="brand.900"
            >
              {country}
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              fontSize={["18px", "2xl"]}
              color="gray.600"
            >
              países
            </Text>
          </Flex>
          <Flex direction="column">
            <Text
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
              color="brand.900"
            >
              {languages}
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              fontSize={["18px", "2xl"]}
              color="gray.600"
            >
              línguas
            </Text>
          </Flex>
          <Flex direction="column">
            <Text
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
              color="brand.900"
            >
              {cities}
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              fontSize={["18px", "2xl"]}
              color="gray.600"
            >
              cidades +100
              <Tooltip
                hasArrow
                label={`+ de ${plusCities} cidades`}
                bg="gray.100"
                color="black"
              >
                <Image
                  src="/assets/images/info.png"
                  d="inline"
                  ml="5px"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
