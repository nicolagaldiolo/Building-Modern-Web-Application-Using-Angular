import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EqualValidator } from './equal-validator.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RegistrationFormComponent, EqualValidator],
  bootstrap: [AppComponent]
})

export class AppModule {}