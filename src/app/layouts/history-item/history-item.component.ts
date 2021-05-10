import {Component, Input} from '@angular/core';
import {WeatherData} from '../../shared/interfaces/weatherData';
import {FavoriteService} from '../../core/services/favorite.service';
import {MatDialog} from '@angular/material/dialog';
import {WeatherDialogComponent} from '../weather-dialog/weather-dialog.component';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent {
  @Input() historyItem: WeatherData;
  constructor(public favoriteservice: FavoriteService,
              public dialog: MatDialog) {
  }
  showDetails(weather: WeatherData): void {
    this.dialog.open(WeatherDialogComponent, {data: weather});
  }
}
