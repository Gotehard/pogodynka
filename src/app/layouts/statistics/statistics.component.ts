import {Component} from '@angular/core';
import {HistoryService} from '../../core/services/history.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  getMinTemp(): number {
    let minTem = this.historyservice.searchHistory[0].main.temp;
    this.historyservice.searchHistory.map(value => {
      const temp = value.main.temp;
      if (temp < minTem) {
        minTem = temp;
      }
    });
    return minTem;
  }
  getMaxTemp(): number {
    let maxTem = this.historyservice.searchHistory[0].main.temp;
    this.historyservice.searchHistory.map(value => {
      const temp = value.main.temp;
      if (temp > maxTem) {
        maxTem = temp;
      }
    });
    return maxTem;
  }

  getAvgTemp(): string {
    let sumOfTemp = 0;
    this.historyservice.searchHistory.map(value => { sumOfTemp += value.main.temp; });
    return (sumOfTemp / this.historyservice.searchHistory.length).toFixed(2);
  }

  constructor(public historyservice: HistoryService) {
  }

}
