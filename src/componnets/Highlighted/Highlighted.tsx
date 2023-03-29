import { Flex, Box, Heading, Text, Image, Menu } from "@chakra-ui/react";
import React from "react";
import HighlightedMenu from "./HighlightedMenu";

const Highlighted = () => {
  return (
    <Box bg="#000" color="#fff">
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        // width={{ base: "20.5rem", md: "36rem" }}
      >
        <Flex
          width={{ base: "20.5rem", md: "27.8rem" }}
          flexDir={{ base: "column", xl: "row" }}
          justifyContent="center"
          alignItems={{ base: "center", xl: "flex-start" }}
          textAlign="center"
          gap="1.5rem"
          m="4rem auto"
        >
          <Image
            width="4.5rem"
            src="/assets/patterns/pattern-divide.svg"
            alt="pattern divide"
          />
          <Heading fontSize={{ base: "2rem", md: "3rem" }}>
            A few highlights from <br /> our menu
          </Heading>
          <Text fontSize={{ md: "1.25rem" }}>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </Text>
        </Flex>
        <Flex>
          <HighlightedMenu />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Highlighted;
