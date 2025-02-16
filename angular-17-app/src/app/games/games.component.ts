import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <h2>Username: {{ username }}</h2>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
    
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(game: string) {
    this.addFavoriteEvent.emit(game);
  }
  games = [
    {
      id: 1,
      name: 'Super Mario Bros'
    },
    {
      id: 2,
      name: 'Zelda'
    },
    {
      id: 3,
      name: 'Donkey Kong'
    }
  ]
}
