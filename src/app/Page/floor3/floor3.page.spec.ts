import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor3Page } from './floor3.page';

describe('Floor3Page', () => {
  let component: Floor3Page;
  let fixture: ComponentFixture<Floor3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
