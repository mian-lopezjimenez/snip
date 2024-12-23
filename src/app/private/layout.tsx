import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return <main className="container mx-auto px-6 md:px-0">{children}</main>;
}
