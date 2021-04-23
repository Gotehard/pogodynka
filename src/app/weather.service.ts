import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cords} from './cords';
import {Observable} from 'rxjs';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const apikey = '1d0fdbecc92cc86d320fae27296bfdbb';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private coords: Cords;

  constructor(private http: HttpClient) {
    this.coords = {lng: 0, lat: 0};
  }

  getWeatherData(): Observable<any> {
    if (this.coords !== undefined) {
    return this.http.get<any>(URL + `?lat=${this.coords.lat}&lon=${this.coords.lng}&appid=${apikey}&units=metric&lang=pl`);
    }
  }

  setCoords(c: Cords): void {
    this.coords = c;
  }
  getCoords(): Cords {
    return this.coords;
  }
}
