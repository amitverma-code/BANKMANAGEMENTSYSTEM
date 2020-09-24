import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnbComponent } from './pnb.component';

describe('PnbComponent', () => {
  let component: PnbComponent;
  let fixture: ComponentFixture<PnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
