"use client";
import { useState } from "react";
import Current from "../components/Current";
import Input from "../components/Input";
import WeekForecast from "../components/WeekForecast";
import WeatherDetails from "../components/WeatherDetails";
import { useWeather } from "../hooks/useWeather";
import { FiCloudRain, FiSun, FiWind } from "react-icons/fi";

export default function Home() {
  const [location, setLocation] = useState("");
  const { data, error, isError, isPending } = useWeather(location);

  let content;
  if (!location) {
    content = (
      <div className="text-center h-screen mt-[5rem]">
        <h2 className="md:text-5xl text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Weather Insight
        </h2>
        <p className="md:text-xl text-lg font-semibold text-gray-600">
          Enter a city name to get real-time weather updates
        </p>
        <div className="mt-8 flex justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <FiSun className="text-2xl" />
            <span>Temperature</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCloudRain className="text-2xl" />
            <span>Precipitation</span>
          </div>
          <div className="flex items-center gap-2">
            <FiWind className="text-2xl" />
            <span>Wind</span>
          </div>
        </div>
      </div>
    );
  } else if (isPending) {
    content = (
      <div className="text-center h-screen mt-[5rem]">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="text-center h-screen mt-[5rem]">
        <h2 className="md:text-4xl text-2xl text-red-500 font-semibold mb-4">
          Location Not Found
        </h2>
        <p className="md:text-xl text-lg text-gray-600">
          Please enter a valid city name
        </p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-6 md:mb-0">
            WeatherApp
          </h1>
          <Input setLocation={setLocation} />
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
          {content}
        </div>
      </div>
    </div>
  );
}
