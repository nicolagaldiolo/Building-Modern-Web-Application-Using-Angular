import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

import { AboutComponent } from "./about.component";

describe('AboutComponent', ()=>{
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement; // fornisce accesso all'elemento root del componente
  let element: HTMLElement; // rappresenta l'elemento nativo del dom

  beforeEach(()=>{

    // TestBed : questo crea l'ambiente per testare applicazioni angular, creando i moduli e componenti angular
    // per test. è simile all'@NgModule() e fornisco providers, declarations, import ecc.
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });

    // ComponentFixture: impianto per testare i componenti, fornisce proprietà e metodi per accedere all'istanza
    // del componente, agli elementi del dom del template e lanciare la change detection manualmente
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h4'));
    element = debugElement.nativeElement;
  });



  it('should display "this is About Page"', ()=>{
    fixture.detectChanges();
    expect(element.textContent).toContain(component.heading);
  })
});
