import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p5p4Component } from './chater7p5p4.component';

describe('Chater7p5p4Component', () => {
  let component: Chater7p5p4Component;
  let fixture: ComponentFixture<Chater7p5p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p5p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p5p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
