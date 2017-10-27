import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  show="show";
  hide="hide";
  autoplay="";
  
  ngOnInit() {
  }
  convert(){
    this.show="hide";
    this.hide="show";
    this.autoplay="autoplay"
  }
}
