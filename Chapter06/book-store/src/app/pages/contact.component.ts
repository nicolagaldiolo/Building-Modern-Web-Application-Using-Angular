import {Component, HostBinding} from '@angular/core';
import {slideInOutAnimation} from "../animations";

@Component({
  selector: 'contact-page',
  template: '<h2>This is Contact Page</h2>',
  animations: [ slideInOutAnimation ]
})
export class ContactComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

}
