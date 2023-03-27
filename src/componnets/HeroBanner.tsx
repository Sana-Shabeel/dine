import { Flex, Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import { League_Spartan } from "next/font/google";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        height="100vh"
        overflow="hidden"
      >
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
        flexDir={{ base: "column" }}
        justifyContent={{ base: "center", xl: "flex-start" }}
        alignItems={{ base: "center", xl: "flex-start" }}
        marginLeft={{ xl: "10%" }}
        gap="2.5rem"
        paddingTop={{
          base: "15rem",
          md: "25rem",
          lg: "28rem",
          xl: "17rem",
        }}
        paddingBottom={{ "2xl": "8rem" }}
      >
        <Image
          position={{ xl: "absolute" }}
          top="8%"
          left="11%"
          width={{ base: "5.125rem", xl: "6.4375rem" }}
          height={{ base: "2rem", xl: "2.5rem" }}
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
    </>
  );
};

export default HeroBanner;
