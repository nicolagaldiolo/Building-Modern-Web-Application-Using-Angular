import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import {ContactComponent} from "./contact.component";
import {DashboardComponent} from "./dashboard.component";

// Definisco l'array di routes che è di tipo Routes per poi darlo in pasto a RouterModule.
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // uso for child perchè è un sottomodulo
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
