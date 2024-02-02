import { Component, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BeInputComponent),
  multi: true,
};
@Component({
  selector: 'app-be-input',
  templateUrl: './be-input.component.html',
  styleUrls: ['./be-input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class BeInputComponent implements ControlValueAccessor{
  public formControl: FormControl = new FormControl();

  @Input() type!: string;
  @Input() imageUrl: string = '';
  @Input() placeholder: string = '';
  @Input() style: any;
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() class: string = ''

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
