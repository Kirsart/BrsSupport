import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p9p3Component } from './chater8p9p3.component';

describe('Chater8p9p3Component', () => {
  let component: Chater8p9p3Component;
  let fixture: ComponentFixture<Chater8p9p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p9p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p9p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
