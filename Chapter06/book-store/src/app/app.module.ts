import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { BookStoreService } from './books/book-store.service';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { NewBookComponent } from './books/new-book/new-book.component';

import { Safe } from './safe';

// Definisco l'array di routes che è di tipo Routes per poi darlo in pasto a RouterModule.
const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    Safe
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
