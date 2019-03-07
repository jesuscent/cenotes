import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCenoteComponent } from './add-cenote.component';

describe('AddCenoteComponent', () => {
  let component: AddCenoteComponent;
  let fixture: ComponentFixture<AddCenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
