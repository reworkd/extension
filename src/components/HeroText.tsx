import type { FC } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaDev, FaDownload } from "react-icons/fa";
import Dialog from "../ui/dialog";
import Form from "./Form";

const HeroText: FC = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-lg flex-col items-center  text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
        className="hero-text z-10 mt-40 flex flex-col items-center text-center text-5xl font-medium tracking-tight text-white lg:mt-60 lg:text-7xl"
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
        <div className="mx-3 hidden sm:block">
          responses with the power of AI
        </div>

        {/* Small screens */}
        <span className="mx-3 block sm:hidden">
          Revolutionizing responses with the power of AI
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="z-10 mx-10 mt-6 mb-16 max-w-xl text-center text-[0.6rem] text-base text-slate-400 lg:text-lg"
      >
        Reworkd AI is a Chrome extension that uses AI model to generate
        customizable responses based on the user&apos;s mood or tone.
      </motion.p>
      <div className="flex flex-row gap-2">
        <motion.a
          initial={{ opacity: 0, x: -50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          href="https://github.com/awtkns/reworkd"
          target="_blank"
          rel="noreferrer"
          className="z-10"
        >
          <Button
            icon={<FaDownload />}
            className="bg-indigo-500 hover:bg-blue-600"
          >
            Install
          </Button>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, x: 50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="z-10"
        >
          <Dialog
            trigger={
              <Button
                className="bg-indigo-500 hover:bg-blue-600"
                icon={<FaDev />}
              >
                Demo
              </Button>
            }
          >
            <Form isDialog />
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
