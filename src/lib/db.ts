"use server";

import { createClient } from "@/utils/supabase/server";

export async function getTotalClicks(userId: string | undefined): Promise<{
  value: number;
  percentage: string;
} | null> {
  const supabase = await createClient();

  if (!userId) {
    return null;
  }

  const { data, error } = await supabase
    .from("urls")
    .select("clicks.sum()")
    .eq("user_id", userId)
    .single();

  const { data: clicksPercentage } = await supabase.rpc(
    "compare_clicks_months",
    { user_id: userId }
  );

  if (error) {
    return null;
  }

  const clicksPercentageFormatted = new Intl.NumberFormat("de-DE", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    signDisplay: "always",
  }).format(clicksPercentage / 100);

  return {
    value: data.sum,
    percentage: clicksPercentageFormatted,
  };
}

export async function getTotalUrls(userId: string | undefined): Promise<{
  value: number;
  percentage: string;
} | null> {
  const supabase = await createClient();

  if (!userId) {
    return null;
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
    return null;
  }

  const urlsPercentageFormatted = new Intl.NumberFormat("de-DE", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    signDisplay: "always",
  }).format(urlsPercentage / 100);

  return {
    value: data.count,
    percentage: urlsPercentageFormatted,
  };
}
