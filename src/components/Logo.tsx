import Image from "next/image";

const Logo: React.FC<{ width?: number; className?: string }> = ({
  width,
  className,
}) => (
  <Image
    src="wordmark-dark.svg"
    alt="Reworkd Logo"
    width={width ? width : 120}
    height={120}
    className={className}
  />
);

export default Logo;
