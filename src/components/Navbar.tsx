import Logo from "./Logo";

const Header = () => {
  return (
    <header
      aria-label="Page Header"
      className="fixed top-0 left-0 z-50 border-b-[1px] w-screen border-b-white/10 px-8 backdrop-blur-md backdrop-brightness-125"
    >
      <div className="mx-auto flex h-[4.5em] max-w-screen-lg flex-row items-center justify-between">
        <Logo />
        <div className="mr-0 inline-flex items-center gap-4 text-white">
          <p>Get started</p>
        </div>
      </div>
    </header>
  );
};

export default Header;