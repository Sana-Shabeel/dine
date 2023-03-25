import Head from "next/head";
import { League_Spartan } from "next/font/google";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import HeroBanner from "@/componnets/HeroBanner";
import EnjoyablePlace from "@/componnets/EnjoyablePlace";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  console.log();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={LeagueSpartan.className}>
        <HeroBanner />
        <EnjoyablePlace />
      </main>
    </>
  );
}
