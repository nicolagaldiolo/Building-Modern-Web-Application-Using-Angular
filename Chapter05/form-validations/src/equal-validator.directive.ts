// equal-validator.directive.ts

import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// First, we define directive using the @Directive annotation.
// Then we specify the selector. Selector is mandatory. We will extend the built-in validators NG_VALIDATORS to use our equal validator in providers.

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})

//Our directive class should implement the Validator interface.
// Validator interface expecting a validate function.

export class EqualValidator implements Validator {

    // In our constructor, we inject the attribute value via annotation @Attribute(‘validateEqual’)
    // and assign it to the validateEqual variable.

    constructor( @Attribute('validateEqual') public validateEqual: string, @Attribute('reverse') public reverse: string) {}


    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {

        //console.log(this);

        // passo il valore di me stesso
        let v = c.value;

        // passo l'oggetto che mi sono passato come valore della proprietà validateEqual nel form (ossia il campo da confrontare)
        let e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: true
            }
        }


        // When reverse is false or not set, we will perform equal validation
        // When reverse is true, we will still perform equal validation, but instead of adding errors to current control, we add errors to the target control.

        // value equal and reverse (elimino l'errore dal target control)
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse (inietto l'errore dal target control)
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: true });
        }

        return null;

    }


}