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
      <main className="min-h-screen bg-black top-gradient">
        <Navbar/>
        <Image src={"/stars.png"} alt={"Stars"} width={"900"} height={"900"} className="absolute w-[1500px] top-[10vh] left-[10vw] opacity-[0.2]"/>
        <HeroText/>
        <div className="translate-y-[-12em] md:translate-y-[-15em] flex items-center w-full justify-center text-white">
          <div className="crescent flex items-start justify-center">
            <div className="flex flex-col max-w-screen-lg w-full translate-y-[15em] gap-32">
                <InformationCards/>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
