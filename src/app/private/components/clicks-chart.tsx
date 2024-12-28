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
  { month: "January", clicksTotal: 186, clicksUnique: 80 },
  { month: "February", clicksTotal: 305, clicksUnique: 200 },
  { month: "March", clicksTotal: 237, clicksUnique: 120 },
  { month: "April", clicksTotal: 73, clicksUnique: 190 },
  { month: "May", clicksTotal: 209, clicksUnique: 130 },
  { month: "June", clicksTotal: 214, clicksUnique: 140 },
];

const chartConfig = {
  clicksTotal: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  clicksUnique: {
    label: "Unique",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ClicksChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clicks by month</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
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
              dataKey="clicksTotal"
              fill={chartConfig.clicksTotal.color}
            />
            <Bar
              isAnimationActive={false}
              dataKey="clicksUnique"
              fill={chartConfig.clicksUnique.color}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ClicksChart;
