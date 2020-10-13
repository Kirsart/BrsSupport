import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p3Component } from './chater7p3p3.component';

describe('Chater7p3p3Component', () => {
  let component: Chater7p3p3Component;
  let fixture: ComponentFixture<Chater7p3p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
