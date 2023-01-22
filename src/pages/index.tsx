import { type NextPage } from "next";
import Head from "next/head";
import { motion, useScroll } from "framer-motion"
import cx from "classnames";
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
      <main className="min-h-screen  bg-black top-gradient">
        <Navbar/>
        <HeroText/>
        <div className="translate-y-[-12em] md:translate-y-[-15em] flex items-center w-full justify-center text-white">
          <div className="crescent flex items-start justify-center">
            <div className="flex flex-col max-w-screen-lg w-full translate-y-[15em] gap-32">
                <InformationCard title="Compose emails" text="Simplify your email communication by using AI to compose detailed messages with just a brief prompt. Say goodbye to tedious typing and let the AI handle the heavy lifting for you."/>
                <InformationCard flip title="Reply to tweets" text="Companies can now create tailored responses to their customers' tweets, replacing the use of generic replies. "/>
                <InformationCard title="Regenerate sentences" text="If you are not satisfied with the AI's response, you can easily generate a new one by clicking 'regenerate' which eliminates the need to spend extra time thinking of an alternate way to phrase your response."/>
                <InformationCard flip title="Tailored responses" text="Response customization can be achieved by using different options such as emojis, response length, and level of detail. Using a combination of options can help you effectively convey your message in specific circumstances."/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const InformationCard = ({title, text, flip}: { title: string, text: string, flip?: boolean }) => {
  const shadowColour = "rgb(192 132 252 / 50%)"
  return (
    <motion.div
      className="flex justify-between items-center flex-wrap m-10 gap-12 max-w-screen-lg">
      <motion.div
        initial={{ opacity: 0, x: flip ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3}}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, ease: "easeInOut", delay: 0 },
        }}
        className={`shadow-purple-400/80 ${flip ? "order-1 " : " "}`}
        style={{ boxShadow: `0 0 100px 10px ${shadowColour}`}}
      >
        <MacWindowHeader/>
        <div className={`sm:w-[30em] h-[20em] bg-purple-400/80 rounded-b-md}`}></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: flip ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3}}
        className="flex flex-col gap-2 w-[25em]"
        style={{textShadow: `0px 0px 20px ${shadowColour}, 0px 0px 20px ${shadowColour}, 0px 0px 20px ${shadowColour}`}}
      >
        <h1 className="text-4xl">{title}</h1>
        <p className="font-thin text-sm sm:text-lg font-sans">{text}</p>
      </motion.div>
    </motion.div>
  )
}

const MacWindowHeader = () => {
  return (
    <div
      className={cx(
        "flex gap-1 rounded-t-md border-[1px] p-2",
        "border-white/25 bg-black"
      )}
    >
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
  );
};

export default Home;
