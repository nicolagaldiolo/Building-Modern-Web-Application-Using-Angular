import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookStoreService} from "./book-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor( private bookStoreService: BookStoreService ) {}

  booksList : Book[] = [];
  book: Book;

  ngOnInit(){
    this.getBooksData();
  }

  getBooksData(){
    this.bookStoreService.getBooksList()
      .subscribe(books => this.booksList = books);
  }

  getBookInfo(id:number){
    this.bookStoreService.getBook(id)
      .subscribe(book => this.book = book);
  }

}
