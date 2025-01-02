"use client";

import { FC } from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CountryClicks } from "@/types";
import { type ChartConfig } from "@/components/ui/chart";
import useChart from "@/hooks/use-chart";

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

const CountryChart: FC = () => {
  const { data } = useChart<CountryClicks[]>();

  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
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
  );
};

export default CountryChart;
