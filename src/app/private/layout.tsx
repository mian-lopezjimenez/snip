import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar/app-sidebar";

interface Props {
  children: ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="py-2 md:py-6 px-2 md:px-6">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
