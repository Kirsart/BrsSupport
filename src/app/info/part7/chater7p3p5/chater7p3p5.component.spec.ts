import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p3p5Component } from './chater7p3p5.component';

describe('Chater7p3p5Component', () => {
  let component: Chater7p3p5Component;
  let fixture: ComponentFixture<Chater7p3p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p3p5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p3p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
