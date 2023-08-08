import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-dialog',
  templateUrl: './owner-dialog.component.html',
  styleUrls: ['./owner-dialog.component.scss']
})
export class OwnerDialogComponent {

  constructor(public dialogRef: MatDialogRef<OwnerDialogComponent>) {}

  onYesClick(){
   this.dialogRef.close('YES');
  }
  onNoclick(){
     this.dialogRef.close();
  }
}

