import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSubscribeComponent } from './be-subscribe.component';

describe('BeSubscribeComponent', () => {
  let component: BeSubscribeComponent;
  let fixture: ComponentFixture<BeSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeSubscribeComponent]
    });
    fixture = TestBed.createComponent(BeSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
