// Un service in Angular è semplicemente una classe con lo scopo di essere un access point per tutta l'app. Può essere visto un pò come lo stato di React
// Il servizio è instanziato a livello di modulo e ha visibilità su tutto il modulo e componenti figli. è qualcosa che sta al di sopra dei componenti e vive in tutto il modulo.

import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
// il decoratore @Injectable() di per sè non fa nulla, è un decoratore vuoto. Con il decoratore @Injectable stiamo dicendo che Angular può iniettare delle dipendenze
// all'interno di questo servizio e di conseguenza questa classe entra nel "ciclo di vita" di Angular

export class BookStoreService {

  booksList: Book[] = BOOKS;

  getBooks() {
    return this.booksList;
  }

  getBook(isbn: number) {
    return this.booksList.find(book => book.isbn === isbn);
  }

  deleteBook(isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}