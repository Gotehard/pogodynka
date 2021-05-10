import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../core/services/weather.service';
import {FavoriteService} from '../../core/services/favorite.service';
import {MatDialog} from '@angular/material/dialog';
import {LoaderService} from '../../core/services/loader.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(public weatherservice: WeatherService,
              public favoriteservice: FavoriteService,
              public loader: LoaderService,
              public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.loader.isDisplay = false;
  }
}
