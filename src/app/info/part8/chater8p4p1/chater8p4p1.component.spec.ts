import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p4p1Component } from './chater8p4p1.component';

describe('Chater8p4p1Component', () => {
  let component: Chater8p4p1Component;
  let fixture: ComponentFixture<Chater8p4p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p4p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
