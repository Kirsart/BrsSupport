import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater10p1p1Component } from './chater10p1p1.component';

describe('Chater10p1p1Component', () => {
  let component: Chater10p1p1Component;
  let fixture: ComponentFixture<Chater10p1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater10p1p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater10p1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
