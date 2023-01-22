import { Jelly } from "@uiball/loaders";

interface LoaderProps {
  color?: string;
  className?: string;
  size?: number;
  speed?: number;
  lineWeight?: number;
}

const Loader: React.FC<LoaderProps> = ({
  className,
  size = 16,
  speed = 2,
  color = "white",
  lineWeight = 7,
}) => {
  return (
    <div className={className}>
      <Jelly size={size} speed={speed} color={color} />
    </div>
  );
};

export default Loader;
