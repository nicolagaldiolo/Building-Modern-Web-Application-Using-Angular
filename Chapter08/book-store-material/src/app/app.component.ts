import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BookStoreService } from "./books/book-store.service";
import { AddBookDialogComponent } from "./books";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [{
    name: 'Books'
  }];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private bookStoreService: BookStoreService){}

  openAddBookDialog(){
    this.dialog.open(AddBookDialogComponent)
      .afterClosed()
      .filter(book => {
        console.log(book);
      })
    //this.openSnackBar();
  }

  openSnackBar(){
    this.snackBar.open('Book Added', 'CLOSE', {
      duration: 3000
    });
  }
}
