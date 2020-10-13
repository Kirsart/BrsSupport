import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p4Component } from './chater7p4.component';

describe('Chater7p4Component', () => {
  let component: Chater7p4Component;
  let fixture: ComponentFixture<Chater7p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
