import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {WeatherComponent} from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { LoaderComponent } from './loader/loader.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WeatherDialogComponent } from './weather-dialog/weather-dialog.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import {MaterialImportsModule} from './material-imports/material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    HistoryComponent,
    LoaderComponent,
    StatisticsComponent,
    FavoriteComponent,
    WeatherDialogComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
