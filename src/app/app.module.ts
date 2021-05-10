import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {MapComponent} from './layouts/map/map.component';
import {WeatherComponent} from './layouts/weather/weather.component';
import { HistoryComponent } from './layouts/history/history.component';
import { LoaderComponent } from './layouts/loader/loader.component';
import { StatisticsComponent } from './layouts/statistics/statistics.component';
import { FavoriteComponent } from './layouts/favorite/favorite.component';
import { WeatherDialogComponent } from './layouts/weather-dialog/weather-dialog.component';
import { HistoryItemComponent } from './layouts/history-item/history-item.component';
import {MaterialImportsModule} from './shared/material-imports.module';

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
