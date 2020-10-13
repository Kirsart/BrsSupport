import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8Component } from './chater8.component';

describe('Chater8Component', () => {
  let component: Chater8Component;
  let fixture: ComponentFixture<Chater8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
