import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'biit-toggle',
  templateUrl: 'biit-toggle.component.html',
  styleUrls: ['biit-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitToggleComponent),
      multi: true
    }
  ]
})
export class BiitToggleComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() description: string;
  checked: boolean;

  onChange = (value: any) => {};
  onTouched = () => {};

  onToggle(item: boolean) {
    this.checked = item;
    this.onChange(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: boolean): void {
    this.checked = obj;
  }
}
