import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    template: `
        <div class="container p-4">
            <input #text class="form-control mt-2" />
            <button #btn class="btn btn-primary mt-3">Show Message!</button>
            <hr>
            <h1 class="mt-4">Output: {{message}}</h1>
        </div>
    `
})
export class AppComponent implements OnInit {
    @ViewChild('btn') btn: ElementRef; // @ViewChild mi permette di accedere all'oggetto con il relativo id e specifico che l'id relativo è di tipo ElementRef
    @ViewChild('text') text: ElementRef;
    message: string;

    ngOnInit() {

      // METODO 1 (Bad Practice) creo due observable distinti
      //const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click');
      //btnOb$.subscribe(res => this.message = 'Hello Angular, RxJS!');

      //const textOb$ = Observable.fromEvent(this.text.nativeElement, 'keyup').map((event: Event) => (<HTMLInputElement>event.target).value);
      //textOb$.subscribe(res => this.message = res);


      // METODO 2 (Best Practice) creo due observable distinti ma li convergo in uno unico

      const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click')
          .map(event => 'Hello Angular, RxJS!');
      // nativeElement mi permettere di accedere al relativo oggetto dom

      const textOb$ = Observable.fromEvent(this.text.nativeElement, 'keyup')
          .map((event: Event) => (<HTMLInputElement>event.target).value);

      Observable.merge(btnOb$, textOb$).subscribe(res => this.message = res);
      //il metodo merge() mi permette di unire 2 observable e crearne uno unico al quale mi iscrivo con subscribe()

    }
}