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
require("rxjs/add/observable/merge");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // METODO 1 (Bad Practice) creo due observable distinti
        //const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click');
        //btnOb$.subscribe(res => this.message = 'Hello Angular, RxJS!');
        var _this = this;
        //const textOb$ = Observable.fromEvent(this.text.nativeElement, 'keyup').map((event: Event) => (<HTMLInputElement>event.target).value);
        //textOb$.subscribe(res => this.message = res);
        // METODO 2 (Best Practice) creo due observable distinti ma li convergo in uno unico
        var btnOb$ = Observable_1.Observable.fromEvent(this.btn.nativeElement, 'click').map(function (event) { return 'Hello Angular, RxJS!'; }); // nativeElement mi permettere di accedere al relativo oggetto dom
        var textOb$ = Observable_1.Observable.fromEvent(this.text.nativeElement, 'keyup').map(function (event) { return event.target.value; });
        Observable_1.Observable.merge(btnOb$, textOb$).subscribe(function (res) { return _this.message = res; }); //il metodo merge() mi permette di unire 2 observable e crearne uno unico al quale mi iscrivo con subscribe()
    };
    __decorate([
        core_1.ViewChild('btn'),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "btn", void 0);
    __decorate([
        core_1.ViewChild('text'),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "text", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n        <div class=\"container p-4\">\n            <input #text class=\"form-control mt-2\" />\n            <button #btn class=\"btn btn-primary mt-3\">Show Message!</button>\n            <hr>\n            <h1 class=\"mt-4\">Output: {{message}}</h1>\n        </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map