import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p16Component } from './chater7p3p16.component';

describe('Chater7p3p16Component', () => {
  let component: Chater7p3p16Component;
  let fixture: ComponentFixture<Chater7p3p16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
