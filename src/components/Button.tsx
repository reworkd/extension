import React from "react";

const Button = ({
	children,
  className,
  onClick,
  icon,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
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
      {icon ? <div className={children ? "mr-2" : ""}>{icon}</div> : null}
			{children}
    </button>
  );
};

export default Button;
