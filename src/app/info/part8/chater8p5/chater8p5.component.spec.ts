import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p5Component } from './chater8p5.component';

describe('Chater8p5Component', () => {
  let component: Chater8p5Component;
  let fixture: ComponentFixture<Chater8p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
