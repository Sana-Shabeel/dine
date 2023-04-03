import { Flex, Box, Heading, Text, Image, Menu } from "@chakra-ui/react";
import React from "react";
import InfoSection from "../InfoSection";
import HighlightedMenu from "./HighlightedMenu";

const Highlighted = () => {
  return (
    <Box bg="#000" color="#fff">
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        width={{ base: "20.5rem", md: "36rem" }}
        alignItems={{ base: "center", xl: "flex-start" }}
        marginInline="auto"
        paddingTop="3rem"
        border="1px solid green"
      >
        <InfoSection
          header1="A few highlights from"
          header2="our menu"
          paragraph="We cater for all dietary requirements, but here’s a glimpse at some
              of our diner’s favourites. Our menu is revamped every season."
        />

        <HighlightedMenu />
      </Flex>
    </Box>
  );
};

export default Highlighted;
