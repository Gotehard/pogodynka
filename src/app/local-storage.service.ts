import { Injectable } from '@angular/core';
import {WeatherData} from './shared/interfaces/weatherData';
import {LocalStorageNames} from './shared/enums/LocalStorageNames';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  save(dataToSave: WeatherData[], storageName: LocalStorageNames): void {
    localStorage.setItem(storageName, JSON.stringify(dataToSave));
  }

  clear(storageName: LocalStorageNames): void {
    localStorage.setItem(storageName, JSON.stringify([]));
  }

  get(storageName: LocalStorageNames): WeatherData[] {
    return JSON.parse(localStorage.getItem(storageName)) || [];
  }
  constructor() { }
}
