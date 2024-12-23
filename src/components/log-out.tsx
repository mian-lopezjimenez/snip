import { LogOut } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/actions";

const LogOutButton = () => {
  return (
    <DropdownMenuItem onClick={signOut}>
      <LogOut /> <span>Log out</span>
    </DropdownMenuItem>
  );
};

export default LogOutButton;
