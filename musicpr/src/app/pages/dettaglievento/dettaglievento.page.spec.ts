import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglieventoPage } from './dettaglievento.page';

describe('DettaglieventoPage', () => {
  let component: DettaglieventoPage;
  let fixture: ComponentFixture<DettaglieventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglieventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglieventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
