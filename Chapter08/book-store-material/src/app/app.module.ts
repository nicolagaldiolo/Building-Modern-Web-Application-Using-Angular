import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Safe } from './safe';

import {
  BookStoreService,
  MasterDetailComponent,
  ListComponent,
  AddBookDialogComponent
} from './books';

@NgModule({
  declarations: [
    AppComponent,
    Safe,
    MasterDetailComponent,
    ListComponent,
    AddBookDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [
    BookStoreService,
  ],
  entryComponents: [AddBookDialogComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
