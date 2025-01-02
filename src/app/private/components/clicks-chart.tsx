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
import { type ChartConfig } from "@/components/ui/chart";
import { MonthClicks } from "@/types";
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

const ClicksChart: FC = () => {
  const { data } = useChart<MonthClicks[]>();

  return (
    <ChartContainer className="min-h-[200px] w-full" config={chartConfig}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
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

export default ClicksChart;
