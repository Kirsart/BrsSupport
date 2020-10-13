import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p7Component } from './chater8p7.component';

describe('Chater8p7Component', () => {
  let component: Chater8p7Component;
  let fixture: ComponentFixture<Chater8p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
