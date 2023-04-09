import React from "react";
import { League_Spartan } from "next/font/google";
import HeroBg from "@/componnets/Booking/HeroBg";
import Form from "@/componnets/Booking/Form/Form";
import Footer from "@/componnets/Footer";
import PostData from "@/componnets/Booking/Form/PostData";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Booking = () => {
  return (
    <main className={LeagueSpartan.className}>
      <HeroBg />
      <PostData />
      <Footer />
    </main>
  );
};
export default Booking;
