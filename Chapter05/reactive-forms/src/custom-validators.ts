import { AbstractControl } from "@angular/forms";

export class CustomValidators {

    static passwordStrength (control: AbstractControl) {

        if (CustomValidators.isEmptyValue(control.value)) {
            return null;
        }
    }

}