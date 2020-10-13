import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p5p7Component } from './chater7p5p7.component';

describe('Chater7p5p7Component', () => {
  let component: Chater7p5p7Component;
  let fixture: ComponentFixture<Chater7p5p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p5p7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p5p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
