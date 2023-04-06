import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AddPeople from "./AddPeople";

const Form = () => {
  return (
    <Stack
      spacing={10}
      justifyContent="center"
      align="center"
      width={{ base: "90%", md: "33.75rem" }}
      margin={{ base: "-10rem auto 3rem", xl: "-15rem 0 3rem 55%" }}
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
        <Text width="40%" fontSize="1.25rem">
          Pick a date
        </Text>
        <Flex gap="1rem" width="50%">
          <Input variant="flushed" pl="8px" placeholder="MM" />
          <Input variant="flushed" pl="8px" placeholder="DD" />
          <Input variant="flushed" pl="8px" placeholder="YYYY" />
        </Flex>
      </Flex>
      <Flex gap="1rem">
        <Text width="40%" fontSize="1.25rem">
          Pick a time
        </Text>
        <Flex gap="1rem" width="50%">
          <Input variant="flushed" pl="8px" placeholder="09" />
          <Input variant="flushed" pl="8px" placeholder="00" />
          <Select variant="flushed" textAlign="center">
            <option selected value="AM">
              AM
            </option>
            <option value="PM">PM</option>
          </Select>
        </Flex>
      </Flex>
      <AddPeople />
      <Button variant="solid">make reservation</Button>
    </Stack>
  );
};

export default Form;
