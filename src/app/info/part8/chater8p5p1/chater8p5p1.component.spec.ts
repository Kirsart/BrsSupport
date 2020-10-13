import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p5p1Component } from './chater8p5p1.component';

describe('Chater8p5p1Component', () => {
  let component: Chater8p5p1Component;
  let fixture: ComponentFixture<Chater8p5p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p5p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p5p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
