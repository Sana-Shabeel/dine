import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  increment: number;
  setIncrement: (value: number) => void;
}

const AddPeople = ({ increment, setIncrement }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const incrementHandler = () => {
    setIncrement(increment + 1);
    setClicked(false);
  };
  const decrementtHandler = () => {
    setIncrement(increment - 1);
    setClicked(false);
  };
  const changeHandler = () => {
    setClicked(true);
  };
  return (
    <Flex
      width="100%"
      borderBottom="1px solid lightgray"
      paddingInline="1rem"
      pb="0.7rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box cursor="pointer" onClick={() => decrementtHandler()}>
        <Image src="/assets/icons/icon-minus.svg" alt="icon minus" />
      </Box>
      <Box>
        {clicked ? (
          <Input
            variant="unstyled"
            textAlign="center"
            fontSize="1.2rem"
            fontWeight="bold"
            defaultValue={increment}
            onChange={(e) => setIncrement(Number(e.target.value))}
          />
        ) : (
          <Text fontSize="1.2rem" fontWeight="bold" onClick={changeHandler}>
            {increment == 0 ? "0 people" : `${increment} people`}
          </Text>
        )}
      </Box>
      <Box cursor="pointer" onClick={() => incrementHandler()}>
        <Image src="/assets/icons/icon-plus.svg" alt="icon plus" />
      </Box>
    </Flex>
  );
};

export default AddPeople;
