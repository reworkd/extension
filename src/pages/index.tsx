import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reworkd.</title>
        <meta
          name="The Reworkd. extension"
          content="An AI power response generator created for NWHacks 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="top-gradient min-h-screen bg-black">
        <Navbar />
        <HeroText />
        <div className="flex translate-y-[-12em] items-center justify-center text-white md:translate-y-[-15em]">
          <div className="crescent" />
        </div>
      </main>
    </>
  );
};

export default Home;
