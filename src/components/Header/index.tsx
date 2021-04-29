import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Container, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

export default function Header() {
  const { asPath } = useRouter();

  return (
    <Container maxW="container.xl" h={["50px", "100px"]}>
      <Flex justifyContent="center" align="center" h="100%" pos="relative">
        {asPath !== "/" && (
          <Link href="/" passHref>
            <ChakraLink
              pos="absolute"
              left={0}
              d="flex"
              justifyContent="center"
              align="center"
            >
              <Image
                src="/assets/svgs/back-button.svg"
                alt="Voltar"
                h={["16px", "32px"]}
                w={["16px", "32px"]}
              />
            </ChakraLink>
          </Link>
        )}
        <Image src="/assets/svgs/logo.svg" alt="Logo" h={["20px", "45.92px"]} />
      </Flex>
    </Container>
  );
}
