import type { FC } from 'react';

const HeroText: FC = () => (
  <div className="container mx-auto min-h-screen max-w-screen-lg flex flex-col items-center justify-center text-white">
    <div className="text-white hero-text text-center text-3xl sm:text-5xl lg:text-7xl flex flex-col items-center font-medium tracking-tight">
      <div className="hidden sm:flex gap-5">
        <div>Revolutionizing</div>
        <div className="rotation-container">
          <p>email</p>
          <p>tweet</p>
          <p>message</p>
          <p>comment</p>
        </div>
      </div>
      <div className="hidden sm:block">
        responses with the power of AI
      </div>


      {/* Small screens */}
      <span className="block sm:hidden">Revolutionizing responses with the power of AI</span>
    </div>
    <p className="text-slate-500 mt-7 text-[0.6rem] sm:text-xs lg:text-sm text-center">Reworkd AI is a Chrome extension that uses AI model to generate customizable responses based on the user's mood or tone.</p>
  </div>
);

export default HeroText;
