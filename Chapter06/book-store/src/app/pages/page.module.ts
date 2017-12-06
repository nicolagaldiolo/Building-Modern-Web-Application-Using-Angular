import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
