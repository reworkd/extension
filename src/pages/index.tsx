import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Reworkd.</title>
        <meta name="The Reworkd. extension" content="An AI power response generator created for NWHacks 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black">
        <Navbar/>
        <div className="container mx-auto min-h-screen max-w-screen-lg flex flex-col items-center justify-center text-white">
          <h1 className="text-white hero-text text-center text-7xl">Revolutionizing emails, one response at a time</h1>
          <p className="text-slate-500 mt-7">Reworkd AI is a Chrome extension that uses AI model to generate customizable responses based on the user's mood or tone.</p>
        </div>
        <div className="container max-w-screen-lg flex flex-col items-center justify-center text-white">
          <div className="crescent border-t-[1px] rounded-t-[50%] border-white">He</div>
        </div>
      </main>
    </>
  );
};

export default Home;
