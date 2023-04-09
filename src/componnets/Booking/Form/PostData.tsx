import PostDataModal from "@/componnets/Modal/PostDataModal";
import axios from "axios";
import React, { useState } from "react";
import Form from "./Form";

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

const PostData = () => {
  const [addPeople, setAddPeople] = useState<number>(0);
  const [modal, setModal] = useState({
    title: "",
    message: "",
    open: false,
    isLoading: false,
  });
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

  const onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
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
    setModal({ ...modal, isLoading: true });

    const data = await axios.post("/api/booking", bookingData);

    if (data.status === 201) {
      setModal({
        open: true,
        title: "Success",
        message: `A table has been booked under the name ${bookingData.name}`,
        isLoading: false,
      });
    }

    console.log(data);
  };
  return (
    <>
      <PostDataModal
        Open={modal.open}
        title={modal.title}
        message={modal.message}
        handleClose={() => setModal({ ...modal, open: false })}
      />

      <Form
        nameEmailHandler={nameEmailHandler}
        dateTimeHandler={dateTimeHandler}
        addpeopleHandler={addpeopleHandler}
        onSubmitHandler={onSubmitHandler}
        addPeople={addPeople}
        error={error}
        isLoading={modal.isLoading}
      />
    </>
  );
};

export default PostData;
