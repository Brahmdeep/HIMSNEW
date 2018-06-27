import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedregComponent } from './medreg.component';

describe('MedregComponent', () => {
  let component: MedregComponent;
  let fixture: ComponentFixture<MedregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
