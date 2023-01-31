import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Image from "next/image";
import Footer from "../components/Footer";
import InformationCards from "../components/InformationCards";

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
        <div className="absolute top-[10vh] left-[10vw]">
          <Image
            src={"/stars.png"}
            alt={"Stars"}
            width={"900"}
            height={"900"}
            className="w-[1500px] opacity-[0.5]"
          />
        </div>
        <HeroText />
        <div className="flex w-full translate-y-[-12em] items-center justify-center text-white md:translate-y-[-15em]">
          <div className="crescent flex items-start justify-center">
            <div className="flex w-full translate-y-[15em] flex-col items-center justify-center">
              <div className="flex w-full max-w-screen-lg flex-col gap-32">
                <InformationCards />
              </div>
              <div className="mt-20 w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
