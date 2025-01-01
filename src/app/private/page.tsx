import { createClient } from "@/utils/supabase/server";
import ClicksChart from "@/app/private/components/clicks-chart";
import CountryChart from "@/app/private/components/country-chart";
import Indicators from "@/app/private/components/indicators";

export default async function PrivatePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
        Dashboard
      </h1>
      <Indicators userId={user?.id} />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ClicksChart userId={user?.id} />
        <CountryChart userId={user?.id} />
      </section>
    </>
  );
}
