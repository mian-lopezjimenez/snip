"use client";

import { FC, useState, useEffect } from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { type ChartConfig } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getChartCountryClicksData } from "@/lib/db";
import { CountryClicks } from "@/types";
import { ChartSkeleton } from "@/components/skeletons";
import NoChartData from "./no-chart-data";

const chartConfig = {
  totalClicks: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  uniqueClicks: {
    label: "Unique",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface Props {
  userId: string | undefined;
}

const CountryChart: FC<Props> = ({ userId }) => {
  const [chartData, setChartData] = useState<CountryClicks[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getChartCountryClicksData(userId);

      if (data) {
        setChartData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <ChartSkeleton />;
  }

  if (!loading && !chartData) {
    return <NoChartData />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Clicks by country</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="country"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              isAnimationActive={false}
              dataKey="totalClicks"
              fill={chartConfig.totalClicks.color}
            />
            <Bar
              isAnimationActive={false}
              dataKey="uniqueClicks"
              fill={chartConfig.uniqueClicks.color}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CountryChart;
