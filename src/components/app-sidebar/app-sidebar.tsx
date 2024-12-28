import { Suspense } from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { SidebarUserMenuSkeleton } from "@/components/skeletons";
import AppSidebarContent from "@/components/app-sidebar/app-sidebar-content";
import AppSidebarFooter from "@/components/app-sidebar/app-sidebar-footer";

const AppSidebar = () => {
  return (
    <Sidebar>
      <AppSidebarContent />

      <Suspense fallback={<SidebarUserMenuSkeleton />}>
        <AppSidebarFooter />
      </Suspense>
    </Sidebar>
  );
};

export default AppSidebar;
