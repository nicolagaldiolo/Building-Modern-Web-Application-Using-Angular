// Un service in Angular è semplicemente una classe con lo scopo di essere un access point per tutta l'app. Può essere visto un pò come lo stato di React
// Il servizio è instanziato a livello di modulo e ha visibilità su tutto il modulo e componenti figli. è qualcosa che sta al di sopra dei componenti e vive in tutto il modulo.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_books_1 = require("./mock-books");
var BookStoreService = (function () {
    function BookStoreService() {
        this.booksList = mock_books_1.BOOKS;
    }
    BookStoreService.prototype.getBooks = function () {
        console.log("Book Service (STATICO)");
        return this.booksList;
    };
    BookStoreService.prototype.getBook = function (isbn) {
        return this.booksList.find(function (book) { return book.isbn === isbn; });
    };
    BookStoreService.prototype.deleteBook = function (isbn) {
        this.booksList = this.booksList.filter(function (book) { return book.isbn !== isbn; });
        return this.booksList;
    };
    return BookStoreService;
}());
BookStoreService = __decorate([
    core_1.Injectable()
    // il decoratore @Injectable() di per sè non fa nulla, è un decoratore vuoto. Con il decoratore @Injectable stiamo dicendo che Angular può iniettare delle dipendenze
    // all'interno di questo servizio e di conseguenza questa classe entra nel "ciclo di vita" di Angular
], BookStoreService);
exports.BookStoreService = BookStoreService;
//# sourceMappingURL=book-store.service.js.map