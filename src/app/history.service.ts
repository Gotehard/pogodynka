import { Injectable } from '@angular/core';
import { WeatherData } from './weatherData';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  searchHistory: WeatherData[] = [];

  add(weather: WeatherData): void{
    this.searchHistory.push(weather);
    console.log(this.searchHistory);
    localStorage.setItem('hist', JSON.stringify(this.searchHistory));
  }

  clear(): void {
    this.searchHistory = [];
    localStorage.setItem('hist', JSON.stringify(this.searchHistory));
  }
  constructor() { }
  gethist(): void {
    const storageGet = JSON.parse(localStorage.getItem('hist'));
    console.log(storageGet);
    if (storageGet !== null) {
    this.searchHistory = storageGet;
    }
  }
}
