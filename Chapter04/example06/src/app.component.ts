import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    template: `
        <div class="container p-4">
            <h1 class="mt-4">{{timerOnlyObservable | async}}</h1>
            <h1 class="mt-4">{{timer}}</h1>
        </div>
    `
})


// GENERALMENTE POSSO ACCEDERE AI VALORI DI UN OBSERVABLE SOLO CON IL METODO subscribe() IN QUANTO UN OBSERVABLE è UN OGGETTO.
// ANGULAR METTE A DISPOSIZIONE IL PIPE async CHE MI PERMETTE DI ACCEDERE AD UN VALORE EMESSO DA UN OBESERVABLE DIRETTAMENTE NELLA VIEW.

export class AppComponent implements OnInit {
    // posso creare il mio observable senza che nessuno si iscriva e stamparlo direttamente nella view usando il pipe async
    timerOnlyObservable = Observable.interval(1000).map( () => new Date() );

    // oppure posso creare un observable e fare la sottoscrizione
    timer: string;
    ngOnInit() {
      const timer$ = Observable.interval(1000).map( () => new Date() );
      timer$.subscribe(res => this.timer = res.toString());
    }
}