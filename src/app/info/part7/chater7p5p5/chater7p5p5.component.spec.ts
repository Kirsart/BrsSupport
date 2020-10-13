import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p5p5Component } from './chater7p5p5.component';

describe('Chater7p5p5Component', () => {
  let component: Chater7p5p5Component;
  let fixture: ComponentFixture<Chater7p5p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p5p5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p5p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
