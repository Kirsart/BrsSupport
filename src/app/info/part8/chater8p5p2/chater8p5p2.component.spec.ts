import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p5p2Component } from './chater8p5p2.component';

describe('Chater8p5p2Component', () => {
  let component: Chater8p5p2Component;
  let fixture: ComponentFixture<Chater8p5p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p5p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p5p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
