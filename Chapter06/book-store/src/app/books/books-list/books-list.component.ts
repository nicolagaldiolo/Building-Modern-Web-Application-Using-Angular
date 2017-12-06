import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class BooksListComponent implements OnInit {

  constructor( private bookStoreService : BookStoreService ){}

  booksList: Book[] = [];
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  ngOnInit(){
    this.getBookList();
  }

  getBookList(){
    this.bookStoreService.getBooks()
      .subscribe(books => this.booksList = books);
  }
}
