import { Box, Button, Flex, Input, Select, Stack } from "@chakra-ui/react";
import React from "react";

const Form = () => {
  return (
    <Stack
      spacing={10}
      justifyContent="center"
      align="center"
      width={{ base: "90%" }}
      margin={{ base: "-10rem auto 3rem" }}
      padding="2rem 1.5rem"
      boxShadow="1px 8px 20px -2px #919191"
      bg="#fff"
    >
      <Input variant="flushed" pl="8px" placeholder="Name" />
      <Input variant="flushed" pl="8px" placeholder="Email" />

      <Box>
        Pick a date
        <Flex gap="1rem">
          <Input variant="flushed" pl="8px" placeholder="MM" />
          <Input variant="flushed" pl="8px" placeholder="DD" />
          <Input variant="flushed" pl="8px" placeholder="YYYY" />
        </Flex>
      </Box>
      <Box>
        Pick a date
        <Flex gap="1rem">
          <Input variant="flushed" pl="8px" placeholder="09" />
          <Input variant="flushed" pl="8px" placeholder="00" />
          <Select variant="flushed" textAlign="center">
            <option selected value="AM">
              AM
            </option>
            <option value="PM">PM</option>
          </Select>
        </Flex>
      </Box>
      <Button variant="solid">make reservation</Button>
    </Stack>
  );
};

export default Form;
