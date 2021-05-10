import {AfterViewInit, Component} from '@angular/core';
import {WeatherService} from '../../core/services/weather.service';
import {MapService} from '../../core/services/map.service';
import {FavoriteService} from '../../core/services/favorite.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [WeatherService]
})
export class MapComponent implements AfterViewInit {

  constructor(public mapservice: MapService,
              public favoriteservice: FavoriteService) {
  }

  ngAfterViewInit(): void {
    this.mapservice.makeMap();
    this.mapservice.drawMarkers(this.favoriteservice.Favorite);
  }

}
