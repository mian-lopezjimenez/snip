import { Suspense } from "react";

import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "./theme-toggle";
import GradientText from "./gradient-text";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="sticky bg-background top-0 z-50 container mx-auto flex gap-2 justify-between px-6 xl:px-0 py-2 mb-8 border-b-2">
      <Link className="text-3xl flex items-center justify-center" href="/">
        <GradientText>S</GradientText>
      </Link>

      <div className="flex gap-x-2">
        <Suspense fallback={<Skeleton className="w-10 h-10 rounded-full" />}>
          <UserMenu />
        </Suspense>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
