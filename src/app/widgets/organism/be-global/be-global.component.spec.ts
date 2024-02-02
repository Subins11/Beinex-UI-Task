import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeGlobalComponent } from './be-global.component';

describe('BeGlobalComponent', () => {
  let component: BeGlobalComponent;
  let fixture: ComponentFixture<BeGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeGlobalComponent]
    });
    fixture = TestBed.createComponent(BeGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
