import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeContactUsComponent } from './be-contact-us.component';

describe('BeContactUsComponent', () => {
  let component: BeContactUsComponent;
  let fixture: ComponentFixture<BeContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeContactUsComponent]
    });
    fixture = TestBed.createComponent(BeContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
