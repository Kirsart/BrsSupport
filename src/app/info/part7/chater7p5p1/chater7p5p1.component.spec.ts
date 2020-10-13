import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p5p1Component } from './chater7p5p1.component';

describe('Chater7p5p1Component', () => {
  let component: Chater7p5p1Component;
  let fixture: ComponentFixture<Chater7p5p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p5p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p5p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
