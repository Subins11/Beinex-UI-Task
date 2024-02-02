import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHeaderTopComponent } from './be-header-top.component';

describe('BeHeaderTopComponent', () => {
  let component: BeHeaderTopComponent;
  let fixture: ComponentFixture<BeHeaderTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeHeaderTopComponent]
    });
    fixture = TestBed.createComponent(BeHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
