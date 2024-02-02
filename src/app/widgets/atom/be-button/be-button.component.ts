import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-be-button',
  templateUrl: './be-button.component.html',
  styleUrls: ['./be-button.component.scss']
})
export class BeButtonComponent {
  @Output() buttonClick = new EventEmitter();

  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() fontSize: string = ''
  @Input() class : string = ''
  @Input() disabled!: boolean;
  
  buttonClicked() {
    this.buttonClick.emit();
  }
}
