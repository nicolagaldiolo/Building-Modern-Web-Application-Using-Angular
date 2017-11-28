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
var custom_validators_1 = require("../custom-validators");
var RegistrationReactiveFormComponent = (function () {
    function RegistrationReactiveFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
    }
    // è possibile creare l'oggetto registrationForm in maniera manuale utilizzando la classe FormGroup
    // e specificando manualmente ogni instanza della classe FormControl
    // ngOnInit () {
    //
    //   this.registrationForm = new FormGroup({
    //     firstName: new FormControl('Shravan', Validators.required),
    //     lastName: new FormControl(''),
    //     email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
    //     address: new FormGroup({
    //       street: new FormControl(''),
    //       city: new FormControl('', Validators.required),
    //       state: new FormControl('', Validators.required),
    //       zip: new FormControl(''),
    //       country: new FormControl('', Validators.required)
    //     })
    //   })
    // oppure è possibile utilizzare la classe form builder
    RegistrationReactiveFormComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            firstName: ['Shravan', forms_1.Validators.required],
            lastName: '',
            passwordGroup: this.formBuilder.group({
                password: ['', [forms_1.Validators.required, custom_validators_1.CustomValidators.passwordStrength]],
                confirmPassword: ['', forms_1.Validators.required]
            }, { validator: custom_validators_1.CustomValidators.passwordMatcher }),
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.EMAIL_REGEX)]],
            address: this.formBuilder.group({
                street: '',
                city: ['', forms_1.Validators.required],
                state: ['', forms_1.Validators.required],
                zip: '',
                country: ['', forms_1.Validators.required]
            })
        });
    };
    RegistrationReactiveFormComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
        console.log(this.registrationForm.value);
    };
    RegistrationReactiveFormComponent.prototype.onChange = function (formValue) {
        console.log(formValue);
    };
    return RegistrationReactiveFormComponent;
}());
RegistrationReactiveFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'registration-reactive-form',
        templateUrl: 'registration-reactive-form.component.html'
    })
    // per usare il formBuilder lo devo iniettare nel costruttore
    ,
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegistrationReactiveFormComponent);
exports.RegistrationReactiveFormComponent = RegistrationReactiveFormComponent;
//# sourceMappingURL=registration-reactive-form.component.js.map