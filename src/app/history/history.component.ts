import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../history.service';
import {WeatherData} from '../weatherData';

const limit = 10;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  fav: WeatherData[] = [];
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

  addToFav(w: WeatherData): void {
    let canAdd = true;
    this.fav.forEach(elem => {
      if (elem === w) {
        this.fav.splice(this.fav.indexOf(w), 1);
        canAdd = false;
      }
    });
    if (canAdd) {
      this.fav.push(w);
    }
    localStorage.setItem('fav', JSON.stringify(this.fav));
  }

  isFav(w: WeatherData): boolean {
    let t = false;
    this.fav.map(m => {
      if (m === w) {
        t = true;
      }
    });
    return t;
  }

  constructor(public historyservice: HistoryService) {
  }

  ngOnInit(): void {
    const storageGet = JSON.parse(localStorage.getItem('fav'));
    console.log(storageGet);
    if (storageGet !== null) {
      this.fav = storageGet;
    }
  }


}
