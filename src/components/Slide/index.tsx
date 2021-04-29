import Head from "next/head";
import {
  Container,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

export default function Slide() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head>
      <Container maxW="container.xl" pb="10" px={["0", "24"]}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            "--swiper-navigation-color": "#ffba08",
            "--swiper-pagination-color": "#ffba08",
          }}
        >
          <SwiperSlide>
            <Link href="/europa">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    Europa
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    O Velho Mundo
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/north-america">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    America do Norte
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    O Mais Potente
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/south-america">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    America do Sul
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    As Maiores Bacias Hidrográficas do Mundo
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/asia">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    Ásia
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    O Maior dos Continentes Terrestres
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/africa">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    África
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    Com o Maior Rio do Mundo
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/oceania">
              <ChakraLink>
                <img src="/assets/images/continentImage.png" alt="continent" />
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize={["2xl", "5xl"]}
                    color="gray.100"
                  >
                    Oceania
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "2xl"]}
                    color="gray.200"
                  >
                    O Novíssimo Mundo
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
