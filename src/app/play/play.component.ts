import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GameList } from '../model/gameList.model';
import { PlayService } from '../service/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  prc: number;
  game: GameList[];
  constructor(private pService: PlayService, private router: Router) { }

  ngOnInit() {
    this.pService.getGames()
      .subscribe((data: GameList[]) => {
        this.game = data;
      });
  }
  playNow(game: GameList) {
    this.prc = game.gamePrice;
    localStorage.removeItem("gamePrice");
    localStorage.removeItem("gameName");
    localStorage.setItem("gamePrice", game.gamePrice.toString());
    localStorage.setItem("gameName", game.gameName);
    this.router.navigate(['success']);

  }


}
