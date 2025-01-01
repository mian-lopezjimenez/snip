import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NoChartData = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Clicks by month</CardTitle>
      </CardHeader>
      <CardContent className="h-full flex items-center justify-center">
        <p className="text-center text-3xl">No data available</p>
      </CardContent>
    </Card>
  );
};

export default NoChartData;
