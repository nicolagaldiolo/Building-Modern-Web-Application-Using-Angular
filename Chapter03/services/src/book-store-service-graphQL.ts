import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
// il decoratore @Injectable() di per sè non fa nulla, è un decoratore vuoto. Con il decoratore @Injectable stiamo dicendo che Angular può iniettare delle dipendenze
// all'interno di questo servizio e di conseguenza questa classe entra nel "ciclo di vita" di Angular

export class BookStoreServiceGraphQL {
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