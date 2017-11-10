import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookStoreService } from './book-store.service';
import { ConsoleLoggerService } from './console-loggerservice';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BookDetailsComponent],
    bootstrap: [AppComponent],
    providers: [BookStoreService, ConsoleLoggerService]
    // instanzio il providers a livello di modulo così sarà disponibile in tutti i sottomoduli e componenti del modulo. Dichiarare un service dentro l'array providers è il modo con cui Angular instanzia gli oggetti service.
    // [BookStoreService] è uno schortcat in realtà l'oggetto viene instanziato in questo modo: [{ provide: BookStoreService, useClass: BookStoreService }]
    // ConsoleLoggerService è una dipendenza di BookStoreService e deve comunque essere iniettato all'interno del providers
})
export class AppModule {
}
