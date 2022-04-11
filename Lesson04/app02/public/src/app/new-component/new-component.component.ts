import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  people:string[]=["Jack","John","Jane","James","Jill"];
  students=[{name:"Jack",course:"MWA",gpa:3.0},
  {name:"John",course:"MPP",gpa:3.4},
  {name:"Jane",course:"FPP",gpa:3.8}];
  title:string="This is the title";
  oldTitle:string="New Title";
  price:number=123.546;
  today:Date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    let title=this.title;
    this.title=this.oldTitle;
    this.oldTitle=title;
    // this.title="New Title";
  }

}
