import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor1Page } from './floor1.page';

describe('Floor1Page', () => {
  let component: Floor1Page;
  let fixture: ComponentFixture<Floor1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
