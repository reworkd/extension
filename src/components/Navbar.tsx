import Logo from "./Logo";
import { FaGithubAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header
      aria-label="Page Header"
      className="fixed top-0 left-0 z-50 w-screen border-b-[1px] border-b-white/10 px-8 backdrop-blur-md backdrop-brightness-125"
    >
      <div className="mx-auto flex h-[4.5em] max-w-screen-lg flex-row items-center justify-between">
        <Logo />
        <a
          className="mr-0 flex  flex-row items-center justify-center gap-4 text-white hover:text-white/75"
          href="https://github.com/awtkns/reworkd"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt size={32} />
        </a>
      </div>
    </header>
  );
};

export default Header;
