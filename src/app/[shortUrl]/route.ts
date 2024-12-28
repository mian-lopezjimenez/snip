import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { href, origin } = new URL(request.url);

  if (href) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("urls")
      .select()
      .eq("short_url", href)
      .single();

    if (error || !data) {
      return NextResponse.redirect(origin);
    }

    if (data.original_url) {
      return NextResponse.redirect(data.original_url);
    }

    return NextResponse.redirect(origin);
  }
}
