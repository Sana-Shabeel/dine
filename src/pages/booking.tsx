import PostData from "@/componnets/Booking/Form/PostData";
import HeroBg from "@/componnets/Booking/HeroBg";
import Footer from "@/componnets/Footer";
import { League_Spartan } from "next/font/google";
import Head from "next/head";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Booking = () => {
  return (
    <>
      <Head>
        <title>Dine</title>
        <meta
          name="Dine"
          content="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-blue-2.png" />
      </Head>
      <main className={LeagueSpartan.className}>
        <HeroBg />
        <PostData />
        <Footer />
      </main>
    </>
  );
};
export default Booking;
