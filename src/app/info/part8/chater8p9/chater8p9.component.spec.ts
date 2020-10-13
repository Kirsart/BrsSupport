import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p9Component } from './chater8p9.component';

describe('Chater8p9Component', () => {
  let component: Chater8p9Component;
  let fixture: ComponentFixture<Chater8p9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
