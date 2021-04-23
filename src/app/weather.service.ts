import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coords} from './shared/interfaces/coords';
import {Observable} from 'rxjs';
import {WeatherData} from './shared/interfaces/weatherData';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const apikey = '1d0fdbecc92cc86d320fae27296bfdbb';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  getWeatherData(coords: Coords): Observable<WeatherData> {
    return this.http.get<WeatherData>(URL + `?lat=${coords.lat}&lon=${coords.lng}&appid=${apikey}&units=metric&lang=pl`);
  }
  constructor(private http: HttpClient) {
  }
}
