import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class Credentials{
  username!:string;
  password!:string;

  constructor(username:string,password:string){
    this.username=username;
    this.password=password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChild('loginForm')
  loginForm!:NgForm;


  // credentials:Credentials=new Credentials();
  credintials!:Credentials;

  // username:string="Jack";
  // password:string="123";

  constructor() {
    this.credintials=new Credentials("Jack","abc");
   }

  ngOnInit(): void {
    console.log("form",this.loginForm);
    setTimeout(() => {
    console.log("timeout form",this.loginForm);

      this.loginForm.setValue(this.credintials);
    }, 0);
    
  }

  

  login(loginForm:NgForm):void{
    console.log("Login Called");
    console.log(loginForm.value);

    // console.log("Username:",this.username);
    // console.log("Password:",this.password);
    // console.log("Username:",this.credentials.username);
    
    
  }

}
