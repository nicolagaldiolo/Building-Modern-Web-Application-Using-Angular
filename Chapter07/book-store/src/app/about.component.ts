import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  template: `
    <div>
        <h4>{{heading}}</h4>
        <p>{{content}}</p>
    </div>
  `,
})
export class AboutComponent {
  heading: string = 'This is about page';
  content: string = '';
}
