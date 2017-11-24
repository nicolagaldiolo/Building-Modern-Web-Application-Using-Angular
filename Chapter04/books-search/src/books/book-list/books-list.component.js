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
var BookListComponent = (function () {
    function BookListComponent() {
        this.books = [];
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], BookListComponent.prototype, "books", void 0);
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'books-list',
            template: "\n    <div class=\"row mt-1\">\n      <div class=\"col-sm-12\">\n        <div class=\"row\">\n          <div *ngFor=\"let book of books\" class=\"col-sm-3 book-item\">\n            <div class=\"cover-image-container\">\n              <img [src]=\"book.coverImage\" alt=\"cover image\">\n              <span>{{book.title}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['./books-list.component.css']
        })
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=books-list.component.js.map