import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualnameComponent } from './mutualname.component';

describe('MutualnameComponent', () => {
  let component: MutualnameComponent;
  let fixture: ComponentFixture<MutualnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
