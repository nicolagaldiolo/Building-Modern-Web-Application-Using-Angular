import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'books-list',
  templateUrl: './app.component.html'
})

export class AppComponent {
  booksList : Book[] = BOOKS;
  selectedBook : Book; // creo una variabile di tipo Book contentente l'array del libro selezionato
  
  getBookDetails(isbn : number){ // quando questo metodo viene invocato non faccio altro che andare a polare l'array selectedBook
    let arrayBook = this.booksList.filter( (book) => book.isbn === isbn );
    this.selectedBook = arrayBook[0];
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.booksList.filter( book => book.isbn !== isbn );
  }

}