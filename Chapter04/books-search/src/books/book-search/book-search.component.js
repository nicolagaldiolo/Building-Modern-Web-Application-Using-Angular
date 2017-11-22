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
var book_store_service_1 = require("../book-store.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var BookSearchComponent = (function () {
    function BookSearchComponent(bookStoreService) {
        this.bookStoreService = bookStoreService;
        this.bookTitles = [];
        this.searchInputTerm = '';
        this.search = new core_1.EventEmitter();
    }
    BookSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.fromEvent(this.searchInputAliasName.nativeElement, 'keyup')
            .debounceTime(400) // ritarda 400ms l'emissione di un valore per migliorare le performance e non lanciare richieste inutili
            .distinctUntilChanged() // lancia la richiesta solo se il valore del campo input è diverso dalla richiesta precedente
            .map(function (event) {
            return event.target.value;
        })
            .switchMap(function (title) {
            return _this.bookStoreService.getBookTitles(title);
        })
            .subscribe(function (bookTitles) { return _this.bookTitles = bookTitles; });
        // USO .map() QUANDO CIò CHE TORNO è UN VALORE, USO .switchMap() quando torno un observable
        Observable_1.Observable.fromEvent(this.suggestionsAliasName.nativeElement, 'click')
            .map(function (event) {
            return event.srcElement.innerText;
        })
            .subscribe(function (res) {
            _this.searchInputTerm = res;
            _this.bookTitles = [];
        });
    };
    BookSearchComponent.prototype.searchBooks = function () {
        this.bookTitles = [];
        this.search.emit(this.searchInputTerm);
    };
    return BookSearchComponent;
}());
__decorate([
    core_1.ViewChild('searchInput'),
    __metadata("design:type", core_1.ElementRef)
], BookSearchComponent.prototype, "searchInputAliasName", void 0);
__decorate([
    core_1.ViewChild('suggestions'),
    __metadata("design:type", core_1.ElementRef)
], BookSearchComponent.prototype, "suggestionsAliasName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BookSearchComponent.prototype, "search", void 0);
BookSearchComponent = __decorate([
    core_1.Component({
        selector: 'book-search',
        template: "\n    <h3 class=\"page-title\">Book Search</h3>\n    <div class=\"search-container\">\n      <div class=\"books-search-form\">\n        <input type=\"text\" #searchInput class=\"search-input\" placeholder=\"Book title (es: Javascript)\" [(ngModel)]=\"searchInputTerm\">\n        <button class=\"btn btn-primary\" (click)=\"searchBooks()\" >Search</button>\n      </div>\n      <ul class=\"title-suggestion-list\" #suggestions [style.display]=\"bookTitles.length > 0 ? 'block' : 'none'\">\n        <li *ngFor=\"let bookTitle of bookTitles\">{{bookTitle}}</li>\n      </ul>\n    </div>\n  ",
        styleUrls: ['./book-search.component.css']
    }),
    __metadata("design:paramtypes", [book_store_service_1.BookStoreService])
], BookSearchComponent);
exports.BookSearchComponent = BookSearchComponent;
//# sourceMappingURL=book-search.component.js.map