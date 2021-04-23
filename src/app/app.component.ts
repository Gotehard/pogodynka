import {Component} from '@angular/core';
import {Cords} from './cords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  loaderIsShow = false;
  title = 'pogoda';
  cords: Cords;
  getCords($event): void {
    this.cords = $event;
  }
  displayLoader(disp: boolean): void {
    this.loaderIsShow = disp;
  }
}
