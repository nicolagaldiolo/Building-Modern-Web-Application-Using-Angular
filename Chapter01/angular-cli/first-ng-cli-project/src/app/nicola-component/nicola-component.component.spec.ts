import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicolaComponentComponent } from './nicola-component.component';

describe('NicolaComponentComponent', () => {
  let component: NicolaComponentComponent;
  let fixture: ComponentFixture<NicolaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicolaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicolaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
