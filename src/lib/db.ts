"use server";

import {
  unstable_cacheTag as cacheTag,
  // revalidateTag,
  unstable_cacheLife as cacheLife,
} from "next/cache";

import { CountryClicks, IndicatorsResponse, MonthClicks } from "@/types";
// import { formatNumber } from "@/utils/format";
// import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// export async function getTotalClicks(
//   userId: string | undefined
// ): Promise<IndicatorsResponse | null> {
//   const supabase = await createClient();

//   if (!userId) {
//     return null;
//   }

//   const [countClicks, percentageClicks] = await Promise.all([
//     supabase.rpc("count_total_clicks", { userid: userId }),
//     supabase.rpc("compare_clicks_months", { userid: userId }),
//   ]);

//   if (countClicks.error || percentageClicks.error) {
//     return null;
//   }

//   const clicksPercentageFormatted = formatNumber({
//     number: percentageClicks.data / 100,
//     options: {
//       style: "percent",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 1,
//       signDisplay: "always",
//     },
//   });

//   return {
//     value: countClicks.data,
//     percentage: clicksPercentageFormatted,
//   };
// }

export async function getTotalClicks(
  userId: string | undefined
): Promise<IndicatorsResponse | null> {
  "use cache";
  cacheTag("dashboard-indicators");
  cacheLife("minutes");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/total-clicks?userId=${userId}`
  );

  const data = await response.json();

  return data;
}

// export async function getUniqueClicks(
//   userId: string | undefined
// ): Promise<IndicatorsResponse | null> {
//   const supabase = await createClient();

//   if (!userId) {
//     return null;
//   }

//   const [countUniqueClicks, percentageUniqueClicks] = await Promise.all([
//     supabase.rpc("count_unique_clicks", { userid: userId }),
//     supabase.rpc("compare_unique_clicks_months", { userid: userId }),
//   ]);

//   if (countUniqueClicks.error || percentageUniqueClicks.error) {
//     return null;
//   }

//   return {
//     value: countUniqueClicks.data,
//     percentage: formatNumber({
//       number: percentageUniqueClicks.data / 100,
//       options: {
//         style: "percent",
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 1,
//         signDisplay: "always",
//       },
//     }),
//   };
// }

export async function getUniqueClicks(
  userId: string | undefined
): Promise<IndicatorsResponse | null> {
  "use cache";
  cacheTag("dashboard-indicators");
  cacheLife("minutes");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/unique-clicks?userId=${userId}`
  );

  const data = await response.json();

  return data;
}

// export async function getTotalUrls(
//   userId: string | undefined
// ): Promise<IndicatorsResponse | null> {
//   const supabase = await createClient();

//   if (!userId) {
//     return null;
//   }

//   const { data, error } = await supabase
//     .from("urls")
//     .select("id.count()")
//     .eq("user_id", userId)
//     .single();

//   const { data: urlsPercentage } = await supabase.rpc("compare_urls_months", {
//     user_id: userId,
//   });

//   if (error) {
//     return null;
//   }

//   const urlsPercentageFormatted = formatNumber({
//     number: urlsPercentage / 100,
//     options: {
//       style: "percent",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 1,
//       signDisplay: "always",
//     },
//   });

//   return {
//     value: data.count,
//     percentage: urlsPercentageFormatted,
//   };
// }

export async function getTotalUrls(
  userId: string | undefined
): Promise<IndicatorsResponse | null> {
  "use cache";
  cacheTag("dashboard-indicators");
  cacheLife("minutes");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/total-urls?userId=${userId}`
  );

  const data = await response.json();

  return data;
}

// export async function getChartClicksData(
//   userId: string | undefined
// ): Promise<MonthClicks[] | null> {
//   const supabase = await createClient();

//   if (!userId) {
//     return null;
//   }

//   const { data: clicksPerMonth, error } = await supabase.rpc(
//     "clicks_per_month",
//     { userid: userId }
//   );

//   if (error) {
//     return null;
//   }

//   return clicksPerMonth;
// }

export async function getChartClicksData(
  userId: string | undefined
): Promise<MonthClicks[] | null> {
  "use cache";
  cacheTag("clicks-month-chart");
  cacheLife("minutes");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/clicks-months?userId=${userId}`
  );

  const data = await response.json();

  return data;
}

// export async function getChartCountryClicksData(
//   userId: string | undefined
// ): Promise<CountryClicks[] | null> {
//   const supabase = await createClient();

//   if (!userId) {
//     return null;
//   }

//   const { data: clicksPerCountry, error } = await supabase.rpc(
//     "clicks_per_country",
//     { userid: userId }
//   );

//   if (error) {
//     return null;
//   }

//   return clicksPerCountry;
// }

export async function getChartCountryClicksData(
  userId: string | undefined
): Promise<CountryClicks[] | null> {
  "use cache";
  cacheTag("clicks-country-chart");
  cacheLife("minutes");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/clicks-countries?userId=${userId}`
  );

  const data = await response.json();

  return data;
}

export async function redalidateTags(tags: string[]) {
  "use server";

  console.log(tags);
  revalidatePath("/private", "page");
  // tags.forEach((tag) => {
  //   revalidateTag(tag);
  // });
}
