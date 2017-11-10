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
var console_loggerservice_1 = require("./console-loggerservice");
var book_details_component_1 = require("./book-details/book-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, book_details_component_1.BookDetailsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [book_store_service_1.BookStoreService, console_loggerservice_1.ConsoleLoggerService]
            // instanzio il providers a livello di modulo così sarà disponibile in tutti i sottomoduli e componenti del modulo. Dichiarare un service dentro l'array providers è il modo con cui Angular instanzia gli oggetti service.
            // [BookStoreService] è uno schortcat in realtà l'oggetto viene instanziato in questo modo: [{ provide: BookStoreService, useClass: BookStoreService }]
            // ConsoleLoggerService è una dipendenza di BookStoreService e deve comunque essere iniettato all'interno del providers
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map