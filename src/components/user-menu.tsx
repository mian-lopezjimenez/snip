import Link from "next/link";

import { LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/server";
import LogOutButton from "@/components/log-out";
import { getInitials } from "@/utils";

const UserMenu = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  const { user } = data;

  if (!user) {
    return (
      <Button variant="outline" asChild>
        <Link href="/login">Log in</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.user_metadata.avatar_url} alt="@shadcn" />
          <AvatarFallback>
            {getInitials(user?.user_metadata.full_name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/private">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
