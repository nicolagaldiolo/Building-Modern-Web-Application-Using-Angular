import { Component } from '@angular/core';
import { Book } from './books/book';
import { BookStoreService } from './books/book-store.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <book-search (search)="findBook($event)"></book-search>
      <books-list [books]="filteredBook"></books-list>
    </div>
  `,
  providers: [BookStoreService]
})
export class AppComponent {

  filteredBook: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  findBook(title: string){
    this.bookStoreService.getBooks(title)
      .subscribe( books => this.filteredBook = books);
  }
}
