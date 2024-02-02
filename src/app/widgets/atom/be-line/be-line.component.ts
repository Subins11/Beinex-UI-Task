import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-line',
  templateUrl: './be-line.component.html',
  styleUrls: ['./be-line.component.scss']
})
export class BeLineComponent {
  @Input() class:  string = ''
}
