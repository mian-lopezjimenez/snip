"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { links } from "@/lib/data";
import { useSidebar } from "@/components/ui/sidebar";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebarContent = () => {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const handleOpenSidebar = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Snip</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {links.map(({ title, href, Icon }) => {
              const isActive = href === pathname;

              return (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    className={isActive ? "active" : ""}
                    asChild
                    isActive={isActive}
                    onClick={handleOpenSidebar}
                  >
                    <Link href={href} prefetch>
                      <Icon />
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default AppSidebarContent;
