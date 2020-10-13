import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p7Component } from './chater7p3p7.component';

describe('Chater7p3p7Component', () => {
  let component: Chater7p3p7Component;
  let fixture: ComponentFixture<Chater7p3p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
