import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p15Component } from './chater7p3p15.component';

describe('Chater7p3p15Component', () => {
  let component: Chater7p3p15Component;
  let fixture: ComponentFixture<Chater7p3p15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
