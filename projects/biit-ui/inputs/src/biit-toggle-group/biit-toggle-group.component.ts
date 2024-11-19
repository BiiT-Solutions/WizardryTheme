import {Component, Input, forwardRef, ContentChildren, QueryList, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BiitToggleButtonComponent} from "./biit-toggle-button.component";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-toggle-group',
  templateUrl: 'biit-toggle-group.component.html',
  styleUrls: ['biit-toggle-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitToggleGroupComponent),
      multi: true
    }
  ]
})
export class BiitToggleGroupComponent implements OnInit, ControlValueAccessor {
  @ContentChildren(BiitToggleButtonComponent) buttons: QueryList<BiitToggleButtonComponent>
  @Input() disabled;
  @Input() multiple;

  value: any | any[];

  onChange = (value: any) => {};
  onTouched = () => {};

  ngOnInit() {
    this.disabled = coerceBooleanProperty(this.disabled);
    this.multiple = coerceBooleanProperty(this.multiple);
  }

  onToggle(value: any) {
    if (this.multiple && !this.value) {
      this.value = [];
    }

    if (this.multiple) {
      if (this.value.indexOf(value) === -1) {
        this.value = [...this.value, value];
      } else {
        this.value = this.value.filter(item => value != item);
      }
    } else {
      this.value = value;
    }

    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onChange(this.value);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }
}
