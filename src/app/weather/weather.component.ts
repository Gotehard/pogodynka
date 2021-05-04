import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coords} from '../shared/interfaces/coords';
import {WeatherService} from '../weather.service';
import {WeatherData} from '../shared/interfaces/weatherData';
import {HistoryService} from '../history.service';
import {FavoriteService} from '../favorite.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherData;
  private _coords: Coords;

  constructor(public weatherservice: WeatherService,
              public historyservice: HistoryService,
              public favoriteservice: FavoriteService
  ) {
  }

  @Output() displayLoader: EventEmitter<boolean> = new EventEmitter();

  @Input()
  get coords(): Coords {
    return this._coords;
  }

  set coords(coords: Coords) {
    this._coords = coords;
    if (coords) {
      this.displayLoader.emit(true);
      this.getWeatherInfo();
    }
  }

  getWeatherInfo(): void {
    if (this.weatherservice.getWeatherData(this.coords) === undefined) {
      return;
    }
    this.weatherservice.getWeatherData(this.coords).subscribe(responseWeatherData => {
        this.weatherData = {
          coord: {
            lat: responseWeatherData.coord.lat,
            lon: responseWeatherData.coord.lon
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
          name: responseWeatherData.name
        };
        this.historyservice.add(this.weatherData);
        this.displayLoader.emit(false);
      },
    )
    ;
  }

  ngOnInit(): void {
    this.favoriteservice.getFavorite();
    this.historyservice.getHistory();
    this.displayLoader.emit(false);
  }

}
