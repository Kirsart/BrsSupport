import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p8Component } from './chater7p3p8.component';

describe('Chater7p3p8Component', () => {
  let component: Chater7p3p8Component;
  let fixture: ComponentFixture<Chater7p3p8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
