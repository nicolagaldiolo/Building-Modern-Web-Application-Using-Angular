import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { AboutComponent } from "./about.component";

describe('AboutComponent', ()=>{
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement; // fornisce accesso all'elemento root del componente
  let element: HTMLElement; // rappresenta l'elemento nativo del dom

  // SOLO se il componente utilizza un template esterno o un css esterno (che vengono caricati in maniera asincrona mentre il test viene
  // lanciato in maniera sincrona) devo importare e utilizzare il metodo async che gestire le operazioni asincrone all'interno del test.
  // Questo ha impatto solo sulla creazione del modulo, infatti devo creare un beforeEach ah hoc che utilizza il metodo async per la creazione del modulo
  // Altrimenti potrei eseguire la creazione del modulo semplicimente nel beforEach supccessivo.
  // ps: se utilizzo systemJS per le compilazione occorre occorre lanciare configureTestingModule().compileComponents(), mentre se utilizzo webpack (angular cli) questa cosa ce l'ho gratis.

  beforeEach(async(()=>{
    TestBed.configureTestingModule({ // questo crea l'ambiente per testare applicazioni angular, creando i moduli e componenti angular per test. è simile all'@NgModule() e fornisco providers, declarations, import ecc.
      declarations: [AboutComponent]
    });
  }));

  beforeEach(()=>{
    // ComponentFixture: impianto per testare i componenti, fornisce proprietà e metodi per accedere all'istanza del componente, agli elementi del dom del template e lanciare la change detection manualmente
    fixture = TestBed.createComponent(AboutComponent); // creo il componente
    component = fixture.componentInstance; // accedo all' instanza del compoenente
  });

  describe('heading', ()=>{
    beforeEach(()=>{
      debugElement = fixture.debugElement.query(By.css('h4')); //debugElement mi permette di accedere all'oggetto root del componente e poi con query ( simile a query selector di vanilla javascript ) accedo all'oggetto.
      element = debugElement.nativeElement; // mi permette di accedere all'elemento del dom
    })

    it('should display "this is About Page"', ()=>{
      fixture.detectChanges(); // Angular non esegue la change detection automaticamente in ambiente di test quindi va fatta manualmente ogni volta che cambiano i dati.
      expect(element.textContent).toContain(component.heading);
    })

    it('should display "new heading"', ()=>{
      fixture.detectChanges();

      const previousHeading = component.heading;
      component.heading = 'New heading';

      expect(element.textContent).toContain(previousHeading);
      expect(element.textContent).not.toContain(component.heading);

      fixture.detectChanges();
      expect(element.textContent).toContain(component.heading);
    })

  });

  describe('content', ()=>{
    beforeEach(()=>{
      debugElement = fixture.debugElement.query(By.css('.message')); //debugElement mi permette di accedere all'oggetto root del componente e poi con query ( simile a query selector di vanilla javascript ) accedo all'oggetto.
      element = debugElement.nativeElement; // mi permette di accedere all'elemento del dom
    })

    it('should be empty', ()=>{
      fixture.detectChanges(); // Angular non esegue la change detection automaticamente in ambiente di test quindi va fatta manualmente ogni volta che cambiano i dati.
      expect(element.textContent).toBe(component.content);
    })

    it('should be "new message"', ()=>{
      component.content = 'New heading';
      fixture.detectChanges();
      expect(element.textContent).toBe(component.content);
    })

  });


});
