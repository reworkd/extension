import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Reworkd.</title>
        <meta name="The Reworkd. extension" content="An AI power response generator created for NWHacks 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black top-gradient">
        <Navbar/>
        <HeroText/>
        <div className="translate-y-[-12em] md:translate-y-[-15em] flex items-center justify-center text-white">
          <div className="crescent"/>
        </div>
      </main>
    </>
  );
};

export default Home;
