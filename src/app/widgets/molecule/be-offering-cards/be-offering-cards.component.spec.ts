import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeOfferingCardsComponent } from './be-offering-cards.component';

describe('BeOfferingCardsComponent', () => {
  let component: BeOfferingCardsComponent;
  let fixture: ComponentFixture<BeOfferingCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeOfferingCardsComponent]
    });
    fixture = TestBed.createComponent(BeOfferingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
