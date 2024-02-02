import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLetsConnectComponent } from './be-lets-connect.component';

describe('BeLetsConnectComponent', () => {
  let component: BeLetsConnectComponent;
  let fixture: ComponentFixture<BeLetsConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeLetsConnectComponent]
    });
    fixture = TestBed.createComponent(BeLetsConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
