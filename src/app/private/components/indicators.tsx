import { FC, Suspense } from "react";

import { indicators } from "@/lib/data";
import { IndicatorSkeleton } from "@/components/skeletons";
import IndicatorCard from "@/app/private/components/indicator-card";

interface Props {
  userId: string | undefined;
}

const Indicators: FC<Props> = ({ userId }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {indicators.map((indicator) => (
        <Suspense
          key={indicator.title}
          fallback={<IndicatorSkeleton {...indicator} />}
        >
          <IndicatorCard
            {...indicator}
            getData={() => indicator.getData(userId)}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default Indicators;
