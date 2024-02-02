import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-header-top',
  templateUrl: './be-header-top.component.html',
  styleUrls: ['./be-header-top.component.scss']
})
export class BeHeaderTopComponent {
  @Input() Icon: string = '';
  @Input() text: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';

  onSubmit() {
    alert('Schedule a Call');
  }
}
