"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.visible = true;
        this.hide = false;
        this.message = 'Built-in Directives';
        this.frameworks = ["Angular", "React", "Ember"];
        this.selectedCar = 'Ferrari';
        this.myString = 'Lunghezza della stringa';
    }
    AppComponent.prototype.getInlineStyles = function (element) {
        var styles = {
            'color': element.length > 2 ? 'red' : 'green',
            'text-decoration': element.length > 2 ? 'underline' : 'none'
        };
        return styles;
    };
    AppComponent.prototype.getClasses = function (element) {
        var classes = {
            'red': element.length > 3,
            'bolder': element.length > 4
        };
        return classes;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'directives',
        template: "\n    <h1>ngIf</h1>\n    <h3>elemento visibile</h3>\n    <p *ngIf=\"visible\"> {{message}} </p>\n    <h3>elemento nascosto</h3>\n    <p *ngIf=\"hide\"> {{message}} </p>\n    <hr>\n    <h1>ngFor</h1>\n    <ul>\n      <li *ngFor=\"let item of frameworks\">{{item}}</li>\n    </ul>\n    <hr>\n    <h1>ngSwitch</h1>\n    <div [ngSwitch]=\"selectedCar\">\n      <template [ngSwitchCase]=\"'Bugatti'\">I am a Bugatti</template>\n      <template [ngSwitchCase]=\"'Ferrari'\">I am a Ferrari</template>\n      <template [ngSwitchCase]=\"'Bugatti'\">I am a Mercedes</template>\n      <template ngSwitchDefault>I am somebody else</template>\n    </div>\n    <hr>\n    <h1>ngStyle</h1>\n    <p [ngStyle]=\"getInlineStyles(myString)\">{{myString}}</p>\n    <p [style.color]=\"myString.length > 2 ? 'red' : 'green'\">{{myString}}</p>\n    <hr>\n    <h1>ngClass</h1>\n    <p [ngClass]=\"getClasses(myString)\">{{myString}}</p>\n    <p [class.bolder]=\"myString.length > 2\">{{myString}}</p>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map