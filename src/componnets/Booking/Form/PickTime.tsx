import { Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  name1: string;
  name2: string;
  name3: string;
  placeholder1: string;
  placeholder2: string;
  placeholder3: string;
  time: boolean;
  dateTimeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const PickTime = ({
  name1,
  name2,
  name3,
  placeholder1,
  placeholder2,
  placeholder3,
  time,
  dateTimeHandler,
}: Props) => {
  return (
    <Flex gap="1rem" flexDirection={{ base: "column", md: "row" }}>
      <Text width={{ base: "100%", md: "40%" }} fontSize="1.25rem">
        Pick a time
      </Text>
      <Flex gap="1rem" width={{ base: "100%", md: "50%" }}>
        <Input
          variant="flushed"
          name={name1}
          onChange={dateTimeHandler}
          pl="8px"
          placeholder={placeholder1}
          required
        />
        <Input
          variant="flushed"
          name={name2}
          onChange={dateTimeHandler}
          pl="8px"
          placeholder={placeholder2}
          required
        />
        {time ? (
          <Select
            variant="flushed"
            textAlign="center"
            name="time ampm"
            onChange={dateTimeHandler}
            defaultValue="AM"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Select>
        ) : (
          <Input
            variant="flushed"
            name={name3}
            onChange={dateTimeHandler}
            pl="8px"
            placeholder={placeholder3}
            required
          />
        )}
      </Flex>
    </Flex>
  );
};

export default PickTime;
