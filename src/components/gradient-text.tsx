import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GradientText: FC<Props> = ({ children }) => {
  return (
    <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
      {children}
    </span>
  );
};

export default GradientText;
