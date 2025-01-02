import { createClient } from "@/utils/supabase/server";
import ClicksChart from "@/app/private/components/clicks-chart";
import CountryChart from "@/app/private/components/country-chart";
import Indicators from "@/app/private/components/indicators";
import RefreshIndicators from "./components/refresh-indicators";
import ChartWrapper from "@/components/chart-wrapper";
import { getChartClicksData, getChartCountryClicksData } from "@/lib/db";
import { Suspense } from "react";
import { ChartSkeleton } from "@/components/skeletons";

export default async function PrivatePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="flex items-center gap-x-4">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl w-fit">
          Dashboard
        </h1>

        <RefreshIndicators />
      </div>
      <Indicators userId={user?.id} />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Suspense fallback={<ChartSkeleton />}>
          <ChartWrapper
            title="Clicks per month"
            getData={() => getChartClicksData(user?.id)}
          >
            <ClicksChart />
          </ChartWrapper>
        </Suspense>

        <Suspense fallback={<ChartSkeleton />}>
          <ChartWrapper
            title="Clicks per country"
            getData={() => getChartCountryClicksData(user?.id)}
          >
            <CountryChart />
          </ChartWrapper>
        </Suspense>
      </section>
    </>
  );
}
