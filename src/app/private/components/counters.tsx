import { Scissors, QrCode, MousePointerClick, UserRound } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const counters = [
  {
    title: "Total URLs Shortened",
    icon: <Scissors className="w-4 h-4" />,
    value: "15,231",
    percentage: "+20.1%",
  },
  {
    title: "QR Codes Generated",
    icon: <QrCode className="w-4 h-4" />,
    value: "8,734",
    percentage: "+15.2%",
  },
  {
    title: "Total Clicks",
    icon: <MousePointerClick className="w-4 h-4" />,
    value: "20,343",
    percentage: "-8.4%",
  },
  {
    title: "Unique Clicks",
    icon: <UserRound className="w-4 h-4" />,
    value: "12,234",
    percentage: "-2.7%",
  },
];

const Counters = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {counters.map(({ title, icon, value, percentage }) => (
        <Card key={title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">
              {percentage} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Counters;
