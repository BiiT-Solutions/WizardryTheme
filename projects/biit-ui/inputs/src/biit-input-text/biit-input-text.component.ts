import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {biitIcon} from 'biit-icons-collection';

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

  @Input() placeholder: string = '';
  @Input() error: string;
  @Input() type: Type;
  @Input() icon: biitIcon;
  @Output() onActionPerformed: EventEmitter<void> = new EventEmitter<void>();

  reveal: boolean = false;
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
  }
}

export enum Type {
  TEXT = 'TEXT',
  PASSWORD = 'PASSWORD'
}
