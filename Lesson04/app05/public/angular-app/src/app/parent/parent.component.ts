import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  x:number=4;
  y:number=4;
  z:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  setZ(message:number):void{
    this.z=message;
  }

}
