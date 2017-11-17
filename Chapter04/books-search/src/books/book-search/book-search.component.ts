import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInputAliasName: ElementRef;
  bookTitles: Array<string> = [];

  constructor( private bookStoreService : BookStoreService){

  }

  ngOnInit(){
    Observable.fromEvent(this.searchInputAliasName.nativeElement, 'keyup')
      .debounceTime(400) // ritarda 400ms l'emissione di un valore per migliorare le performance e non lanciare richieste inutili
      .distinctUntilChanged() // lancia la richiesta solo se il valore del campo input è diverso dalla richiesta precedente
      .map( (event: KeyboardEvent) =>
        (<HTMLInputElement>event.target).value)
      .switchMap(title =>
        this.bookStoreService.getBookTitles(title))
          .subscribe( bookTitles => this.bookTitles = bookTitles );

      // USO .map() QUANDO CIò CHE TORNO è UN VALORE, USO .switchMap() quando torno un observable
  }
}
