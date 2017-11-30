"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent() {
        this.EMAIL_REGEX = "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*";
        this.PASSWORD_STRENGTH_REGEX = "(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}";
    }
    RegistrationFormComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
    };
    RegistrationFormComponent.prototype.onChange = function (formRef) {
        console.log(formRef);
    };
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    core_1.Component({
        selector: 'registration-form',
        templateUrl: './registration-form.component.html'
    })
], RegistrationFormComponent);
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-form.component.js.map