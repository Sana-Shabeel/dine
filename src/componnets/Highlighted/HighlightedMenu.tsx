import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

const HighlightedMenu = () => {
  return (
    <Flex
      width={{ base: "20.5rem", md: "36rem" }}
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", xl: "flex-start" }}
      gap="10px"
      marginInline="auto"
    >
      <Flex>
        <Box width={{ base: "" }}>
          <source
            media="(min-width: 768px)"
            srcSet="/assets/homepage/salmon-desktop-tablet.jpg 128w,
            /assets/homepage/salmon-desktop-tablet@2x.jpg 256w"
          />
          <source
            srcSet="/assets/homepage/salmon-mobile.jpg 327w,
            /assets/homepage/salmon-mobile@2x.jpg 654w"
          />
          <Image src="/assets/homepage/salmon-mobile.jpg" alt="mobile" />
        </Box>
      </Flex>
      <Box textAlign="center" padding="2rem 0">
        <Heading mb="0.9rem" fontSize="1.25rem">
          Seared Salmon Fillet
        </Heading>
        <Text>
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </Text>
      </Box>
    </Flex>
  );
};

export default HighlightedMenu;
