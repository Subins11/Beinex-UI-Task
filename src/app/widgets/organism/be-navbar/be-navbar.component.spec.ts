import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeNavbarComponent } from './be-navbar.component';

describe('BeNavbarComponent', () => {
  let component: BeNavbarComponent;
  let fixture: ComponentFixture<BeNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeNavbarComponent]
    });
    fixture = TestBed.createComponent(BeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
