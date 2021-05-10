import {Component, OnInit} from '@angular/core';
import {FavoriteService} from './core/services/favorite.service';
import {HistoryService} from './core/services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pogoda';


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
