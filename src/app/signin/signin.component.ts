import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<SigninComponent>) { }

  ngOnInit() {
  }

  noClick(): void{
    this.dialogRef.close();    
  }

}
