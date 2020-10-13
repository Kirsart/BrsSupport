import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p4p1Component } from './chater7p4p1.component';

describe('Chater7p4p1Component', () => {
  let component: Chater7p4p1Component;
  let fixture: ComponentFixture<Chater7p4p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p4p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
