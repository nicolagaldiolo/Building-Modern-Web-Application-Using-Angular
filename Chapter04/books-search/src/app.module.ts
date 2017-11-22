import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/books-list.component';
import { BookSearchComponent } from './books/book-search/book-search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookListComponent
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
