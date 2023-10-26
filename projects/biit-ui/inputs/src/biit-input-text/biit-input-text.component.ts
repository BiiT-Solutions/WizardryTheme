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
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() regEx: RegExp;
  @Output() onActionPerformed: EventEmitter<string> = new EventEmitter<string>();

  reveal: boolean = false;
  value: string;
  minLengthError: boolean = false;
  regExError: boolean = false;
  protected readonly Type = Type;

  ngOnInit() {
    this.disabled = this.checkBooleanInput(this.disabled);
    this.required = this.checkBooleanInput(this.required);
    this.readonly = this.checkBooleanInput(this.readonly);

    if (this.type == Type.EMAIL) {
      this.regEx = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");
    }
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

  validateInput(event) {
    if (this.value.length) {
      if (this.regEx) {
        this.regExError = !this.regEx.test(event);
      }
      if (this.minLength) {
        this.minLengthError = this.value.length < this.minLength;
      }
    } else {
      this.regExError = false;
      this.minLengthError = false;
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
