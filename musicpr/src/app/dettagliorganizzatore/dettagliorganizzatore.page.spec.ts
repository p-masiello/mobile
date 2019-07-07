import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliorganizzatorePage } from './dettagliorganizzatore.page';

describe('DettagliorganizzatorePage', () => {
  let component: DettagliorganizzatorePage;
  let fixture: ComponentFixture<DettagliorganizzatorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliorganizzatorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliorganizzatorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
