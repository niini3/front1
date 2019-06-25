import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappserviceComponent } from './listappservice.component';

describe('ListappserviceComponent', () => {
  let component: ListappserviceComponent;
  let fixture: ComponentFixture<ListappserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListappserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListappserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
