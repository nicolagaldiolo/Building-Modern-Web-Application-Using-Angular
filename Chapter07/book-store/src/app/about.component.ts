import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  heading: string = 'This is about page';
  content: string = '';
}
