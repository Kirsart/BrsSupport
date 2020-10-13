import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p10Component } from './chater8p10.component';

describe('Chater8p10Component', () => {
  let component: Chater8p10Component;
  let fixture: ComponentFixture<Chater8p10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
