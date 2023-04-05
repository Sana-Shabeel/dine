import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";

interface Props {
  title: string;
  chosenOffer: {
    title: string;
    msg: string;
  };
  choseOffer: (offer: string) => void;
}

const OfferNavbar = ({ title, choseOffer, chosenOffer }: Props) => {
  let opacity = "0.4";
  let display = "none";
  if (title === chosenOffer.title) {
    opacity = "1";
    display = "block";
  }
  return (
    <Box
      pos="relative"
      onClick={() => {
        choseOffer(title);
      }}
    >
      <Text
        textTransform="uppercase"
        cursor="pointer"
        fontWeight="semibold"
        letterSpacing="2.5px"
        opacity={opacity}
        marginBottom={{ base: "8px", xl: "0" }}
      >
        {title}
      </Text>
      <Box
        display={display}
        pos={{ xl: "absolute" }}
        top="30%"
        left="-50%"
        zIndex="-99"
        bg="#9E7F66"
        w={{ base: "3rem", xl: "4rem" }}
        h={{ base: "1px", xl: "2px" }}
        marginInline="auto"
      />
    </Box>
  );
};

export default OfferNavbar;
