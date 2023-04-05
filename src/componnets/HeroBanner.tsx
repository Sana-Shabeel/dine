import { Flex, Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const HeroBanner = () => {
  return (
    <Box height="100vh" bg="codgray">
      <Box>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/homepage/hero-bg-desktop.jpg 1440w,
            /assets/homepage/hero-bg-desktop@2x.jpg 2880w"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/homepage/hero-bg-tablet.jpg 768w"
          />
          <source
            srcSet="/assets/homepage/hero-bg-mobile.jpg 375w,
           /assets/homepage/hero-bg-mobile@2x.jpg 440w "
          />

          <Image
            src="/assets/homepage/hero-bg-mobile@2x.jpg"
            width="100vw"
            objectFit="cover"
            objectPosition="top"
            height={{ base: "30vh", md: "40vh", lg: "50vh", xl: "100vh" }}
            alt="mobile"
          />
        </picture>
      </Box>
      <Flex
        flexDir={{ base: "column" }}
        justifyContent={{ base: "center", xl: "flex-start" }}
        alignItems={{ base: "center", xl: "flex-start" }}
        marginLeft={{ xl: "10%" }}
        gap="2.5rem"
        pos={{ xl: "absolute" }}
        top="5%"
      >
        <Image
          width={{ base: "5.125rem", xl: "6.4375rem" }}
          marginBottom={{ xl: "15%" }}
          src="/assets/logo.svg"
          alt="logo"
        />
        <Flex
          flexDir="column"
          justifyContent={{ base: "center", xl: "flex-start" }}
          alignItems={{ base: "center", xl: "flex-start" }}
          gap="2.5rem"
        >
          <Heading
            fontWeight="300"
            fontSize={{ base: "3.1rem", md: "3.7rem", xl: "5rem" }}
            color="#ffffff"
            textAlign={{ base: "center", xl: "start" }}
            letterSpacing={{ base: "0.4px" }}
            fontFamily="inherit"
          >
            Exquisite dining <br /> since 1989
          </Heading>
          <Text
            color="#ffffff"
            textAlign={{ base: "center", xl: "start" }}
            fontSize={{ xl: "1.25rem" }}
            width={{ base: "327px", md: "573px", lg: "445px" }}
          >
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </Text>
          <Button variant="outline" color="#fff" padding="1.5rem 0">
            book a table
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroBanner;
