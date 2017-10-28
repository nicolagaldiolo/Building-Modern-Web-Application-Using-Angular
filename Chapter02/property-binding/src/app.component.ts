import { Component } from '@angular/core';

@Component({
  selector: 'display-data-app',
  template: `
    <h1 [textContent]="message"></h1>
    <input type="text" [value]="message" />
    <table>
      <tr>
        <td [attr.colspan]="colspan" [textContent]="message"></td>
      </tr>
    </table>
  `
})

export class AppComponent {

  message : string = 'Data Binding in Angular - Property Binding';
  colspan : number = 3;

}