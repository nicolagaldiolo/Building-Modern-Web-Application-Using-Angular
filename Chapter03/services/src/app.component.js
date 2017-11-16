"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_store_service_1 = require("./book-store.service");
var AppComponent = (function () {
    function AppComponent(bookStoreService) {
        this.bookStoreService = bookStoreService;
        this.booksList = [];
        // invece di istanziare un oggetto BookStoreService lo passo come parametro al costruttore usando la Dependency Injection di angular. (angular andrà a matchare BookStoreService con il servizio dichiarato nell'array providers per creare un istanza del servizio).
        // se voglio che bookStoreService sia disponibile anche fuori dal costruttore uso il costrutto private, se voglio che sia disponibile anche a livello di template devo usare public.
    }
    // il metodo getBookList mi torna l'elenco di tutti i libri disponibili. Questo è il metodo default che dovrà essere chiamato al caricamento del componente.
    // Invece di chiamare questo medoto nel costruttore (come viene fatto generalmente) uso il decoratore ngOnInit che è un hook del ciclo di vita di un componente angular e viene chiamato ogni volta che il componente viene creato.
    // il costruttore ha solo il compito di inizializzare l'oggetto non del fetch dei dati, a quello ci pensa ngInit.
    AppComponent.prototype.ngOnInit = function () {
        this.getBooksList();
    };
    AppComponent.prototype.getBooksList = function () {
        this.booksList = this.bookStoreService.getBooks();
    };
    AppComponent.prototype.getBookDetails = function (isbn) {
        this.selectedBook = this.bookStoreService.getBook(isbn);
    };
    AppComponent.prototype.deleteBook = function (isbn) {
        this.selectedBook = null;
        this.booksList = this.bookStoreService.deleteBook(isbn);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'books-list',
            templateUrl: './app.component.html',
        }),
        __metadata("design:paramtypes", [book_store_service_1.BookStoreService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map