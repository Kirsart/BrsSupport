import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p14Component } from './chater7p3p14.component';

describe('Chater7p3p14Component', () => {
  let component: Chater7p3p14Component;
  let fixture: ComponentFixture<Chater7p3p14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
