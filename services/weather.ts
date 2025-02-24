

export const fetchWeather = async (location: string) => {

  const response = await fetch(
    `/api/getWeather?location=${location}`
  );
  if (!response.ok) throw new Error("City not found");
  return response.json();
}; 