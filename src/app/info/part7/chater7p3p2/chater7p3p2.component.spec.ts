import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p2Component } from './chater7p3p2.component';

describe('Chater7p3p2Component', () => {
  let component: Chater7p3p2Component;
  let fixture: ComponentFixture<Chater7p3p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
