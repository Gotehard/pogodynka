import {Component, AfterViewInit, EventEmitter, Output} from '@angular/core';
import * as L from 'leaflet';
import {Cords} from '../cords';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [WeatherService]
})
export class MapComponent implements AfterViewInit {
  private map;
  @Output() sendCords = new EventEmitter<Cords>();

  private MapOnInit(): void {
    this.map = L.map('map').setView([51.77, 19.44], 6);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });
    this.map.on('click', e => {
      console.log(e.latlng);
      this.sendCords.emit({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    });
    tiles.addTo(this.map);
  }


  constructor(public weatherservice: WeatherService) {
  }

  ngAfterViewInit(): void {
    this.MapOnInit();
  }

}
