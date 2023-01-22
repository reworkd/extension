import type { FC } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaDownload } from "react-icons/fa";

const HeroText: FC = () => (
  <div className="container mx-auto flex min-h-screen max-w-screen-lg flex-col items-center  text-white">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
      className="hero-text mt-40 flex flex-col items-center text-center text-3xl font-medium tracking-tight text-white sm:text-5xl lg:mt-60 lg:text-7xl"
    >
      <div className="mx-3 hidden gap-5 sm:flex">
        <div>Revolutionizing</div>
        <div className="rotation-container">
          <p>email</p>
          <p>tweet</p>
          <p>message</p>
          <p>comment</p>
        </div>
      </div>
      <div className="mx-3 hidden sm:block">responses with the power of AI</div>

      {/* Small screens */}
      <span className="mx-3 block sm:hidden">
        Revolutionizing responses with the power of AI
      </span>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      className="mt-6 mb-16 max-w-xl text-center text-[0.6rem] text-lg text-slate-400"
    >
      Reworkd AI is a Chrome extension that uses AI model to generate
      customizable responses based on the user&apos;s mood or tone.
    </motion.p>
    <motion.a
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
      href="https://github.com/awtkns/reworkd"
      target="_blank"
      rel="noreferrer"
      className="z-50"
    >
      <Button
        text="Install"
        icon={<FaDownload />}
        className="bg-indigo-500 hover:bg-blue-600"
      />
    </motion.a>
  </div>
);

export default HeroText;
