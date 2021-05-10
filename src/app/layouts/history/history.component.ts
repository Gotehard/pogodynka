import {Component} from '@angular/core';
import {HistoryService} from '../../core/services/history.service';
import {WeatherData} from '../../shared/interfaces/weatherData';
import {FavoriteService} from '../../core/services/favorite.service';

const limit = 10;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  actualPage = 0;

  clearHistory(): void {
    this.historyservice.clear();
    this.actualPage = 0;
  }

  getPagList(): WeatherData[] {
    return this.historyservice.searchHistory.slice(this.actualPage * limit, ((this.actualPage + 1) * limit));
  }

  nextPage(): void {
    if ((this.actualPage + 1) * limit < this.historyservice.searchHistory.length) {
      this.actualPage++;
    }
  }

  getLastPageNum(): number {
    if (this.historyservice.searchHistory.length > 0) {
      return Math.floor((this.historyservice.searchHistory.length - 1) / 10);
    } else {
      return 0;
    }
  }

  prevPage(): void {
    this.actualPage = this.actualPage > 0 ? this.actualPage - 1 : 0;
  }


  constructor(
    public favoriteservice: FavoriteService,
    public historyservice: HistoryService
  ) { }

}
