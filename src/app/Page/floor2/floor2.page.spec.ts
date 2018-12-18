import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor2Page } from './floor2.page';

describe('Floor2Page', () => {
  let component: Floor2Page;
  let fixture: ComponentFixture<Floor2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
