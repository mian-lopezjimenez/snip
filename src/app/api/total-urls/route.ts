import { NextRequest, NextResponse } from "next/server";

import { formatNumber } from "@/utils/format";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(null);
  }

  const { data, error } = await supabase
    .from("urls")
    .select("id.count()")
    .eq("user_id", userId)
    .single();

  const { data: urlsPercentage } = await supabase.rpc("compare_urls_months", {
    user_id: userId,
  });

  if (error) {
    return NextResponse.json(null);
  }

  const clicksPercentageFormatted = formatNumber({
    number: urlsPercentage / 100,
    options: {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
      signDisplay: "always",
    },
  });

  return NextResponse.json({
    value: data.count,
    percentage: clicksPercentageFormatted,
  });
}
