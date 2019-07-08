import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloutentePage } from './profiloutente.page';

describe('ProfiloutentePage', () => {
  let component: ProfiloutentePage;
  let fixture: ComponentFixture<ProfiloutentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloutentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloutentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
