import { Component } from '@angular/core';
import { BookStoreService, Book } from './books/index';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <book-search></book-search>
    </div>
  `,
  providers: [BookStoreService]
})
export class AppComponent {

  constructor() {
  }
}
