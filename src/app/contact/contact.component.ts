import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  user={FirstName:"",LastName:"",Email:"",message:""};

  constructor() { }

  ngOnInit() {
  }

  restform(){
    this.user={FirstName:"",LastName:"",Email:"",message:""};
  }

  onSubmit(){
    console.log("User Info Is: ", this.user);
    alert('Massege Sent Successful');
    this.restform();
  }

}
