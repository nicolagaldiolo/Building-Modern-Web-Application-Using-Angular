import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookStoreService } from './book-store.service';

@Component({
  selector: 'books-list',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  booksList : Book[] = [];
  selectedBook : Book; // creo una variabile di tipo Book contentente l'array del libro selezionato

  constructor( private bookStoreService: BookStoreService){
    // invece di istanziare un oggetto BookStoreService lo passo come parametro al costruttore usando la Dependency Injection di angular. (angular andrà a matchare BookStoreService con il servizio dichiarato nell'array providers per creare un istanza del servizio).
      // se voglio che bookStoreService sia disponibile anche fuori dal costruttore uso il costrutto private, se voglio che sia disponibile anche a livello di template devo usare public.
  }

  // il metodo getBookList mi torna l'elenco di tutti i libri disponibili. Questo è il metodo default che dovrà essere chiamato al caricamento del componente.
  // Invece di chiamare questo medoto nel costruttore (come viene fatto generalmente) uso il decoratore ngOnInit che è un hook del ciclo di vita di un componente angular e viene chiamato ogni volta che il componente viene creato.
  // il costruttore ha solo il compito di inizializzare l'oggetto non del fetch dei dati, a quello ci pensa ngInit.

  ngOnInit(){
    this.getBooksList();
  }

  getBooksList(){
    this.booksList = this.bookStoreService.getBooks();
  }

  getBookDetails(isbn : number){ // quando questo metodo viene invocato non faccio altro che andare a polare l'array selectedBook
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }

}
