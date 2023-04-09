import { Box, Flex, Image } from "@chakra-ui/react";
import InfoSection from "./InfoSection";

const EnjoyablePlace = () => {
  return (
    <Box
      backgroundImage={{ md: "/assets/patterns/pattern-curve-top-right.svg" }}
      bgPos={{ md: "250% ", lg: "0 center" }}
      bgRepeat="no-repeat"
    >
      <Flex
        width={{ base: "20.5rem", md: "36rem", xl: "100%" }}
        marginInline="auto"
        flexDir={{ base: "column", xl: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "2rem", xl: "12rem" }}
        marginTop={{ base: "-5rem", md: "-2rem", lg: "-2rem" }}
      >
        <picture className="img-shadow">
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/homepage/enjoyable-place-desktop.jpg 1440w,
                /assets/homepage/enjoyable-place-desktop@2x.jpg 2880w"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/homepage/enjoyable-place-tablet.jpg 768w,
                /assets/homepage/enjoyable-place-tablet@2x.jpg 1536w"
          />
          <source
            srcSet="/assets/homepage/enjoyable-place-mobile 375w,
               /assets/homepage/enjoyable-place-mobile@2x.jpg 440w "
          />
          <Image
            src="/assets/homepage/enjoyable-place-mobile@2x.jpg"
            alt="mobile"
          />
        </picture>

        <InfoSection
          header1="Enjoyable place"
          header2="for all the family"
          paragraph="Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal."
        />
      </Flex>
    </Box>
  );
};

export default EnjoyablePlace;
