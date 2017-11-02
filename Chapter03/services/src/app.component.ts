import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookStoreService } from './book-store.service';

@Component({
  selector: 'books-list',
  templateUrl: './app.component.html',
  providers: [BookStoreService]
})

export class AppComponent implements OnInit {
  booksList : Book[] = [];
  selectedBook : Book; // creo una variabile di tipo Book contentente l'array del libro selezionato
  
  constructor(private bookStoreService: BookStoreService){

  }

  ngOnInit(){
    this.getBooksList();
  }

  getBooksList(){
    this.booksList = this.bookStoreService.getBooks();
  }

  getBookDetails(isbn : number){ // quando questo metodo viene invocato non faccio altro che andare a polare l'array selectedBook
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }

}
