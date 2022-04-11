import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private gamesService:GamesDataService,private router:Router) {
    // this.registrationForm=new FormGroup({
      // title:new FormControl(),
      // year:new FormControl(),
      // rate:new FormControl(),
      // // //repeatPassword:new FormControl()
      
      this.registrationForm=this.formBuilder.group({
        title:"",
        year:"",
        rate:"",
        price:""
      })
    // })
   }

  ngOnInit(): void {
    
  }

  register(registrationForm:FormGroup){
    console.log("form Submitted");
    console.log(registrationForm.value);
    this.gamesService.postGames(registrationForm.value).subscribe(
      {
        next:game=>{
          console.log("Game added");
          console.log(game);
          this.router.navigate(["games"]);
        },
        error:err=>{
          console.log("Service Error:",err);
        },
        complete:()=>{
          console.log("Done");
        }
      })
    
  }

}
