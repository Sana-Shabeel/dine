import React from "react";
import { League_Spartan } from "next/font/google";
import HeroBg from "@/componnets/Booking/HeroBg";
import Form from "@/componnets/Booking/Form";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Booking = () => {
  return (
    <main className={LeagueSpartan.className}>
      <HeroBg />
      <Form />
    </main>
  );
};
export default Booking;
