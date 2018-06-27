import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyRegComponent } from './already-reg.component';

describe('AlreadyRegComponent', () => {
  let component: AlreadyRegComponent;
  let fixture: ComponentFixture<AlreadyRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
