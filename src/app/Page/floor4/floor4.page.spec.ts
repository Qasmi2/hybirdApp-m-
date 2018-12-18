import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor4Page } from './floor4.page';

describe('Floor4Page', () => {
  let component: Floor4Page;
  let fixture: ComponentFixture<Floor4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
