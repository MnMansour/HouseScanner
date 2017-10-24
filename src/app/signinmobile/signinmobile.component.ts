import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-signinmobile',
  templateUrl: './signinmobile.component.html',
  styleUrls: ['./signinmobile.component.css']
})
export class SigninmobileComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<SigninmobileComponent>) { }

  ngOnInit() {
  }

  noClick(): void{
    this.dialogRef.close();    
  } 
  
}
