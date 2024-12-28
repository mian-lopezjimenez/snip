import { Skeleton } from "@/components/ui/skeleton";

export const SidebarUserMenuSkeleton = () => {
  return (
    <div className="w-full flex gap-2 py-2 px-4">
      <Skeleton className="w-6 h-6 rounded-full" />
      <Skeleton className="w-full h-6" />
    </div>
  );
};
