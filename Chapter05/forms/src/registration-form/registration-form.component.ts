import { Component } from '@angular/core';

interface User {
    firstName: string,
    lastName: string,
}

// PER IL FORM
// Per il tag FORM Non serve aggiungere la direttiva ngForm (Obj formGroup) in quanto Angular ogni volta che incontra un form lo fa inplicitamente. (è possibile disattivare manuelemente questo comportamento con la direttiva ngNoForm)

// PER I CAMPI INPUT
// la direttiva ngModel fa diventare il campo input un oggetto angular (=Obj formControl)
// per accedere al model occorre creare una variabile di riferimento per il campo input es: #firstNameRef e assegnargli l'oggetto model: #firstNameRef="ngModel"
// Se uso un ngModel dentro ad un tag form DEVO ASSOLUTAMENTE specificare un attributo name per il campo altrimenti riceverò un errore in quanto angular mi crea un oggeto per il form con tutti i campi che trova all'interno e le
// proprietà dell'oggetto sono i vari campi input quindi ogni campo inut deve avere un name.

@Component({
    selector: 'registration-form',
    template: `
        <div class="row m-1">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <h2>Registration Form</h2>
                    </div>
                    <div class="box-divider"></div>
                    
                    <div class="box-body">
                        <form novalidate #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" name="firstName" ngModel #firstNameRef="ngModel">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" name="lastName" ngModel #lastNameRef="ngModel">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" ngModel #emailRef="ngModel">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>Enter Password</label>
                                    <input type="password" class="form-control" name="password" ngModel #passwordRef="ngModel">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" name="corfirmPassword" ngModel #confirmPasswordRef="ngModel">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
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