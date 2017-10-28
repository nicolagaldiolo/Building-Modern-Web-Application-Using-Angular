import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding-app',
  template: `
    <p>{{message}}</p>
    <input type="text" [(ngModel)]="message" />
  `
})

export class AppComponent {

  public message : string = 'Angular - Event Binding';
  
}