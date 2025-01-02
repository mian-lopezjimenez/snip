import { ChevronUp } from "lucide-react";

import { createClient } from "@/utils/supabase/server";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils";
import LogOutButton from "@/components/log-out";

const AppSidebarFooter = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const { user } = data;

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={user?.user_metadata.avatar_url}
                      alt={`User profile picture of @${user?.user_metadata.user_name}`}
                    />
                    <AvatarFallback>
                      {getInitials(user?.user_metadata.full_name)}
                    </AvatarFallback>
                  </Avatar>
                  <span>@{user?.user_metadata.user_name}</span>
                </div>

                <ChevronUp />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <LogOutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
