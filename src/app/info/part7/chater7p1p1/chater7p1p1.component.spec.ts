import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p1p1Component } from './chater7p1p1.component';

describe('Chater7p1p1Component', () => {
  let component: Chater7p1p1Component;
  let fixture: ComponentFixture<Chater7p1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p1p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
