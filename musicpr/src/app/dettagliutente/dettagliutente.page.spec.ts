import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliutentePage } from './dettagliutente.page';

describe('DettagliutentePage', () => {
  let component: DettagliutentePage;
  let fixture: ComponentFixture<DettagliutentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliutentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliutentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
