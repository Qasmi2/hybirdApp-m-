import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsoukPage } from './goldsouk.page';

describe('GoldsoukPage', () => {
  let component: GoldsoukPage;
  let fixture: ComponentFixture<GoldsoukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldsoukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldsoukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
