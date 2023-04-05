import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";

const OurOffers = () => {
  return (
    <Box
      backgroundImage={{ md: "/assets/patterns/pattern-curve-top-right.svg" }}
      bgPos={{ md: "250% top", lg: "-50% top" }}
      bgRepeat="no-repeat"
    >
      <Flex
        width={{ base: "90%", xl: "80%" }}
        marginInline="auto"
        flexDir={{ base: "column", xl: "row" }}
        gap="4rem"
      >
        <Box mt="10%">
          <picture className="img-shadow">
            <source
              media="(min-width: 1440px)"
              srcSet="/assets/homepage/family-gathering-desktop.jpg, 
              /assets/homepage/family-gathering-desktop@2x.jpg.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/homepage/family-gathering-tablet.jpg 573w,
              /assets/homepage/family-gathering-tablet@2x.jpg 1146w"
            />
            <Image
              src="/assets/homepage/family-gathering-mobile@2x.jpg"
              alt="family gathering"
            />
          </picture>
          <Image src="" alt="" />
        </Box>

        <Flex
          flexDir={{ base: "column-reverse", xl: "column" }}
          alignItems={{ xl: "flex-start" }}
          justifyContent={{ xl: "flex-end" }}
          gap={{ xl: "2rem" }}
          m="2rem 0"
          // border="1px solid red"
        >
          <Flex
            width={{ md: "28.56rem" }}
            m="1rem auto"
            flexDir="column"
            alignItems={{ base: "center", xl: "flex-start" }}
            textAlign={{ base: "center", xl: "start" }}
            gap="1rem"
          >
            <Heading>Family Gathering</Heading>
            <Text>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </Text>
            <Button m="1rem 0" variant="solid">
              BOOK A TABLE
            </Button>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row", xl: "column" }}
            alignItems={{ base: "center", xl: "flex-start" }}
            justifyContent={{ base: "center" }}
            gap={{ base: "0.9rem", md: "1.5rem" }}
            m="1.5rem 0"
          >
            <Box pos="relative">
              <Text fontWeight="semibold" letterSpacing="2.5px">
                FAMILY GATHERING
              </Text>
              <Box
                pos={{ xl: "absolute" }}
                top="30%"
                left="-37%"
                bg="#9E7F66"
                w={{ base: "2rem", xl: "3.2rem" }}
                h={{ base: "1px", xl: "2px" }}
                marginInline="auto"
              />
            </Box>
            <Box>
              <Text fontWeight="semibold" opacity="0.4" letterSpacing="2.5px">
                SPECIAL EVENTS
              </Text>
            </Box>
            <Box>
              <Text fontWeight="semibold" opacity="0.4" letterSpacing="2.5px">
                SOCIAL EVENTS
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurOffers;
