import { Flex, Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#000" color="#fff" padding="4rem 0">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start", xl: "center" }}
        justifyContent="center"
        gap={{ base: "2rem", xl: "15rem" }}
      >
        <Box>
          <Image
            width={{ base: "5.125rem", xl: "6.4375rem" }}
            marginBottom={{ xl: "15%" }}
            src="/assets/logo.svg"
            alt="logo"
          />
        </Box>
        <Flex flexDirection={{ base: "column", xl: "row" }} gap="2rem">
          <UnorderedList
            listStyleType="none"
            textAlign={{ base: "center", md: "start" }}
            letterSpacing="3px"
          >
            <ListItem>MARTHWAITE, SEDBERGH</ListItem>
            <ListItem padding="0.8rem 0">CUMBRIA</ListItem>
            <ListItem>+00 44 123 4567</ListItem>
          </UnorderedList>
          <UnorderedList
            listStyleType="none"
            textAlign={{ base: "center", md: "start" }}
            letterSpacing="3px"
          >
            <ListItem>OPEN TIMES</ListItem>
            <ListItem padding="0.8rem 0">
              MON - FRI: 09:00 AM - 10:00 PM
            </ListItem>
            <ListItem>SAT - SUN: 09:00 AM - 11:30 PM</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
