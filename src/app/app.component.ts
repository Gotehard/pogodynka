import {Component, OnInit} from '@angular/core';
import {Coords} from './shared/interfaces/coords';
import {FavoriteService} from './favorite.service';
import {HistoryService} from './history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loaderIsShow = false;
  title = 'pogoda';
  cords: Coords;

  getCords($Coords: Coords): void {
    this.cords = $Coords;
  }

  displayLoader(isLoaderDisplay: boolean): void {
    this.loaderIsShow = isLoaderDisplay;
  }

  constructor(
    public historyservice: HistoryService,
    public favoriteservice: FavoriteService
  ) {
  }
  ngOnInit(): void {
    this.historyservice.getHistory();
    this.favoriteservice.getFavorite();
  }
}
