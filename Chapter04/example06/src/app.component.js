"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
        // posso creare il mio observable senza che nessuno si iscriva e stamparlo direttamente nella view usando il pipe async
        this.timerOnlyObservable = Observable_1.Observable.interval(1000).map(function () { return new Date(); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer$ = Observable_1.Observable.interval(1000).map(function () { return new Date(); });
        timer$.subscribe(function (res) { return _this.timer = res.toString(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n        <div class=\"container p-4\">\n            <h1 class=\"mt-4\">{{timerOnlyObservable | async | date: 'mediumTime'}}</h1> <!-- Il pipe async sottoscrive un observable internamente e torna l'ultimo valore emesso -->\n            <h1 class=\"mt-4\">{{timer}}</h1>\n        </div>\n    "
        })
        // GENERALMENTE POSSO ACCEDERE AI VALORI DI UN OBSERVABLE SOLO CON IL METODO subscribe() IN QUANTO UN OBSERVABLE è UN OGGETTO.
        // ANGULAR METTE A DISPOSIZIONE IL PIPE async CHE MI PERMETTE DI ACCEDERE AD UN VALORE EMESSO DA UN OBESERVABLE DIRETTAMENTE NELLA VIEW.
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map