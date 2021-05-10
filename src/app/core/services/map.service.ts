import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {LeafletMouseEvent} from 'leaflet';
import {WeatherDialogComponent} from '../../layouts/weather-dialog/weather-dialog.component';
import {WeatherService} from './weather.service';
import {MatDialog} from '@angular/material/dialog';
import {WeatherData} from '../../shared/interfaces/weatherData';
import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map;
  private mapMarkers = [];

  makeMap(): void {
    this.map = L.map('map').setView([51.77, 19.44], 6);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });
    this.map.on('click', clickEvent => {
      this.loader.isDisplay = true;
      if (clickEvent.originalEvent.isTrusted) {
        this.weatherservice.getWeatherData(
          {
            lat: clickEvent.latlng.lat,
            lng: clickEvent.latlng.lng
          });
      }
    });
    tiles.addTo(this.map);
  }
  drawMarkers(favorite: WeatherData[]): void {
    this.mapMarkers.forEach( element => {
      this.map.removeLayer(element);
    });
    const Icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
    });

    favorite.map(elem => {
      const marker = L.marker([elem.coord.lat, elem.coord.lon], {
        icon: Icon,
        opacity: 0.8,
        title: elem.name
      })
        .addTo(this.map)
        .on('click', (clickEvent: LeafletMouseEvent) => {
          if (clickEvent.originalEvent.isTrusted) {
            this.dialog.open(WeatherDialogComponent, {data: elem});
          }
        });
      this.mapMarkers.push(marker);
    });
  }

  constructor(public weatherservice: WeatherService,
              public dialog: MatDialog,
              public loader: LoaderService) {
  }
}
