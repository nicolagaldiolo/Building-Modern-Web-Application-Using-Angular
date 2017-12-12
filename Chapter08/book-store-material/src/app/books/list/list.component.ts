import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'bl-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  booksList: Book[] = [];
  spinnerVisibility = 'block';

  constructor(private bookStoreService: BookStoreService, private snackBar : MatSnackBar) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookStoreService
      .getBooks()
      .subscribe(response => {
        this.booksList = response;
        this.spinnerVisibility = 'none';
      });
  }

  deleteBook(id: number) {
    this.booksList = this.booksList.filter(book => book.id !== id);
    this.bookStoreService.deleteBook(id)
      .subscribe(result => {
        if(result){
          this.openSnackBar();
        }
        this.getBooks();
      });
  }

  openSnackBar(){
    this.snackBar.open('Book Deleted', 'CLOSE', {
      duration: 3000
    });
  }
}
