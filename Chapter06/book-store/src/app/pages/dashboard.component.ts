import {Component, HostBinding} from '@angular/core';
import {slideInOutAnimation} from "../animations";

@Component({
  selector: 'app-dashboard',
  template: `<h2>Dashboard</h2>`,
  animations: [ slideInOutAnimation ]
})
export class DashboardComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}

