import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'royal-comfirmation-dialog',
  templateUrl: './comfirmation-dialog.component.html',
  styleUrls: ['./comfirmation-dialog.component.scss']
})
export class ComfirmationDialogComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<ComfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close({ isUsed: false });
  }

  comfirmChoice(){
    this.dialogRef.close({ isUsed: true });
  }

}
