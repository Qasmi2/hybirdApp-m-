import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor5Page } from './floor5.page';

describe('Floor5Page', () => {
  let component: Floor5Page;
  let fixture: ComponentFixture<Floor5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
