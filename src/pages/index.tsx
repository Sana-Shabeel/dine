import EnjoyablePlace from "@/componnets/EnjoyablePlace";
import Footer from "@/componnets/Footer";
import HeroBanner from "@/componnets/HeroBanner";
import Highlighted from "@/componnets/Highlighted/Highlighted";
import LocallySourced from "@/componnets/LocallySourced";
import OurOffers from "@/componnets/Offers/OurOffers";
import Ready from "@/componnets/Ready";
import { League_Spartan } from "next/font/google";
import Head from "next/head";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
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
        <HeroBanner />
        <EnjoyablePlace />
        <LocallySourced />
        <Highlighted />
        <OurOffers />
        <Ready />
        <Footer />
      </main>
    </>
  );
}
