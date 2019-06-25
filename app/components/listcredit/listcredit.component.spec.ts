import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreditComponent } from './listcredit.component';

describe('ListcreditComponent', () => {
  let component: ListcreditComponent;
  let fixture: ComponentFixture<ListcreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
