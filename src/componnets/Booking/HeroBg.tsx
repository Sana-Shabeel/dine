import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HeroBg = () => {
  return (
    <Box position="relative" height="600px" overflow="hidden">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="/assets/booking/hero-bg-desktop.jpg1440w,
        /assets/booking/hero-bg-desktop@2x.jpg 2880w"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/booking/hero-bg-tablet.jpg 768w,
        /assets/booking/hero-bg-tablet@2x.jpg 1536w"
        />
        <source
          srcSet="/assets/booking/hero-bg-mobile.jpg 375w,
            /assets/booking/hero-bg-mobile@2x.jpg 440w"
        />

        <Image src="/assets/booking/hero-bg-mobile@2x.jpg" alt="mobile" />
      </picture>
      <Flex
        width={{ base: "90%" }}
        flexDir="column"
        alignItems={{ base: "center", xl: "flex-start" }}
        gap="2rem"
        textAlign={{ base: "center", xl: "start" }}
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
      >
        <Image
          width={{ base: "5.125rem", md: "6.5rem", xl: "6.4375rem" }}
          pos={{ md: "absolute", xl: "relative" }}
          top="-70%"
          left="0"
          mb={{ xl: "4rem" }}
          src="/assets/logo.svg"
          alt="logo"
        />
        <Heading
          fontWeight="light"
          letterSpacing="-0.4px"
          fontSize={{ base: "2rem", md: "3rem", xl: "5rem" }}
        >
          Reservations
        </Heading>
        <Text fontSize={{ md: "1.25rem" }} width={{ md: "35.82rem" }}>
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroBg;
