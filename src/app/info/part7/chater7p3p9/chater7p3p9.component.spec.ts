import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p9Component } from './chater7p3p9.component';

describe('Chater7p3p9Component', () => {
  let component: Chater7p3p9Component;
  let fixture: ComponentFixture<Chater7p3p9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
