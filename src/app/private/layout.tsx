import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import AppSidebar from "@/components/app-sidebar/app-sidebar";

interface Props {
  children: ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-4 ">
        <div className="w-full flex gap-x-2 justify-start mb-2 md:mb-4">
          <Button variant="outline" size="icon" asChild>
            <SidebarTrigger />
          </Button>
          <ThemeToggle />
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
