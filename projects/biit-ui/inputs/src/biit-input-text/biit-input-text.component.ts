import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
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
export class BiitInputTextComponent implements ControlValueAccessor, OnInit {

  @Input() placeholder: string = '';
  @Input() error: string;
  @Input() type: Type;
  @Input() icon: biitIcon;
  @Input() fieldName: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() maxLength: number;
  @Output() onActionPerformed: EventEmitter<string> = new EventEmitter<string>();

  reveal: boolean = false;
  value: string;
  protected readonly Type = Type;

  ngOnInit() {
    this.disabled = this.checkBooleanInput(this.disabled);
    this.required = this.checkBooleanInput(this.required);
    this.readonly = this.checkBooleanInput(this.readonly);
  }

  checkBooleanInput(value) {
    switch (value) {
      case undefined:
        return false;
      case false:
        return false;
      default:
        return true;
    }
  }

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
  NUMBER = 'NUMBER',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD'
}
