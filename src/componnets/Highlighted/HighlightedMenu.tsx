import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  borderB?: Boolean;
}

const HighlightedMenu = ({ borderB }: Props) => {
  return (
    <Flex
      width={{ base: "20.5rem", md: "35.82rem", xl: "33.75rem" }}
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      marginBottom={{ base: "1.5rem", md: "1rem" }}
      borderBottom={borderB ? "1px solid #333" : ""}
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
        <Box
          display={{ base: "none", md: "unset" }}
          mt="1rem"
          bg="#9E7F66"
          w="2rem"
          h="1px"
        />
      </Flex>
      <Box
        width={{ md: "23.94rem", xl: "33.75rem" }}
        textAlign={{ base: "center", md: "start" }}
        padding="2rem 0"
      >
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
