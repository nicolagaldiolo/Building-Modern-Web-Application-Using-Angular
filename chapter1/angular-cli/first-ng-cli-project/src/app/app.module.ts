import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NicolaComponentComponent } from './nicola-component/nicola-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    NicolaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
