import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definisco l'array di routes che è di tipo Routes per poi darlo in pasto a RouterModule.
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
