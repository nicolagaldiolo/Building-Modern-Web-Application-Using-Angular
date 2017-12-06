import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Safe } from './safe';

import { AppRoutingModule } from "./app-routing.module";
import { BooksModule } from "./books/book.module";
import { PagesModule } from "./pages/page.module";

@NgModule({
  declarations: [
    AppComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    BooksModule,
    PagesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
