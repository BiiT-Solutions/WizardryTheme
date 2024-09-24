import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'biit-checkbox',
  templateUrl: 'biit-checkbox.component.html',
  styleUrls: ['biit-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitCheckboxComponent),
      multi: true
    }
  ]
})
export class BiitCheckboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() description: string;
  checked: any;

  onChange = (value: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  onModelChange(event: boolean) {
    this.checked = event;
    this.onChange(event);
  }
}
