import { FC, ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/utils/format";

interface Props {
  title: string;
  icon: ReactNode;
  getData: () => Promise<{ value: number; percentage: string } | null>;
}

const IndicatorCard: FC<Props> = async ({ title, icon, getData }) => {
  const data = await getData();

  if (!data) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-</div>
          <p className="text-xs text-muted-foreground">- from last month</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card key={title}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatNumber({ number: data.value })}
        </div>
        <p className="text-xs text-muted-foreground">
          {data.percentage} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default IndicatorCard;
