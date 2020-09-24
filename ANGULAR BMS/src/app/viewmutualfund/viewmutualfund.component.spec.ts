import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmutualfundComponent } from './viewmutualfund.component';

describe('ViewmutualfundComponent', () => {
  let component: ViewmutualfundComponent;
  let fixture: ComponentFixture<ViewmutualfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmutualfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmutualfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
