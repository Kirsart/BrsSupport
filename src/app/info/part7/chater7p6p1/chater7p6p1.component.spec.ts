import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p6p1Component } from './chater7p6p1.component';

describe('Chater7p6p1Component', () => {
  let component: Chater7p6p1Component;
  let fixture: ComponentFixture<Chater7p6p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p6p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p6p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
