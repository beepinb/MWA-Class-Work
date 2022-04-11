import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  
  private baseUrl:string=environment.REST_API_BASE; //"http://localhost:5656/api/";    // environment.REST_API_BASE;   //


  constructor(private http:HttpClient) { }

  // public getGames():Promise<Game[]>{
  //   const url:string=this.baseUrl+"games";
  //   return this.http.get(url).toPromise()
  //   .then(response=>response as Game[]);
  // }

  public getGames():Observable<Game[]>{
    const url:string=this.baseUrl+"games";
    return this.http.get<Game[]>(url);
  }
  public postGames(data:any){
    const url:string=this.baseUrl+"games";
    console.log("data",data);
    
    return this.http.post(url,data);
  }
  
  public getGame(gameId:string):Observable<Game>{
    const url:string=this.baseUrl+"games/"+gameId;
    return this.http.get<Game>(url);
  }
  public deleteGame(gameId:string):Observable<Game>{
    const url:string=this.baseUrl+"games/"+gameId;
    return this.http.delete<Game>(url);
  }


  // getGames():Array<Game>{
  //   let games=new Array<Game>(2);
  //   games[0]=new Game("Catan",39.99);
  // }
}
