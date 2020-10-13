import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater9p1Component } from './chater9p1.component';

describe('Chater9p1Component', () => {
  let component: Chater9p1Component;
  let fixture: ComponentFixture<Chater9p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater9p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater9p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
