import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p1Component } from './chater7p3p1.component';

describe('Chater7p3p1Component', () => {
  let component: Chater7p3p1Component;
  let fixture: ComponentFixture<Chater7p3p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
