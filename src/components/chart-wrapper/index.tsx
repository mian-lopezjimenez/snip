import { ReactNode, FC } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ChartProvider from "./chart-provider";

interface Props<T> {
  title?: string;
  children?: ReactNode;
  getData: () => Promise<T>;
}

const ChartWrapper: FC<Props<any>> = async ({ title, children, getData }) => {
  const data = await getData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartProvider data={data}>{children}</ChartProvider>
      </CardContent>
    </Card>
  );
};

export default ChartWrapper;
