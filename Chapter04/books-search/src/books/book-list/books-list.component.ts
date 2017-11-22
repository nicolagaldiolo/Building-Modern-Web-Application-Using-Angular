import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'books-list',
  template: `
    <div class="row mt-1">
      <div class="col-sm-12">
        <div class="row">
          <div *ngFor="let book of books" class="col-sm-3 book-item">
            <div class="cover-image-container">
              <img [src]="book.coverImage" alt="cover image">
              <span>{{book.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./books-list.component.css']
})

export class BookListComponent {

  @Input() books: Book[] = [];

}


