import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentCardProps {
  imageSrc: string;
  flagSrc: string;
  country: string;
  city: string;
}

export function ContinentCard({
  imageSrc,
  flagSrc,
  country,
  city,
}: ContinentCardProps) {
  return (
    <Box w="64" mb={["5", "12"]}>
      <Image src={imageSrc} />
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p="18px 24px 25px 24px"
        borderWidth="0px 1px 1px 1px"
        borderColor="brand.900"
        borderRadius="0px 0px 4px 4px"
      >
        <Box>
          <Heading fontWeight="semibold" fontSize="xl" mb="3">
            {city}
          </Heading>
          <Text fontWeight="medium" fontSize="md" color="gray.300">
            {country}
          </Text>
        </Box>
        <Image src={flagSrc} w="30px" h="30px" borderRadius="50%" />
      </Flex>
    </Box>
  );
}
