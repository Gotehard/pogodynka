import {Component} from '@angular/core';
import {Coords} from './shared/interfaces/coords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  loaderIsShow = false;
  title = 'pogoda';
  cords: Coords;
  getCords($Coords: Coords): void {
    this.cords = $Coords;
  }
  displayLoader(isLoaderDisplay: boolean): void {
    this.loaderIsShow = isLoaderDisplay;
  }
}
