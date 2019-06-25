import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listweb2Component } from './listweb2.component';

describe('Listweb2Component', () => {
  let component: Listweb2Component;
  let fixture: ComponentFixture<Listweb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listweb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listweb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
