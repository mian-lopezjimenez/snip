import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SidebarUserMenuSkeleton = () => {
  return (
    <div className="w-full flex items-center gap-2 py-2 px-4">
      <Skeleton className="w-6 h-6 rounded-full" />
      <Skeleton className="w-[calc(240px_-_32px)] h-5" />
    </div>
  );
};

export const IndicatorSkeleton = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <div className="text-2xl font-bold">
          <Skeleton className="w-12 h-6" />
        </div>
        <div className="text-xs text-muted-foreground">
          <Skeleton className="w-1/2 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};
