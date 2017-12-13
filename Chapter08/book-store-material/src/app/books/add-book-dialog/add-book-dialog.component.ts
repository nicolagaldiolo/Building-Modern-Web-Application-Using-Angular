import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'add-book-dialog',
  styleUrls: ['./add-book-dialog.component.scss'],
  template: `
    <h3>Add Book</h3>
    <form #form="ngForm" (ngSubmit)="dialogRef.close(form.value)" ngNativeValidate>

      <div fxLayout="column" fxLayoutGap="8px">

        <mat-input-container>
          <input matInput ngModel name="title" placeholder="Book Title" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel name="authors" placeholder="Authors" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel name="published" placeholder="Published" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel name="isbn" placeholder="ISBN" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel="https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/2380OT.jpg" name="coverImage" placeholder="Cover Image" required>
        </mat-input-container>

        <mat-input-container>
          <textarea matInput ngModel name="description" placeholder="Description" rows="3" cols="60" required></textarea>
        </mat-input-container>

      </div>

      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-button color="accent">Save Book</button>
      </mat-dialog-actions>
    </form>
  `
})

export class AddBookDialogComponent {

  constructor( private dialogRef: MatDialogRef<AddBookDialogComponent> ){} // dialogRef è di tipo MatDialogRef con un riferimento al componente stesso che dopo uso nel template per chiudere la finestra modale

}
