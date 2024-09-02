import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {biitIcon} from 'biit-icons-collection';
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-input-text',
  templateUrl: './biit-input-text.component.html',
  styleUrls: ['./biit-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitInputTextComponent),
      multi: true
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {scope: 'biit-ui/inputs', alias: "inputs"}
    }
  ]
})
export class BiitInputTextComponent implements ControlValueAccessor, OnInit {

  @Input() set placeholder(placeholder: string) {
    this._placeholder = placeholder;
  }
  protected _placeholder = '';
  @Input() error: string;
  @Input() info: string;
  @Input() type: Type;
  @Input() icon: biitIcon;
  @Input() fieldName: string;
  @Input() disabled;
  @Input() required;
  @Input() readonly;
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
    this.disabled = coerceBooleanProperty(this.disabled);
    this.required = coerceBooleanProperty(this.required);
    this.readonly = coerceBooleanProperty(this.readonly);

    if (this.type == Type.EMAIL) {
      this.regEx = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");
    }
  }

  validateInput() {
    if (this.value !== undefined) {
      if (this.regEx) {
        this.regExError = !this.regEx.test(this.value);
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
