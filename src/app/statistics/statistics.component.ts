import {Component} from '@angular/core';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  getMinTemp(): any {
    let minTem = this.historyservice.searchHistory[0].weather.temp;
    this.historyservice.searchHistory.map(value => {
      const temp = value.weather.temp;
      if (temp < minTem) {
        minTem = temp;
      }
    });
    return minTem;
  }
  getMaxTemp(): any {
    let maxTem = this.historyservice.searchHistory[0].weather.temp;
    this.historyservice.searchHistory.map(value => {
      const temp = value.weather.temp;
      if (temp > maxTem) {
        maxTem = temp;
      }
    });
    return maxTem;
  }

  getAvgTemp(): any {
    let sumOfTemp = 0;
    this.historyservice.searchHistory.map(value => { sumOfTemp += value.weather.temp; });
    return (sumOfTemp / this.historyservice.searchHistory.length).toFixed(3);
  }

  constructor(public historyservice: HistoryService) {
  }

}
