import React, { useState } from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import OfferNavbar from "./OfferNavbar";
import Link from "next/link";

interface Offer {
  title: string;
  msg: string;
  src: {
    xl: string;
    md: string;
    default: string;
  };
}

const offers: Offer[] = [
  {
    title: "Family Gathering",
    msg: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    src: {
      xl: "/assets/homepage/family-gathering-desktop.jpg,  /assets/homepage/family-gathering-desktop@2x.jpg.jpg",
      md: "/assets/homepage/family-gathering-tablet.jpg 573w, /assets/homepage/family-gathering-tablet@2x.jpg 1146w",
      default: "/assets/homepage/family-gathering-mobile@2x.jpg",
    },
  },
  {
    title: "Special Events",
    msg: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    src: {
      xl: "/assets/homepage/special-events-desktop.jpg,  /assets/homepage/special-events-desktop@2x.jpg.jpg",
      md: "/assets/homepage/special-events-tablet.jpg 573w, /assets/homepage/special-events-tablet@2x.jpg 1146w",
      default: "/assets/homepage/special-events-mobile@2x.jpg",
    },
  },
  {
    title: "Social Events",
    msg: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    src: {
      xl: "/assets/homepage/social-events-desktop.jpg,  /assets/homepage/social-events-desktop@2x.jpg.jpg",
      md: "/assets/homepage/social-events-tablet.jpg 573w, /assets/homepage/social-events-tablet@2x.jpg 1146w",
      default: "/assets/homepage/social-events-mobile@2x.jpg",
    },
  },
];

const OurOffers = () => {
  const [chosenOffer, setChosenOffer] = useState<Offer>(offers[0]);

  const choseOffer = (offer: string) => {
    const selected = offers.filter((x) => x.title === offer);
    setChosenOffer(selected[0]);
  };

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
        gap={{ base: "3px", xl: "4rem" }}
      >
        <Box mt="10%" pos="relative">
          <picture className="img-shadow">
            <source media="(min-width: 1440px)" srcSet={chosenOffer.src.xl} />
            <source media="(min-width: 768px)" srcSet={chosenOffer.src.md} />
            <Image src={chosenOffer.src.default} alt="family gathering" />
          </picture>
          <Image
            display={{ base: "none", md: "unset" }}
            pos={{ md: "absolute" }}
            left="-5%"
            top="-10%"
            width="9.5rem"
            src="/assets/patterns/pattern-lines.svg"
            alt="pattern lines"
          />
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
            {
              <>
                <Heading>{chosenOffer.title}</Heading>
                <Text>{chosenOffer.msg}</Text>
              </>
            }
            <Link href="/booking">
              <Button m="1rem 0" variant="solid">
                BOOK A TABLE
              </Button>
            </Link>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row", xl: "column" }}
            alignItems={{ base: "center", xl: "flex-start" }}
            justifyContent={{ base: "center" }}
            gap={{ base: "0.9rem", md: "1.5rem" }}
            m="1.5rem 0"
          >
            {["Family Gathering", "Special Events", "Social Events"].map(
              (offer, idx) => (
                <OfferNavbar
                  choseOffer={choseOffer}
                  title={offer}
                  chosenOffer={chosenOffer}
                  key={idx}
                />
              )
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurOffers;
