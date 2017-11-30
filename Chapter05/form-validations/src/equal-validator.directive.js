// equal-validator.directive.ts
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// First, we define directive using the @Directive annotation.
// Then we specify the selector. Selector is mandatory. We will extend the built-in validators NG_VALIDATORS to use our equal validator in providers.
var EqualValidator = EqualValidator_1 = (function () {
    // In our constructor, we inject the attribute value via annotation @Attribute(‘validateEqual’)
    // and assign it to the validateEqual variable.
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        //console.log(this);
        // passo il valore di me stesso
        var v = c.value;
        // passo l'oggetto che mi sono passato come valore della proprietà validateEqual nel form (ossia il campo da confrontare)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: true
            };
        }
        // When reverse is false or not set, we will perform equal validation
        // When reverse is true, we will still perform equal validation, but instead of adding errors to current control, we add errors to the target control.
        // value equal and reverse (elimino l'errore dal target control)
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse (inietto l'errore dal target control)
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: true });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    core_1.Directive({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EqualValidator_1; }), multi: true }
        ]
    })
    //Our directive class should implement the Validator interface.
    // Validator interface expecting a validate function.
    ,
    __param(0, core_1.Attribute('validateEqual')), __param(1, core_1.Attribute('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);
exports.EqualValidator = EqualValidator;
var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map