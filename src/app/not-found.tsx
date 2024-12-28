import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p>Could not find the requested URL.</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft />
        </Link>
      </Button>
    </main>
  );
}
