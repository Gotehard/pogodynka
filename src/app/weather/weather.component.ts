import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cords} from '../cords';
import {WeatherService} from '../weather.service';
import {WeatherData} from '../weatherData';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  w: WeatherData;
  // tslint:disable-next-line:variable-name
  // private _c: Cords = {lng: 0, lat: 0};
  // tslint:disable-next-line:variable-name
  private _c: Cords;

  constructor(public weatherservice: WeatherService, public historyservice: HistoryService) {
  }
  @Output() displayLoader = new EventEmitter();

  @Input()
  get c(): Cords {
    return this._c;
  }
  set c(value: Cords) {
    this._c = value;
    this.weatherservice.setCoords(this.c);
    this.displayLoader.emit(true);
    this.getWeatherInfo();
  }

  klik(): void {
    console.warn(this.w);
  }

  getWeatherInfo(): void {
    this.weatherservice.getWeatherData().subscribe(d => {
      this.w = {
        coords: {
          lat: d.coord.lat,
          lon: d.coord.lon
        },
        weather: {
          description: d.weather[0].description,
          temp: d.main.temp,
          feels_like: d.main.feels_like,
          pressure: d.main.pressure,
          wind: {
            speed: d.wind.speed,
            deg: d.wind.deg
          }
        },
        city: {
          name: d.name,
          country: d.sys.country
        }
      };
      this.historyservice.add(this.w);
      this.displayLoader.emit(false);
      console.log(this.historyservice.searchHistory);
    });
  }

  ngOnInit(): void {
    this._c = {lng: 0, lat: 0};
    this.weatherservice.setCoords({lng: 0, lat: 0});
    this.historyservice.gethist();
    this.displayLoader.emit(false);
  }

}
