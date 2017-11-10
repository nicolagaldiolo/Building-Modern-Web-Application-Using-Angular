import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookStoreService } from './book-store.service';
import { BookStoreServiceGraphQL } from './book-store-service-graphQL';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BookDetailsComponent],
    bootstrap: [AppComponent],
    // SCANARIO 1 caso base
    // dichiaro il service BookStoreService con lo shortcode (la chiave Token e la classe usata hanno lo stesso nome)
    //providers: [BookStoreService]

    // SCANARIO 2 attualmente prendo i dati dal datasource BookStoreService ma voglio iniziare a prenderli dal nuovo servizio e non voglio cambiare a mano tutti i riferimenti del service in tutti i componenti in cui lo uso
    // fornisco sempre il service BookStoreService ma la classe usata non è la sua ma quella di BookStoreServiceGraphQL
    //providers: [ {provide: BookStoreService, useClass: BookStoreServiceGraphQL }]

    // SCANARIO 3 in alcuni casi prendo i dati dal datasource BookStoreService, in altri li prendo dal nuovo datasource BookStoreServiceGraphQL e voglio mantenere entrambi i riferimenti funzionanti ma usare la stessa classe e soprattutto un unica instanza
    // fornisco il nuovo service BookStoreServiceGraphQL, e anche il vecchio BookStoreService ma per quest'ultimo la classe usata non è la sua ma quella di BookStoreServiceGraphQL
    providers: [ BookStoreServiceGraphQL, {provide: BookStoreService, useExisting: BookStoreServiceGraphQL }]
})
export class AppModule {
}
