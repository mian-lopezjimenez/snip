import { Suspense } from "react";

import { createClient } from "@/utils/supabase/server";
import { indicators } from "@/lib/data";
import { IndicatorSkeleton } from "@/components/skeletons";
import IndicatorCard from "@/app/private/components/indicator-card";

const Indicators = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {indicators.map((indicator) => (
        <Suspense
          key={indicator.title}
          fallback={<IndicatorSkeleton {...indicator} />}
        >
          <IndicatorCard
            {...indicator}
            getData={() => indicator.getData(user?.id)}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default Indicators;
