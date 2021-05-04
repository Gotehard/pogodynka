import {Injectable} from '@angular/core';
import {WeatherData} from './shared/interfaces/weatherData';
import {LocalStorageNames} from './shared/enums/LocalStorageNames';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  searchHistory: WeatherData[] = [];

  add(weather: WeatherData): void {
    this.searchHistory.push(weather);
    this.localstorageservice.save(this.searchHistory, LocalStorageNames.HISTORY);
  }

  clear(): void {
    this.searchHistory = [];
    this.localstorageservice.clear(LocalStorageNames.HISTORY);
  }

  getHistory(): void {
    this.searchHistory = this.localstorageservice.get(LocalStorageNames.HISTORY);
  }

  constructor(private localstorageservice: LocalStorageService) {
  }
}
