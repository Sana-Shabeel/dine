import { Flex, Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <Box height="30vh">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/homepage/hero-bg-desktop.jpg 1440w,
            /assets/homepage/hero-bg-desktop@2x.jpg 2880w"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/homepage/hero-bg-tablet.jpg 768w,
            /assets/homepage/hero-bg-tablet@2x.jpg 1536w"
          />
          <source
            srcSet="/assets/homepage/hero-bg-mobile.jpg 375w,
                          /assets/homepage/hero-bg-mobile@2x.jpg 440w "
          />

          <Image src="/assets/homepage/hero-bg-mobile@2x.jpg" alt="mobile" />
        </picture>
      </Box>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="2rem"
        gap="2.5rem"
        height="70vh"
        bg="codgray"
        padding={{ base: "0", md: "3rem" }}
      >
        <Image width="82px" height="2rem" src="/assets/logo.svg" alt="logo" />
        <Heading
          fontWeight="300"
          fontSize={{ base: "2rem" }}
          color="#ffffff"
          textAlign="center"
          letterSpacing={{ base: "0.4px" }}
        >
          Exquisite dining <br /> since 1989
        </Heading>
        <Text
          color="#ffffff"
          textAlign="center"
          width={{ base: "327px", md: "573px", lg: "445px" }}
        >
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </Text>
        <Button variant="outline" color="#fff" padding="1.5rem 0">
          book a table
        </Button>
      </Flex>
    </>
  );
};

export default HeroBanner;

// bgImg={{
//   // base: "/assets/homepage/hero-bg-mobile@2x.jpg",
//   md: "/assets/homepage/hero-bg-tablet.jpg",
//   lg: "/assets/homepage/hero-bg-desktop.jpg",
//   xl: "/assets/homepage/hero-bg-desktop@2x.jpg",
// }}
// bgRepeat="no-repeat"
// bgPos="top"
// bgSize="cover"
