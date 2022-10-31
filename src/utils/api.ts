const OPEN_WEATHER_API_KEY = "a864c7ccda390d1643a42325cc3c0cc5";

export interface OpenWeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export const fetchOpenWeatherData = async (
  city: string
): Promise<OpenWeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
  );

  if (!res.ok) throw new Error("City not found");

  const data: OpenWeatherData = await res.json();
  return data;
};
