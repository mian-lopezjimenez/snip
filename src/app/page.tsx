import Features from "@/components/features";
import Footer from "@/components/footer";
import GradientText from "@/components/gradient-text";
import Hero from "@/components/hero";
import ShortURLForm from "@/components/short-url-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main className="container mx-auto flex flex-col items-center px-6 xl:px-0 gap-y-3 md:gap-y-6">
        <h1 className="text-3xl md:text-5xl text-left md:text-center">
          <GradientText>Snip:</GradientText> your links, your way.
        </h1>

        <h2 className="mb-8 text-center w-fit text-lg md:text-2xl">
          Paste your link to be shortened, easy as that
        </h2>

        <ShortURLForm />
        <Features />
        <Hero />
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
