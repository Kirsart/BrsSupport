import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater7p6Component } from './chater7p6.component';

describe('Chater7p6Component', () => {
  let component: Chater7p6Component;
  let fixture: ComponentFixture<Chater7p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater7p6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater7p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
