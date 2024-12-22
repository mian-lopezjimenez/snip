import { PenTool, ChartNoAxesCombined } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/hero";
import ShortURLForm from "@/components/short-url-form";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center px-6 md:px-0 gap-y-3 md:gap-y-6">
      <h1 className="text-3xl md:text-5xl text-left md:text-center">
        <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Snip:
        </span>{" "}
        your links, your way.
      </h1>

      <h2 className="mb-8 text-center w-fit text-lg md:text-2xl">
        Paste your link to be shortened, easy as that
      </h2>

      <ShortURLForm />

      <div className="w-full md:w-[700px] mt-8 flex flex-col md:flex-row gap-4">
        <Card className="md:w-1/2">
          <CardHeader>
            <CardTitle className="flex gap-x-2">
              <PenTool /> Customize your links
            </CardTitle>
          </CardHeader>

          <CardContent>
            With Snip, you can create custom shortened URLs that not only save
            space but also enhance your branding.
          </CardContent>
        </Card>

        <Card className="md:w-1/2">
          <CardHeader>
            <CardTitle className="flex gap-x-2">
              <ChartNoAxesCombined /> Track your performance
            </CardTitle>
          </CardHeader>

          <CardContent>
            Plus, easily track link performance to understand engagement and
            optimize your strategies.
          </CardContent>
        </Card>
      </div>

      <Hero />
    </main>
  );
}
