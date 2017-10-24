import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-signupmobile',
  templateUrl: './signupmobile.component.html',
  styleUrls: ['./signupmobile.component.css']
})
export class SignupmobileComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<SignupmobileComponent>) { }

  ngOnInit() {
  }

  noClick(): void{
    this.dialogRef.close();    
  }

}
