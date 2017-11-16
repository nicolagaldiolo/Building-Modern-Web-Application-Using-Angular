import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'book-search',
  styleUrls: ['./book-search.component.css'],
  template: `
    <h3 class="page-title">Book Search</h3>
    <div class="search-container">
      <div class="books-search-form">
        <input type="text" #searchInput class="search-input" placeholder="Book title">
        <button class="btn btn-primary">Search</button>
      </div>
      <ul>
        <li>Book title</li>
      </ul>
    </div>
  `
})

export class BookSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInputAliasName: ElementRef;
  bookTitle: Array<string> = [];

  ngOnInit(){
    const source = Observable.fromEvent(this.searchInputAliasName.nativeElement, 'keyup').map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value);
    source.subscribe(title => console.log(title));


  }
}
