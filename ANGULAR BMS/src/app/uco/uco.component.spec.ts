import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcoComponent } from './uco.component';

describe('UcoComponent', () => {
  let component: UcoComponent;
  let fixture: ComponentFixture<UcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
