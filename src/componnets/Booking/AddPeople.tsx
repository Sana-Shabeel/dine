import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";

const AddPeople = () => {
  return (
    <Flex
      width="100%"
      borderBottom="1px solid lightgray"
      paddingInline="1rem"
      pb="0.7rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Image src="/assets/icons/icon-minus.svg" alt="icon minus" />
      </Box>
      <Box>
        <Input
          variant="unstyled"
          textAlign="center"
          fontSize="1.2rem"
          fontWeight="bold"
          defaultValue="4 people"
        />
      </Box>
      <Box>
        <Image src="/assets/icons/icon-plus.svg" alt="icon plus" />
      </Box>
    </Flex>
  );
};

export default AddPeople;
