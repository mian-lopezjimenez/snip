import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse, userAgent } from "next/server";

import { createClient } from "@/utils/supabase/server";

export const config = {
  runtime: "edge",
};

const geoMockup = {
  city: "Barcelona",
  country: "ES",
  flag: "🇪🇸",
  countryRegion: "CT",
  region: "cdg1",
  latitude: "41.4353",
  longitude: "2.2104",
  postalCode: "08030",
};

export async function GET(request: NextRequest) {
  const { href, origin } = new URL(request.url);
  const { browser, os, device } = userAgent(request);
  const { country, latitude, longitude, city, postalCode } =
    process.env.NODE_ENV === "development" ? geoMockup : geolocation(request);
  const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0];

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
      await supabase
        .from("urls")
        .update({ clicks: data.clicks + 1 })
        .eq("id", data.id);

      await supabase.from("url_clicks").insert({
        latitude,
        longitude,
        country,
        city,
        postal_code: postalCode,
        browser_name: browser.name,
        browser_version: browser.version,
        device_model: device.model,
        device_type: device.type,
        device_vendor: device.vendor,
        os_name: os.name,
        os_version: os.version,
        url_id: data.id,
        ip_address: ipAddress,
      });

      return NextResponse.redirect(data.original_url);
    }

    return NextResponse.redirect(origin);
  }
}
