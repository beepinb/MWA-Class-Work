import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  #_id!:string;

  constructor(private gamesService:GamesDataService,private router:Router) { }

  ngOnInit(): void { 

  }
@Input()
  set Id(id:string){
    
    this.#_id=id;
    // console.log(this.Id);
  }
  
  onDelete():void{
    this.gamesService.deleteGame(this.#_id).subscribe(game=>{
      console.log("Game is: ",game);
      this.router.navigate(["games"]);
    });
      
  }

}
