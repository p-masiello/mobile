import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistoPage } from './acquisto.page';

describe('AcquistoPage', () => {
  let component: AcquistoPage;
  let fixture: ComponentFixture<AcquistoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
