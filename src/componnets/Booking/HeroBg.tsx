import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const HeroBg = () => {
  return (
    <Box
      backgroundImage={{
        base: "/assets/booking/hero-bg-mobile.jpg",
        md: "/assets/booking/hero-bg-tablet.jpg ",
        lg: "/assets/booking/hero-bg-tablet@2x.jpg",
        xl: "/assets/booking/hero-bg-desktop@2x.jpg ",
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
      backgroundSize="cover"
      height="600px"
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        alignItems={{ base: "center", xl: "flex-start" }}
        gap="2rem"
        width={{ base: "90%" }}
        margin={{ base: "4rem auto", xl: "8rem auto" }}
        textAlign={{ base: "center", xl: "start" }}
        color="white"
      >
        <Link href="/">
          <Image
            width={{ base: "5.125rem", md: "6.5rem", xl: "6.4375rem" }}
            mb={{ xl: "4rem" }}
            src="/assets/logo.svg"
            alt="logo"
          />
        </Link>
        <Heading
          fontWeight="light"
          letterSpacing="-0.4px"
          fontSize={{ base: "2rem", md: "3rem", xl: "5rem" }}
        >
          Reservations
        </Heading>
        <Text fontSize={{ md: "1.25rem" }} width={{ md: "35.82rem" }}>
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroBg;
