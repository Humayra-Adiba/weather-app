"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weather";

export const useWeather = (location: string) => {
  console.log("Query: location", location);
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => fetchWeather(location),
    enabled: !!location,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}; 