import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';

// Definisco l'array di routes che è di tipo Routes per poi darlo in pasto a RouterModule.
const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // uso for child perchè è un sottomodulo
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }
