import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeCopyrightComponent } from './be-copyright.component';

describe('BeCopyrightComponent', () => {
  let component: BeCopyrightComponent;
  let fixture: ComponentFixture<BeCopyrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeCopyrightComponent]
    });
    fixture = TestBed.createComponent(BeCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
