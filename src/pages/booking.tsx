import React from "react";
import { League_Spartan } from "next/font/google";
import HeroBg from "@/componnets/Booking/HeroBg";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Booking = () => {
  return (
    <main className={LeagueSpartan.className}>
      <HeroBg />
    </main>
  );
};
export default Booking;
