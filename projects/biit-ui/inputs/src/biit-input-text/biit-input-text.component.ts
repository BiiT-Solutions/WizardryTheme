import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'biit-input-text',
  templateUrl: './biit-input-text.component.html',
  styleUrls: ['./biit-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitInputTextComponent),
      multi: true
    }
  ]
})
export class BiitInputTextComponent implements ControlValueAccessor{

  @Input('placeholder') set setPlaceHolder(value: string) {
    this.placeholder = value.toUpperCase();
  }
  @Input() width: string = '100%';
  @Input() error: string;
  @Input() type: Type;

  reveal: boolean = false;
  placeholder: string = '';
  value: string;
  protected readonly Type = Type;

  onChange = (_: any) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }
}
export enum Type {
  TEXT = 'TEXT',
  PASSWORD = 'PASSWORD'
}
