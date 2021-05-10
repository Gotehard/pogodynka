import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coords} from '../../shared/interfaces/coords';
import {WeatherData} from '../../shared/interfaces/weatherData';
import {WeatherDialogComponent} from '../../layouts/weather-dialog/weather-dialog.component';
import {HistoryService} from './history.service';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {LoaderService} from './loader.service';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const apikey = '1d0fdbecc92cc86d320fae27296bfdbb';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  getWeatherData(coords: Coords): Subscription {
    return this.http.get<WeatherData>(URL + `?lat=${coords.lat}&lon=${coords.lng}&appid=${apikey}&units=metric&lang=pl`)
    .subscribe(responseWeatherData => {
      const weatherData: WeatherData = {
        coord: {
          lon: responseWeatherData.coord.lon,
          lat: responseWeatherData.coord.lat
        },
        weather: {
          0: {
            description: responseWeatherData.weather[0].description
          }
        },
        main: {
          temp: responseWeatherData.main.temp,
          feels_like: responseWeatherData.main.feels_like,
          pressure: responseWeatherData.main.pressure,
        },
        wind: {
          speed: responseWeatherData.wind.speed,
          deg: responseWeatherData.wind.deg
        },
        sys: {
          country: responseWeatherData.sys.country
        },
        name: responseWeatherData.name,
        date: Date.now()
      };
      this.historyservice.add(weatherData);
      this.dialog.open(WeatherDialogComponent, {data: weatherData});
      this.loader.isDisplay = false;
      return weatherData;
    });
  }
  constructor(private http: HttpClient,
              private historyservice: HistoryService,
              public dialog: MatDialog,
              public loader: LoaderService) {
  }
}
