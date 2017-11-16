import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <book-search></book-search>
    </div>
  `
})
export class AppComponent {

  constructor() {
  }
}
