import {Component, Input, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'biit-dropdown',
  templateUrl: 'biit-dropdown.component.html',
  styleUrls: ['biit-dropdown.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => BiitDropdownComponent), multi: true }
  ]
})
export class BiitDropdownComponent<T> implements ControlValueAccessor {
  @Input() items: T[]; // List of items on list
  @Input() label = ''; // Name of the label variable of the object
  @Input() disabled = false;
  selected: T;
  menuOpen = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onClick(item: T) {
    this.selected = item;
    this.toggleMenu();
    this.onChange(this.selected);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }
}
