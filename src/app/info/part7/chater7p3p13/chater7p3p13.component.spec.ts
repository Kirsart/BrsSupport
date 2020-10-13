import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p13Component } from './chater7p3p13.component';

describe('Chater7p3p13Component', () => {
  let component: Chater7p3p13Component;
  let fixture: ComponentFixture<Chater7p3p13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
