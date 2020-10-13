import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chater8p7p2Component } from './chater8p7p2.component';

describe('Chater8p7p2Component', () => {
  let component: Chater8p7p2Component;
  let fixture: ComponentFixture<Chater8p7p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chater8p7p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chater8p7p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
