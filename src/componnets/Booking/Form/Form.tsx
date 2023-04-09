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
import axios from "axios";
import React, { useState } from "react";
import AddPeople from "./AddPeople";
import PickTime from "./PickTime";

interface DateTime {
  date: {
    mm: string;
    dd: string;
    yyyy: string;
  };
  time: {
    hr: string;
    min: string;
    ampm: string;
  };
  [key: string]: any; // add index signature
}

const Form = () => {
  const [addPeople, setAddPeople] = useState<number>(0);
  const [dateTime, setDateTime] = useState<DateTime>({
    date: {
      mm: "",
      dd: "",
      yyyy: "",
    },
    time: {
      hr: "",
      min: "",
      ampm: "",
    },
  });

  const [error, setError] = useState("");

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: addPeople,
  });

  const addpeopleHandler = (num: number) => {
    setAddPeople(num);

    setBookingData({
      ...bookingData,
      people: num,
    });
    console.log(addPeople);
  };

  const nameEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setBookingData({
      ...bookingData,
      [e.target.name]: value,
    });
  };

  // takes the date and time value from multiple different input elements
  const dateTimeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name: [string, string] = e.target.name.split(" ") as [string, string];
    const value = e.target.value;

    console.log(name, name[0], value);

    setDateTime((prevState) => ({
      ...prevState,
      [name[0]]: {
        ...prevState[name[0]],
        [name[1]]: value,
      },
    }));

    const dateStr = Object.values(dateTime.date).join("-");
    const timeStr = `${dateTime.time.hr}:${dateTime.time.min} ${dateTime.time.ampm}`;

    setBookingData({
      ...bookingData,
      date: dateStr,
      time: timeStr,
    });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const isDateEmpty = Object.values(dateTime.date).some(
      (value) => value === ""
    );
    const isTimeEmpty = Object.values(dateTime.date).some(
      (value) => value === ""
    );

    if (
      isDateEmpty ||
      isTimeEmpty ||
      bookingData.name === "" ||
      bookingData.email === "" ||
      bookingData.people === 0
    ) {
      console.log(isDateEmpty);
      console.log(isTimeEmpty);

      return setError("Make sure all the fields are filled");
    }

    postData();
  };

  const postData = async () => {
    const { data } = await axios.post("/api/booking", bookingData);

    console.log(data);
  };
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
      <form>
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
          <PickTime
            name1="date mm"
            name2="date dd"
            name3="date yyyy"
            placeholder1="MM"
            placeholder2="DD"
            placeholder3="YYYY"
            time={false}
            dateTimeHandler={dateTimeHandler}
          />
          <PickTime
            name1="time hr"
            name2="time min"
            name3="time ampm"
            placeholder1="09"
            placeholder2="00"
            placeholder3="AM"
            time={true}
            dateTimeHandler={dateTimeHandler}
          />
          <AddPeople increment={addPeople} setIncrement={addpeopleHandler} />

          {error ? (
            <Text fontSize="1rem" m="0" color="red">
              {error}
            </Text>
          ) : null}
          <Button type="submit" onClick={onSubmitHandler} variant="solid">
            make reservation
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
