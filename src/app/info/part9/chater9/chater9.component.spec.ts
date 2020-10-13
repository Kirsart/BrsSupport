import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater9Component } from './chater9.component';

describe('Chater9Component', () => {
  let component: Chater9Component;
  let fixture: ComponentFixture<Chater9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
