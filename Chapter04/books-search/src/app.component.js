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
var book_store_service_1 = require("./books/book-store.service");
var AppComponent = (function () {
    function AppComponent(bookStoreService) {
        this.bookStoreService = bookStoreService;
    }
    AppComponent.prototype.findBook = function (title) {
        var _this = this;
        this.bookStoreService.getBooks(title)
            .subscribe(function (books) { return _this.filteredBook = books; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <book-search (search)=\"findBook($event)\"></book-search>\n      <books-list [books]=\"filteredBook\"></books-list>\n    </div>\n  ",
        providers: [book_store_service_1.BookStoreService]
    }),
    __metadata("design:paramtypes", [book_store_service_1.BookStoreService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map