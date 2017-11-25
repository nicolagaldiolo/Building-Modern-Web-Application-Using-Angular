import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'registration-form',
    templateUrl: './registration-form.component.html'
})

export class RegistrationFormComponent {
    user: User = {
        firstName: 'Nicola',
        lastName: 'Galdiolo',
    }

    onSubmit(formValue:User){
        console.log(formValue);
    }
}