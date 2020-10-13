import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater10p2Component } from './chater10p2.component';

describe('Chater10p2Component', () => {
  let component: Chater10p2Component;
  let fixture: ComponentFixture<Chater10p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater10p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater10p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
