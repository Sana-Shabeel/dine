import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LocallySourced = () => {
  return (
    <Box
      backgroundImage={{ md: "/assets/patterns/pattern-curve-top-left.svg" }}
      bgPos={{ md: "-220% bottom", lg: "100% center" }}
      bgRepeat="no-repeat"
    >
      <Flex
        width={{ base: "20.5rem", md: "36rem", xl: "100%" }}
        marginInline="auto"
        flexDir={{ base: "column-reverse", xl: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "2rem", xl: "12rem" }}
        mt={{ base: "2rem" }}
      >
        <Flex
          width={{ xl: "445px" }}
          flexDir={{ base: "column" }}
          justifyContent="center"
          alignItems={{ base: "center", xl: "flex-start" }}
          gap="1.5rem"
          textAlign="center"
        >
          <Image
            width="4.5rem"
            src="/assets/patterns/pattern-divide.svg"
            alt="pattern divide"
          />
          <Heading fontSize={{ base: "2rem", md: "3rem" }}>
            The most locally <br /> sourced food
          </Heading>
          <Text fontSize={{ md: "1.25rem" }}>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </Text>
        </Flex>

        <Box pos="relative">
          <picture className="img-shadow">
            <source
              media="(min-width: 1440px)"
              srcSet="/assets/homepage/locally-sourced-desktop.jpg 1440w,
                    /assets/homepage/locally-sourced-desktop@2x.jpg 2880w"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/homepage/locally-sourced-tablet.jpg 768w,
                    /assets/homepage/locally-sourced-tablet@2x.jpg 1536w"
            />
            <source
              srcSet="/assets/homepage/locally-sourced-mobile 375w,
                   /assets/homepage/locally-sourced-mobile@2x.jpg 440w "
            />
            <Image
              src="/assets/homepage/locally-sourced-mobile@2x.jpg"
              alt="mobile"
            />
          </picture>
          <Image
            display={{ base: "none", md: "unset" }}
            pos={{ md: "absolute" }}
            right="-15%"
            top={{ md: "70%", lg: "50%" }}
            width="9.5rem"
            src="/assets/patterns/pattern-lines.svg"
            alt="pattern lines"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LocallySourced;
