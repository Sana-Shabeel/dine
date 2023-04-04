import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";

const OurOffers = () => {
  return (
    <Box>
      <Flex
        width={{ base: "90%" }}
        marginInline="auto"
        mt="25%"
        flexDir={{ base: "column", xl: "row" }}
      >
        <Box>
          <picture className="img-shadow">
            <source
              media="(min-width: 768px)"
              srcSet="/assets/homepage/family-gathering-tablet.jpg 573w,
              /assets/homepage/family-gathering-tablet@2x.jpg 1146w"
            />
            <source
              media="(min-width: 1440px)"
              srcSet="/assets/homepage/family-gathering-desktop.jpg 540w, 
              /assets/homepage/family-gathering-desktop@2x.jpg 1080w"
            />
            <Image
              src="/assets/homepage/family-gathering-mobile@2x.jpg"
              alt="family gathering"
            />
          </picture>
          <Image src="" alt="" />
        </Box>
        <Flex flexDir={{ base: "column-reverse" }} m="2rem 0">
          <Flex
            width={{ md: "28.56rem" }}
            m="1rem auto"
            flexDir="column"
            alignItems="center"
            textAlign="center"
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
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "0.9rem", md: "1.5rem" }}
            m="1.5rem 0"
          >
            <Box>
              <Text fontWeight="semibold" letterSpacing="2.5px">
                FAMILY GATHERING
              </Text>
              <Box bg="#9E7F66" w="2rem" h="1px" marginInline="auto" />
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
