import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'registration-reactive-form',
    templateUrl: './registration-reactive-form.component.html'
})

export class RegistrationReactiveFormComponent implements OnInit {

    EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
    registrationForm: FormGroup;

    constructor(public formBuilder: FormBuilder){

    }

    ngOnInit(){
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
            firstName : ['Nicola', Validators.required],
            lastName : '',
            email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
            address: this.formBuilder.group({
                street: '',
                country: ['', Validators.required]
            })
        })
    }

    onSubmit(formValue:object){
        console.log(formValue);
        console.log(this.registrationForm.value);
        console.log(this.registrationForm);
    }

}