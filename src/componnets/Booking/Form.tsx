import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddPeople from "./AddPeople";

const Form = () => {
  const [addPeople, setAddPeople] = useState<number>(0);

  return (
    <Box
      border="2px solid transparent"
      backgroundImage={{
        xl: "/assets/patterns/pattern-curve-bottom-right.svg",
      }}
      backgroundRepeat="no-repeat"
    >
      <Image
        display={{ base: "none", xl: "unset" }}
        pos={{ xl: "absolute" }}
        left="50%"
        top="70%"
        zIndex="-99"
        width="9.5rem"
        src="/assets/patterns/pattern-lines.svg"
        alt="pattern lines"
      />
      <Stack
        spacing={10}
        justifyContent="center"
        align="center"
        width={{ base: "90%", md: "33.75rem" }}
        margin={{ base: "-10rem auto 3rem", xl: "-15rem 0 2rem 55%" }}
        padding={{ base: "2rem 1.5rem", md: "3rem 2.5rem" }}
        boxShadow="1px 8px 20px -2px #919191"
        bg="#fff"
      >
        <Input variant="flushed" pl="8px" placeholder="Name" />
        <Input variant="flushed" pl="8px" placeholder="Email" />
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ md: "center" }}
          gap="1rem"
        >
          <Text width={{ base: "100%", md: "40%" }} fontSize="1.25rem">
            Pick a date
          </Text>
          <Flex gap="1rem" width={{ base: "100%", md: "50%" }}>
            <Input variant="flushed" pl="8px" placeholder="MM" />
            <Input variant="flushed" pl="8px" placeholder="DD" />
            <Input variant="flushed" pl="8px" placeholder="YYYY" />
          </Flex>
        </Flex>
        <Flex gap="1rem" flexDirection={{ base: "column", md: "row" }}>
          <Text width={{ base: "100%", md: "40%" }} fontSize="1.25rem">
            Pick a time
          </Text>
          <Flex gap="1rem" width={{ base: "100%", md: "50%" }}>
            <Input variant="flushed" pl="8px" placeholder="09" />
            <Input variant="flushed" pl="8px" placeholder="00" />
            <Select variant="flushed" textAlign="center" defaultValue="AM">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </Select>
          </Flex>
        </Flex>
        <AddPeople setIncrement={setAddPeople} increment={addPeople} />
        <Button variant="solid">make reservation</Button>
      </Stack>
    </Box>
  );
};

export default Form;
