import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json({ error: "Location is required" }, { status: 400 });
  }

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`
  );

  const data = await response.json();

  return NextResponse.json(data);
}
