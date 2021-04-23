  // temperatura, zachmurzenie, wiatr, ogólna informacja „description
export interface WeatherData {
  coords: {
    lat: number;
    lon: number;
  };
  weather: {
    description: string;
    temp: number;
    feels_like: number;
    pressure: number;
    wind: {
      speed: number;
      deg: number;
    };
  };
  city: {
  name: string;
  country: string;
  };
}
