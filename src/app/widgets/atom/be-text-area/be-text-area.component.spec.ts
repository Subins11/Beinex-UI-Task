import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeTextAreaComponent } from './be-text-area.component';

describe('BeTextAreaComponent', () => {
  let component: BeTextAreaComponent;
  let fixture: ComponentFixture<BeTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeTextAreaComponent]
    });
    fixture = TestBed.createComponent(BeTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
