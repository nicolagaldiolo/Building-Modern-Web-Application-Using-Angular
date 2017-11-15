"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var book_store_service_1 = require("./book-store.service");
var book_store_service_graphQL_1 = require("./book-store-service-graphQL");
var book_details_component_1 = require("./book-details/book-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, book_details_component_1.BookDetailsComponent],
            bootstrap: [app_component_1.AppComponent],
            // SCANARIO 1 caso base
            // dichiaro il service BookStoreService con lo shortcode (la chiave Token e la classe usata hanno lo stesso nome)
            //providers: [BookStoreService]
            // SCANARIO 2 attualmente prendo i dati dal datasource BookStoreService ma voglio iniziare a prenderli dal nuovo servizio e non voglio cambiare a mano tutti i riferimenti del service in tutti i componenti in cui lo uso
            // fornisco sempre il service BookStoreService ma la classe usata non è la sua ma quella di BookStoreServiceGraphQL
            //providers: [ {provide: BookStoreService, useClass: BookStoreServiceGraphQL }]
            // SCANARIO 3 in alcuni casi prendo i dati dal datasource BookStoreService, in altri li prendo dal nuovo datasource BookStoreServiceGraphQL e voglio mantenere entrambi i riferimenti funzionanti ma usare la stessa classe e soprattutto un unica instanza
            // fornisco il nuovo service BookStoreServiceGraphQL, e anche il vecchio BookStoreService ma per quest'ultimo la classe usata non è la sua ma quella di BookStoreServiceGraphQL
            providers: [book_store_service_graphQL_1.BookStoreServiceGraphQL, { provide: book_store_service_1.BookStoreService, useExisting: book_store_service_graphQL_1.BookStoreServiceGraphQL }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map