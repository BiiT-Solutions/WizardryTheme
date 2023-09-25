import {Component, Input, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'biit-radio-button',
  templateUrl: 'biit-radio-button.component.html',
  styleUrls: ['biit-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitRadioButtonComponent),
      multi: true
    }
  ]
})
export class BiitRadioButtonComponent implements ControlValueAccessor, OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() disabled;
  selected: any;
  hover = false;

  ngOnInit() {
    this.disabled = !!this.disabled;
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(selected: any): void {
    this.selected = selected;
  }

  onModelChange(selected: any) {
    this.selected = selected;
    this.onChange(selected);
  }
}
