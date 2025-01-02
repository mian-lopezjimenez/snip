import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(null);
  }

  const { data: clicksPerMonth, error } = await supabase.rpc(
    "clicks_per_month",
    { userid: userId }
  );

  if (error) {
    return NextResponse.json(null);
  }

  return NextResponse.json(clicksPerMonth);
}
