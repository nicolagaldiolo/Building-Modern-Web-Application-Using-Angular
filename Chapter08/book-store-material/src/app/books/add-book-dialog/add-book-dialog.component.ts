import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'add-book-dialog',
  styleUrls: ['./add-book-dialog.component.scss'],
  templateUrl: './add-book-dialog.component.html'
})

export class AddBookDialogComponent {

  constructor( private dialogRef: MatDialogRef<AddBookDialogComponent>){}

}
