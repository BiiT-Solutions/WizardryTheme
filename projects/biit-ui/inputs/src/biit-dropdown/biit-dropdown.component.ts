import {Component, ElementRef, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
@Component({
  selector: 'biit-dropdown',
  templateUrl: './biit-dropdown.component.html',
  styleUrls: ['./biit-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitDropdownComponent),
      multi: true
    }
  ],
  host: {
    '(document:pointerdown)': 'handleMouseEvents($event)'
  }
})
export class BiitDropdownComponent implements ControlValueAccessor {

  @Input() title: string;
  @Input() primitive: boolean = false;
  @Input() compact: boolean = false;
  @Input() label: string;
  @Input() value: string;
  @Input() data: any[];

  public currentValue;
  public dropdownOpen: boolean = false;
  public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')}
  public get inputElement(): Element {return this.elem.nativeElement.querySelector('.input-object')}

  private currentIndex = -1;

  constructor(
    private elem: ElementRef
  ) { }

  onChange = (value: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.currentValue = value;
  }

  onModelChange(value: any) {
    this.currentValue = value;
    this.closeDropdown();
    this.onChange(value);
  }

  handleMouseEvents($event: PointerEvent) {
    if (!this.elem.nativeElement.contains($event.target)) {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.dropdownOpen = true;
    this.dropdownElement.setAttribute('aria-expanded', "true");
    (this.inputElement as HTMLInputElement).focus();
    this.currentIndex = 0;
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.dropdownElement.setAttribute('aria-expanded', "false");
    this.currentIndex = -1;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }
}
