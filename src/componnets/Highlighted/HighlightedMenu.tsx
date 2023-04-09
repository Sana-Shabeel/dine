import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
interface Meal {
  title: string;
  description: string;
  src: {
    md: string;
    sm: string;
    default: string;
  };
}
interface Props {
  borderB: Boolean;
  data: Meal;
}

const HighlightedMenu = ({ borderB, data }: Props) => {
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
          <source media="(min-width: 768px)" srcSet={data.src.md} />
          <source srcSet={data.src.sm} />
          <Image width={{ md: "128px" }} src={data.src.default} alt="mobile" />
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
          {data.title}
        </Heading>
        <Text>{data.description}</Text>
      </Box>
    </Flex>
  );
};

export default HighlightedMenu;
