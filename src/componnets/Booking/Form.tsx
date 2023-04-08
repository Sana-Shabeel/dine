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
  const [date, setDate] = useState({
    mm: "",
    dd: "",
    yyyy: "",
  });
  const [time, setTime] = useState({
    hr: "",
    min: "",
    ammp: "",
  });
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: addPeople,
  });

  const nameEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setBookingData({
      ...bookingData,
      [e.target.name]: value,
    });
  };

  // takes the date value from 3 different input elements
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // turn date obj into a string
    setDate({ ...date, [e.target.name]: e.target.value });

    const dateStr = Object.values(date).join("-");

    setBookingData({
      ...bookingData,
      date: dateStr,
    });
  };

  // takes the date value from 2 different input elements
  const timeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // turn date obj into a string
    setTime({ ...time, [e.target.name]: e.target.value });

    const timeStr = Object.values(time).join(":");

    setBookingData({
      ...bookingData,
      time: timeStr,
    });
  };

  const onSubmitHandler = () => {
    console.log(bookingData);
  };

  console.log(time);
  console.log(Object.values(time).join(":"));

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
        <Input
          variant="flushed"
          pl="8px"
          onChange={nameEmailHandler}
          name="name"
          placeholder="Name"
        />
        <Input
          variant="flushed"
          pl="8px"
          onChange={nameEmailHandler}
          name="email"
          placeholder="Email"
        />
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ md: "center" }}
          gap="1rem"
        >
          <Text width={{ base: "100%", md: "40%" }} fontSize="1.25rem">
            Pick a date
          </Text>
          <Flex gap="1rem" width={{ base: "100%", md: "50%" }}>
            <Input
              variant="flushed"
              name="mm"
              onChange={dateHandler}
              pl="8px"
              placeholder="MM"
            />
            <Input
              variant="flushed"
              name="dd"
              onChange={dateHandler}
              pl="8px"
              placeholder="DD"
            />
            <Input
              variant="flushed"
              name="yyyy"
              onChange={dateHandler}
              pl="8px"
              placeholder="YYYY"
            />
          </Flex>
        </Flex>
        <Flex gap="1rem" flexDirection={{ base: "column", md: "row" }}>
          <Text width={{ base: "100%", md: "40%" }} fontSize="1.25rem">
            Pick a time
          </Text>
          <Flex gap="1rem" width={{ base: "100%", md: "50%" }}>
            <Input
              variant="flushed"
              name="hr"
              onChange={timeHandler}
              pl="8px"
              placeholder="09"
            />
            <Input
              variant="flushed"
              name="min"
              onChange={timeHandler}
              pl="8px"
              placeholder="00"
            />
            <Select
              variant="flushed"
              textAlign="center"
              name="ampm"
              onChange={(e) =>
                setTime({ ...time, ammp: e.target.selectedOptions[0].value })
              }
              defaultValue="AM"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </Select>
          </Flex>
        </Flex>
        <AddPeople setIncrement={setAddPeople} increment={addPeople} />
        <Button type="submit" onClick={onSubmitHandler} variant="solid">
          make reservation
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
