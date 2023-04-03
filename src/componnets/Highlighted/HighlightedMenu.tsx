import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

const HighlightedMenu = () => {
  return (
    <Flex
      width={{ base: "20.5rem", md: "573px", xl: "1110px" }}
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", xl: "flex-start" }}
      gap="10px"
      margin={{ base: " 3rem auto" }}
      border="1px solid green"
    >
      <Flex>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/assets/homepage/salmon-desktop-tablet.jpg 128w,
            /assets/homepage/salmon-desktop-tablet@2x.jpg 256w"
          />
          <source
            srcSet="/assets/homepage/salmon-mobile.jpg 327w,
            /assets/homepage/salmon-mobile@2x.jpg 654w"
          />
          <Image
            width={{ md: "128px" }}
            src="/assets/homepage/salmon-mobile.jpg"
            alt="mobile"
          />
        </picture>
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
