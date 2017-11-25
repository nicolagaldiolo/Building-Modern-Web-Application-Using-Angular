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
var forms_1 = require("@angular/forms");
var RegistrationReactiveFormComponent = (function () {
    function RegistrationReactiveFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
    }
    RegistrationReactiveFormComponent.prototype.ngOnInit = function () {
        // è possibile creare l'oggetto registrationForm in maniera manuale utilizzando la classe FormGroup
        // e specificando manualmente ogni instanza della classe FormControl
        /*this.registrationForm = new FormGroup({
            firstName : new FormControl('Nicola', Validators.required),
            lastName : new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
            address: new FormGroup({
                street: new FormControl(''),
                country: new FormControl('', Validators.required)
            })
        })*/
        // oppure è possibile utilizzare la classe form builder
        this.registrationForm = this.formBuilder.group({
            firstName: ['Nicola', forms_1.Validators.required],
            lastName: '',
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.EMAIL_REGEX)]],
            address: this.formBuilder.group({
                street: '',
                country: ['', forms_1.Validators.required]
            })
        });
    };
    RegistrationReactiveFormComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
        console.log(this.registrationForm.value);
        console.log(this.registrationForm);
    };
    return RegistrationReactiveFormComponent;
}());
RegistrationReactiveFormComponent = __decorate([
    core_1.Component({
        selector: 'registration-reactive-form',
        templateUrl: './registration-reactive-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegistrationReactiveFormComponent);
exports.RegistrationReactiveFormComponent = RegistrationReactiveFormComponent;
//# sourceMappingURL=registration-reactive-form.component.js.map