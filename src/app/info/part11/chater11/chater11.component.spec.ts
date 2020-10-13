import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater11Component } from './chater11.component';

describe('Chater11Component', () => {
  let component: Chater11Component;
  let fixture: ComponentFixture<Chater11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
