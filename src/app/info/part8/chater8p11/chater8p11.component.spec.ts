import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p11Component } from './chater8p11.component';

describe('Chater8p11Component', () => {
  let component: Chater8p11Component;
  let fixture: ComponentFixture<Chater8p11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
