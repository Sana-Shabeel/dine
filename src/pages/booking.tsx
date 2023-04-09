import PostData from "@/componnets/Booking/Form/PostData";
import HeroBg from "@/componnets/Booking/HeroBg";
import Footer from "@/componnets/Footer";
import { League_Spartan } from "next/font/google";

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
