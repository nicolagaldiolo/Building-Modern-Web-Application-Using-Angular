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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/map");
var BookSearchComponent = (function () {
    function BookSearchComponent() {
        this.bookTitle = [];
    }
    BookSearchComponent.prototype.ngOnInit = function () {
        var source = Observable_1.Observable.fromEvent(this.searchInputAliasName.nativeElement, 'keyup').map(function (event) { return event.target.value; });
        source.subscribe(function (title) { return console.log(title); });
    };
    return BookSearchComponent;
}());
__decorate([
    core_1.ViewChild('searchInput'),
    __metadata("design:type", core_1.ElementRef)
], BookSearchComponent.prototype, "searchInputAliasName", void 0);
BookSearchComponent = __decorate([
    core_1.Component({
        selector: 'book-search',
        styleUrls: ['./book-search.component.css'],
        template: "\n    <h3 class=\"page-title\">Book Search</h3>\n    <div class=\"search-container\">\n      <div class=\"books-search-form\">\n        <input type=\"text\" #searchInput class=\"search-input\" placeholder=\"Book title\">\n        <button class=\"btn btn-primary\">Search</button>\n      </div>\n      <ul>\n        <li>Book title</li>\n      </ul>\n    </div>\n  "
    })
], BookSearchComponent);
exports.BookSearchComponent = BookSearchComponent;
//# sourceMappingURL=book-search.component.js.map