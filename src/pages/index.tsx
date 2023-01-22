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
        <Image
          src={"/stars.png"}
          alt={"Stars"}
          width={"900"}
          height={"900"}
          className="absolute top-[10vh] left-[10vw] z-10 hidden w-[1500px] opacity-[0.4] md:block"
        />

        <HeroText />
        <div className="flex w-full translate-y-[-12em] items-center justify-center text-white md:translate-y-[-15em]">
          <div className="crescent flex items-start justify-center">
            <div className="flex w-full max-w-screen-lg translate-y-[15em] flex-col gap-32">
              <InformationCards />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;
