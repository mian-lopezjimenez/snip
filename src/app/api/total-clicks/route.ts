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

  const [countClicks, percentageClicks] = await Promise.all([
    supabase.rpc("count_total_clicks", { userid: userId }),
    supabase.rpc("compare_clicks_months", { userid: userId }),
  ]);

  if (countClicks.error || percentageClicks.error) {
    return NextResponse.json(null);
  }

  const clicksPercentageFormatted = formatNumber({
    number: percentageClicks.data / 100,
    options: {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
      signDisplay: "always",
    },
  });

  return NextResponse.json({
    value: countClicks.data,
    percentage: clicksPercentageFormatted,
  });
}
