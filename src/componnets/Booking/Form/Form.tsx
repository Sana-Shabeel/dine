import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AddPeople from "./AddPeople";
import PickTime from "./PickTime";

interface Props {
  nameEmailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateTimeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  addpeopleHandler: (num: number) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
  addPeople: number;
  error: string;
  isLoading: boolean;
}

const Form = ({
  nameEmailHandler,
  dateTimeHandler,
  addpeopleHandler,
  onSubmitHandler,
  addPeople,
  error,
  isLoading,
}: Props) => {
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
          <Button
            isLoading={isLoading}
            type="submit"
            onClick={onSubmitHandler}
            variant="solid"
          >
            make reservation
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
