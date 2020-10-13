import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p9p6Component } from './chater8p9p6.component';

describe('Chater8p9p6Component', () => {
  let component: Chater8p9p6Component;
  let fixture: ComponentFixture<Chater8p9p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p9p6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p9p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
