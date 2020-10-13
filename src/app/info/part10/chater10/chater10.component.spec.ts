import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater10Component } from './chater10.component';

describe('Chater10Component', () => {
  let component: Chater10Component;
  let fixture: ComponentFixture<Chater10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
