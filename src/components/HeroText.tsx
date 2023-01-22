import type { FC } from 'react';
import { motion } from 'framer-motion';

const HeroText: FC = () => (
  <div className="container mx-auto min-h-screen max-w-screen-lg flex flex-col items-center justify-center text-white">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease: "easeOut", delay: 0.25}}
      className="text-white hero-text text-center text-3xl sm:text-5xl lg:text-7xl flex flex-col items-center font-medium tracking-tight">
      <div
        className="hidden sm:flex gap-5">
        <div>Revolutionizing</div>
        <div className="rotation-container">
          <p>email</p>
          <p>tweet</p>
          <p>message</p>
          <p>comment</p>
        </div>
      </div>
      <div className="hidden sm:block">responses with the power of AI</div>

      {/* Small screens */}
      <span className="block sm:hidden">Revolutionizing responses with the power of AI</span>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease: "easeOut", delay: 0.7}}
      className="text-slate-400 mt-7 text-[0.6rem] sm:text-xs lg:text-base text-center"
    >
      Reworkd AI is a Chrome extension that uses AI model to generate customizable responses based on the user&apos;s mood or tone.
    </motion.p>
  </div>
);

export default HeroText;
