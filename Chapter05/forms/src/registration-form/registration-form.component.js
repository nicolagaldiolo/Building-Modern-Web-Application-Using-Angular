"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// PER IL FORM
// Per il tag FORM Non serve aggiungere la direttiva ngForm (Obj formGroup) in quanto Angular ogni volta che incontra un form lo fa inplicitamente. (è possibile disattivare manuelemente questo comportamento con la direttiva ngNoForm)
// PER I CAMPI INPUT
// la direttiva ngModel fa diventare il campo input un oggetto angular (=Obj formControl)
// per accedere al model occorre creare una variabile di riferimento per il campo input es: #firstNameRef e assegnargli l'oggetto model: #firstNameRef="ngModel"
// Se uso un ngModel dentro ad un tag form DEVO ASSOLUTAMENTE specificare un attributo name per il campo altrimenti riceverò un errore in quanto angular mi crea un oggeto per il form con tutti i campi che trova all'interno e le
// proprietà dell'oggetto sono i vari campi input quindi ogni campo inut deve avere un name.
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent() {
        this.user = {
            firstName: 'Nicola',
            lastName: 'Galdiolo',
        };
    }
    RegistrationFormComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
    };
    RegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'registration-form',
            template: "\n        <div class=\"row m-1\">\n            <div class=\"col-md-12\">\n                <div class=\"box\">\n                    <div class=\"box-header\">\n                        <h2>Registration Form</h2>\n                    </div>\n                    <div class=\"box-divider\"></div>\n                    \n                    <div class=\"box-body\">\n                        <form novalidate #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6 form-group\">\n                                    <label>First name</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"firstName\" ngModel #firstNameRef=\"ngModel\">\n                                </div>\n                                <div class=\"col-sm-6 form-group\">\n                                    <label>Last name</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"lastName\" ngModel #lastNameRef=\"ngModel\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Email</label>\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" ngModel #emailRef=\"ngModel\">\n                                </div>\n                                <div class=\"col-sm-6 form-group\">\n                                    <label>Enter Password</label>\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #passwordRef=\"ngModel\">\n                                </div>\n                                <div class=\"col-sm-6 form-group\">\n                                    <label>Confirm Password</label>\n                                    <input type=\"password\" class=\"form-control\" name=\"corfirmPassword\" ngModel #confirmPasswordRef=\"ngModel\">\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-form.component.js.map