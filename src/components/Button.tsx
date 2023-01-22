import React from "react";

const Button = ({
  className,
  text,
  onClick,
  icon,
}: {
  className?: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${
        className ?? ""
      } flex flex-row items-center rounded-full bg-purple-400 px-5 py-3 hover:bg-purple-500`}
      onClick={onClick}
    >
      {icon ? <div className={text ? "mr-2" : ""}>{icon}</div> : null}
      {text}
    </button>
  );
};

export default Button;
