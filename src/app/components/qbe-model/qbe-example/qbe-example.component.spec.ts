import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QbeExampleComponent } from './qbe-example.component';

describe('QbeExampleComponent', () => {
  let component: QbeExampleComponent;
  let fixture: ComponentFixture<QbeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QbeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QbeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
