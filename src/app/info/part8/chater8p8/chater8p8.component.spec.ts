import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p8Component } from './chater8p8.component';

describe('Chater8p8Component', () => {
  let component: Chater8p8Component;
  let fixture: ComponentFixture<Chater8p8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
