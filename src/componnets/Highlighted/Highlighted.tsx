import { Box, Flex } from "@chakra-ui/react";
import data from "../../data/data.json";
import InfoSection from "../InfoSection";
import HighlightedMenu from "./HighlightedMenu";

interface Meal {
  title: string;
  description: string;
  src: {
    md: string;
    sm: string;
    default: string;
  };
  border: boolean;
}

const Highlighted = () => {
  return (
    <Box bg="#000" color="#fff" margin={{ base: "2rem 0 0", xl: "-2rem 0 0" }}>
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        width={{ base: "20.5rem", md: "36rem", xl: "69.4rem" }}
        alignItems={{ base: "center", xl: "flex-start" }}
        marginInline="auto"
        paddingTop={{ base: "3rem", xl: "10%" }}
        gap="3rem"
      >
        <Box mt={{ xl: "2rem" }}>
          <InfoSection
            header1="A few highlights from"
            header2="our menu"
            paragraph="We cater for all dietary requirements, but here’s a glimpse at some
                of our diner’s favourites. Our menu is revamped every season."
          />
        </Box>

        <Box>
          {data.map((meal: Meal, idx: number) => (
            <HighlightedMenu data={meal} key={idx} borderB={meal.border} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Highlighted;
