import { Component } from '@angular/core';

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
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <label>First name</label>
                                <input type="text" class="form-control" ngModel> <!-- con la direttiva ngModel diventa un oggetto angular e per ogni ngModel viene creato un oggetto FormControll --> 
                            </div>
                            <div class="col-sm-6 form-group">
                                <label>Last name</label>
                                <input type="text" class="form-control" ngModel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class RegistrationFormComponent {
}