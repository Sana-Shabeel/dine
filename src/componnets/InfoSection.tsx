import React from "react";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

interface Props {
  header1: string;
  header2: string;
  paragraph: string;
}

const InfoSection = ({ header1, header2, paragraph }: Props) => {
  return (
    <Box width={{ md: "28.5rem" }}>
      <Flex
        flexDir={{ base: "column" }}
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
        gap="1.5rem"
      >
        <Image
          width="4.5rem"
          src="/assets/patterns/pattern-divide.svg"
          alt="pattern divide"
        />
        <Heading
          fontFamily="inherit"
          textAlign={{ base: "center", xl: "start" }}
          fontSize={{ base: "2rem", md: "3rem" }}
          lineHeight={{ base: "2rem", md: "3rem" }}
          letterSpacing="-0.5px"
        >
          {header1} <br /> {header2}
        </Heading>
        <Text
          textAlign={{ base: "center", xl: "start" }}
          fontSize={{ md: "1.25rem" }}
        >
          {paragraph}
        </Text>
      </Flex>
    </Box>
  );
};

export default InfoSection;
