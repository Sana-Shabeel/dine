import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <Box pos="relative" mt="4rem">
      <picture className="img-shadow">
        <source
          media="(min-width: 1440px)"
          srcSet="assets/homepage/ready-bg-desktop.jpg 1440w,
          assets/homepage/ready-bg-desktop@2x.jpg 2880w"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/homepage/ready-bg-tablet.jpg 768w,
          /assets/homepage/ready-bg-tablet@2x.jpg 1146w"
        />
        <source
          srcSet="/assets/homepage/ready-bg-mobile.jpg 375w,
          /assets/homepage/ready-bg-mobile@2x.jpg 440w "
        />
        <Image src="assets/homepage/ready-bg-mobile@2x.jpg" alt="mobile" />
      </picture>
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        justifyContent={{ base: "2rem", xl: "space-between" }}
        alignItems="center"
        gap="2rem"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        textAlign="center"
        width={{ base: "90%" }}
      >
        <Heading>Ready to make a reservation?</Heading>
        <Link href="/booking">
          <Button variant="outline" color="#fff">
            Book a table
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Ready;
