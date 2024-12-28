import Counters from "@/app/private/components/counters";
import ClicksChart from "@/app/private/components/clicks-chart";
import CountryChart from "@/app/private/components/country-chart";

export default async function PrivatePage() {
  return (
    <>
      <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
        Dashboard
      </h1>
      <Counters />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ClicksChart />
        <CountryChart />
      </section>
    </>
  );
}
