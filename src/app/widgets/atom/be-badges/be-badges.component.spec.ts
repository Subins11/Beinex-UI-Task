import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeBadgesComponent } from './be-badges.component';

describe('BeBadgesComponent', () => {
  let component: BeBadgesComponent;
  let fixture: ComponentFixture<BeBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeBadgesComponent]
    });
    fixture = TestBed.createComponent(BeBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
