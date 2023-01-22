import type { FC } from "react";

const HeroText: FC = () => (
  <div className="container mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center text-white">
    <div className="hero-text flex flex-col items-center text-center text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl">
      <div className="hidden gap-5 sm:flex">
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
      <span className="block sm:hidden">
        Revolutionizing responses with the power of AI
      </span>
    </div>
    <p className="mt-7 text-center text-[0.6rem] text-slate-400 sm:text-xs lg:text-base">
      Reworkd AI is a Chrome extension that uses AI model to generate
      customizable responses based on the user&apos;s mood or tone.
    </p>
  </div>
);

export default HeroText;
