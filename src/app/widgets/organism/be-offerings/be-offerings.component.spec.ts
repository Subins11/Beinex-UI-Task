import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeOfferingsComponent } from './be-offerings.component';

describe('BeOfferingsComponent', () => {
  let component: BeOfferingsComponent;
  let fixture: ComponentFixture<BeOfferingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeOfferingsComponent]
    });
    fixture = TestBed.createComponent(BeOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
