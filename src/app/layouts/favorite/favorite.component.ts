import { Component } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{

  constructor(public favoriteservice: FavoriteService) { }

}
