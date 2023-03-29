import React from "react";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

interface Props {
  header1: string;
  header2: string;
  paragraph: string;
}

const InfoSection = ({ header1, header2, paragraph }: Props) => {
  return (
    <Flex
      width={{ xl: "445px" }}
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
        textAlign={{ base: "center", xl: "start" }}
        fontSize={{ base: "2rem", md: "3rem" }}
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
  );
};

export default InfoSection;
