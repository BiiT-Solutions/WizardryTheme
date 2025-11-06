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
  private clickTimer: NodeJS.Timeout | undefined;

  onChange = (value: any) => {};
  onTouched = () => {};

  onToggle() {
    if (this.disabled) {
      return;
    }
    switch (this.checked) {
      case true:
        this.checked = false;
        break;
      case false:
        this.checked = undefined;
        break;
      case undefined:
        this.checked = true;
        break;
    }
    if (this.clickTimer) {
      clearTimeout(this.clickTimer);
      this.clickTimer = undefined;
    }
    this.clickTimer = setTimeout(() => {
      this.onChange(this.checked);
      clearTimeout(this.clickTimer);
      this.clickTimer = undefined;
    }, 1000);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: boolean | undefined): void {
    this.checked = obj;
  }
}
