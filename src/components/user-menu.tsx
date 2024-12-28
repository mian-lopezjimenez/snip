import Link from "next/link";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

const UserMenu = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  const { user } = data;

  const label = user ? "Dashboard" : "Log in";
  const route = user ? "/private" : "/login";
  const variant = user ? "secondary" : "outline";

  return (
    <Button className="w-24" variant={variant} asChild>
      <Link href={route}>{label}</Link>
    </Button>
  );
};

export default UserMenu;
