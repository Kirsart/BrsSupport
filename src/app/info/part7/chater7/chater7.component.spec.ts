import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7Component } from './chater7.component';

describe('Chater7Component', () => {
  let component: Chater7Component;
  let fixture: ComponentFixture<Chater7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
