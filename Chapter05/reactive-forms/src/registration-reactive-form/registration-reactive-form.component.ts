import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
    moduleId: module.id,
    selector: 'registration-reactive-form',
    templateUrl: 'registration-reactive-form.component.html'
})

// per usare il formBuilder lo devo iniettare nel costruttore
export class RegistrationReactiveFormComponent implements OnInit {

    constructor (public formBuilder: FormBuilder) {
    }

    EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";

    registrationForm: FormGroup;

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

    ngOnInit () {
        this.registrationForm = this.formBuilder.group({

            firstName: ['Shravan', Validators.required],
            lastName: '',

            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required, CustomValidators.passwordStrength]],
                confirmPassword: ['', Validators.required]
            }, {validator: CustomValidators.passwordMatcher}),

            email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],

            address: this.formBuilder.group({
                street: '',
                city: ['', Validators.required],
                state: ['', Validators.required],
                zip: '',
                country: ['', Validators.required]
            })
        });
    }

    onSubmit (formValue: object) {
        console.log(formValue);
        console.log(this.registrationForm.value)
    }

    onChange(formValue: object) {
        console.log(formValue);
    }
}