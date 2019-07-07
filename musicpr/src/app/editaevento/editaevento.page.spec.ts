import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaeventoPage } from './editaevento.page';

describe('EditaeventoPage', () => {
  let component: EditaeventoPage;
  let fixture: ComponentFixture<EditaeventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaeventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
