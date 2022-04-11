import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesDataService } from '../games-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game!:Game ;
  games!:Game[];

  constructor(private gamesService:GamesDataService,private route:ActivatedRoute) {
    // this.game=new Game("","",0);
   }

  ngOnInit(): void {
    this.newGameList();
  }

  newGameList(){
    const gameId=this.route.snapshot.params["gameId"];
    this.gamesService.getGame(gameId).subscribe(game=>this.game=game);
  }

  newGameList1(){
    this.gamesService.getGames().subscribe((game) => {
      this.games = game;
    });
  }

  deleteGame(gameid:string):void{
    this.gamesService.deleteGame(gameid).subscribe(game=>{
      console.log("Game Deleted"); 
      // this.newGameList();
      this.newGameList1();
    });
  }

  

}
