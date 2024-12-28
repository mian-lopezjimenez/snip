"use client";

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

const chartData = [
  { country: "USA", totalClicks: 233, uniqueClicks: 200 },
  { country: "Canada", totalClicks: 237, uniqueClicks: 120 },
  { country: "France", totalClicks: 343, uniqueClicks: 190 },
  { country: "Spain", totalClicks: 200, uniqueClicks: 130 },
  { country: "Japan", totalClicks: 214, uniqueClicks: 140 },
  { country: "Germany", totalClicks: 234, uniqueClicks: 110 },
];

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

const CountryChart = () => {
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
