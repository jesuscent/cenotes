import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenotesComponent } from './cenotes.component';

describe('CenotesComponent', () => {
  let component: CenotesComponent;
  let fixture: ComponentFixture<CenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
