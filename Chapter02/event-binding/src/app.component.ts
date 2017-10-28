import { Component } from '@angular/core';

@Component({
  selector: 'event-data-app',
  template: `
    <p>{{message}}</p>
    <input type="text" (keypress)="showMessage($event)" />
  `
})

export class AppComponent {

  public message : string = 'Angular - Event Binding';
  
  showMessage(onKeyPressEvent: any){
    this.message = onKeyPressEvent.target.value;
  }

}