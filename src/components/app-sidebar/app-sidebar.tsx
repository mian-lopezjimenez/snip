import { Suspense } from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import AppSidebarContent from "@/components/app-sidebar/app-sidebar-content";
import AppSidebarFooter from "@/components/app-sidebar/app-sidebar-footer";

const AppSidebar = () => {
  return (
    <Sidebar>
      <AppSidebarContent />

      <Suspense fallback={<Skeleton className="w-60 h-8" />}>
        <AppSidebarFooter />
      </Suspense>
    </Sidebar>
  );
};

export default AppSidebar;
