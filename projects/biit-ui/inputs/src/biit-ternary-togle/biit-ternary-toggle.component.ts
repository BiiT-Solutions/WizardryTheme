import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'biit-ternary-togle',
  templateUrl: './biit-ternary-toggle.component.html',
  styleUrls: ['./biit-ternary-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitTernaryToggleComponent),
      multi: true
    }
  ]
})
export class BiitTernaryToggleComponent implements ControlValueAccessor{
  @Input() disabled = false;
  checked: boolean | undefined;

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
