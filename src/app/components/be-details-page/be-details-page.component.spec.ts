import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeDetailsPageComponent } from './be-details-page.component';

describe('BeDetailsPageComponent', () => {
  let component: BeDetailsPageComponent;
  let fixture: ComponentFixture<BeDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeDetailsPageComponent]
    });
    fixture = TestBed.createComponent(BeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
