import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboardPage } from './deshboard.page';

describe('DeshboardPage', () => {
  let component: DeshboardPage;
  let fixture: ComponentFixture<DeshboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
