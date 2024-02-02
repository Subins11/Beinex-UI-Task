import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeGlobalCardsComponent } from './be-global-cards.component';

describe('BeGlobalCardsComponent', () => {
  let component: BeGlobalCardsComponent;
  let fixture: ComponentFixture<BeGlobalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeGlobalCardsComponent]
    });
    fixture = TestBed.createComponent(BeGlobalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
