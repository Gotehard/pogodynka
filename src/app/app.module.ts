import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {WeatherComponent} from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { LoaderComponent } from './loader/loader.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    HistoryComponent,
    LoaderComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
