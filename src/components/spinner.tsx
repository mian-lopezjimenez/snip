import { FC } from "react";

import { LoaderCircle } from "lucide-react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const Spinner: FC<Props> = ({ className }) => {
  return <LoaderCircle className={clsx("animate-spin", className)} />;
};

export default Spinner;
