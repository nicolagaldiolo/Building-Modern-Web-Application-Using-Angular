import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  constructor( private bookStoreService : BookStoreService ){}

  booksList: Book[] = [];

  ngOnInit(){
    this.getBookList();
  }

  getBookList(){
    this.bookStoreService.getBooks()
      .subscribe(books => this.booksList = books);
  }
}
