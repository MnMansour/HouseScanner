import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SigninComponent } from "../signin/signin.component";
import { SigninmobileComponent } from "../signinmobile/signinmobile.component";
import { SignupmobileComponent } from "../signupmobile/signupmobile.component";






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private dialog:MatDialog) { }

  ngOnInit() {
  }

  openSign(): void{
    this.dialog.open(SigninComponent, {width:'80%', height:'auto'})
  }

  openSignIn(): void{
    this.dialog.open(SigninmobileComponent, {width:'80%', height:'auto'})
  }

  openSignUp(): void{
    this.dialog.open(SignupmobileComponent, {width:'80%', height:'auto'})
  }

}
