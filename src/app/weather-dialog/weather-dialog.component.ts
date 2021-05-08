import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WeatherData} from '../shared/interfaces/weatherData';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.css']
})
export class WeatherDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: WeatherData) { }
}
