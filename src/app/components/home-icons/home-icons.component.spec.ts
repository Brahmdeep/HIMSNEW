import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconsComponent } from './home-icons.component';

describe('HomeIconsComponent', () => {
  let component: HomeIconsComponent;
  let fixture: ComponentFixture<HomeIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
