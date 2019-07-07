import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonazionePage } from './donazione.page';

describe('DonazionePage', () => {
  let component: DonazionePage;
  let fixture: ComponentFixture<DonazionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonazionePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
