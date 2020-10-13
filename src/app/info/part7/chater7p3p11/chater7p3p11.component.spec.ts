import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p11Component } from './chater7p3p11.component';

describe('Chater7p3p11Component', () => {
  let component: Chater7p3p11Component;
  let fixture: ComponentFixture<Chater7p3p11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
