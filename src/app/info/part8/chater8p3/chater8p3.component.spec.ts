import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p3Component } from './chater8p3.component';

describe('Chater8p3Component', () => {
  let component: Chater8p3Component;
  let fixture: ComponentFixture<Chater8p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
