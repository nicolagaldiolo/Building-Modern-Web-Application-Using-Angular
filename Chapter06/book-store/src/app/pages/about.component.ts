import {Component, HostBinding} from '@angular/core';
import {slideInOutAnimation} from "../animations";

@Component({
  selector: 'about-page',
  template: '<h2>This is About Page</h2>',
  animations: [ slideInOutAnimation ]
})
export class AboutComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

}
