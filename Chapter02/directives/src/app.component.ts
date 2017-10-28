import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  template: `
    <h1>ngIf</h1>
    <h3>elemento visibile</h3>
    <p *ngIf="visible"> {{message}} </p>
    <h3>elemento nascosto</h3>
    <p *ngIf="hide"> {{message}} </p>
    <hr>
    <h1>ngFor</h1>
    <ul>
      <li *ngFor="let item of frameworks">{{item}}</li>
    </ul>
    <hr>
    <h1>ngSwitch</h1>
    <div [ngSwitch]="selectedCar">
      <template [ngSwitchCase]="'Bugatti'">I am a Bugatti</template>
      <template [ngSwitchCase]="'Ferrari'">I am a Ferrari</template>
      <template [ngSwitchCase]="'Bugatti'">I am a Mercedes</template>
      <template ngSwitchDefault>I am somebody else</template>
    </div>
    <hr>
    <h1>ngStyle</h1>
    <p [ngStyle]="getInlineStyles(myString)">{{myString}}</p>
    <p [style.color]="myString.length > 2 ? 'red' : 'green'">{{myString}}</p>
    <hr>
    <h1>ngClass</h1>
    <p [ngClass]="getClasses(myString)">{{myString}}</p>
    <p [class.bolder]="myString.length > 2">{{myString}}</p>
  `
})

export class AppComponent {

  public visible : boolean = true;
  public hide : boolean = false;
  public message : string = 'Built-in Directives';
  public frameworks: string[] = ["Angular", "React", "Ember"];
  public selectedCar : string = 'Ferrari';
  public myString : string = 'Lunghezza della stringa';

  public getInlineStyles(element: string){
    let styles = {
      'color' : element.length > 2 ? 'red' : 'green',
      'text-decoration' : element.length > 2 ? 'underline' : 'none'
    }
    return styles;
  }
  public getClasses(element: string){
    let classes = {
      'red' : element.length > 3,
      'bolder' : element.length > 4
    }
    return classes;
  }
}