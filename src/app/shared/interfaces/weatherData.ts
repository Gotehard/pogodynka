export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    0: {
      description: string;
    }
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
    name: string;
    date: number;
}
