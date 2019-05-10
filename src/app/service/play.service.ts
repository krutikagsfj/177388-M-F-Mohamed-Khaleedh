import { Injectable } from '@angular/core';
import { GameList } from '../model/gameList.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayService {
  game: GameList[];
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/gameList';
  getGames() {
    return this.http.get<GameList[]>(this.baseUrl);
  }
  playGame(game:GameList) {
    return this.http.put(this.baseUrl + '/' +game.id, game);
  }
}
