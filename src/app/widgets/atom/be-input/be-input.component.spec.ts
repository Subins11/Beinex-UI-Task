import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeInputComponent } from './be-input.component';

describe('BeInputComponent', () => {
  let component: BeInputComponent;
  let fixture: ComponentFixture<BeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeInputComponent]
    });
    fixture = TestBed.createComponent(BeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
