import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLineComponent } from './be-line.component';

describe('BeLineComponent', () => {
  let component: BeLineComponent;
  let fixture: ComponentFixture<BeLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeLineComponent]
    });
    fixture = TestBed.createComponent(BeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
