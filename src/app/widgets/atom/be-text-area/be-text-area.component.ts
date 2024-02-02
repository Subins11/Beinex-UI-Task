import { Component, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BeTextAreaComponent),
  multi: true,
};
@Component({
  selector: 'app-be-text-area',
  templateUrl: './be-text-area.component.html',
  styleUrls: ['./be-text-area.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class BeTextAreaComponent {

  public formControl: FormControl = new FormControl();

  @Input() placeholder!: string;
  @Input() imageUrl: string = '';

  @Input() parentForm!: FormGroup;

  // The internal data model
  private innerValue: any = '';

  writeValue(value: any): void {
    this.formControl.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }

  registerOnTouched(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }


}
