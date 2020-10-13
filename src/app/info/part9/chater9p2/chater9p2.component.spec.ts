import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater9p2Component } from './chater9p2.component';

describe('Chater9p2Component', () => {
  let component: Chater9p2Component;
  let fixture: ComponentFixture<Chater9p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater9p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater9p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
