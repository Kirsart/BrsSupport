import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p9p4Component } from './chater8p9p4.component';

describe('Chater8p9p4Component', () => {
  let component: Chater8p9p4Component;
  let fixture: ComponentFixture<Chater8p9p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p9p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p9p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
