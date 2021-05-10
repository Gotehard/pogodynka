import {Injectable} from '@angular/core';
import {WeatherData} from '../../shared/interfaces/weatherData';
import {LocalStorageNames} from '../../shared/enums/LocalStorageNames';
import {LocalStorageService} from './local-storage.service';
import {MapService} from './map.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  Favorite: WeatherData[] = [];

  addToFavorite(w: WeatherData): void {
    if (!this.isFavorite(w)) {
      this.Favorite.push(w);
    } else {
      this.Favorite.splice(this.Favorite.indexOf(w), 1);
    }
    this.mapservice.drawMarkers(this.Favorite);
    this.localstorageservice.save(this.Favorite, LocalStorageNames.FAVORITE);
  }

  isFavorite(weather: WeatherData): boolean {
    return this.Favorite.some((weatherElem: WeatherData) => weatherElem === weather);
  }

  getFavorite(): void {
    this.Favorite = this.localstorageservice.get(LocalStorageNames.FAVORITE);
  }

  constructor(private localstorageservice: LocalStorageService,
              private mapservice: MapService) {
  }
}
