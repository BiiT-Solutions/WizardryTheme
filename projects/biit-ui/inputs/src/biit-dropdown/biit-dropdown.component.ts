import {Component, ElementRef, forwardRef, Input, OnInit} from '@angular/core';
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
export class BiitDropdownComponent implements ControlValueAccessor, OnInit {

  @Input() title: string;
  @Input() primitive: boolean = false;
  @Input() compact: boolean = false;
  @Input() label: string = '';
  @Input() value: string;
  @Input() data: any[];
  @Input() disabled: boolean = false;

  public currentValue;
  public filterText: string = '';
  public filteredData: any[];
  public dropdownOpen: boolean = false;
  public get dropdownElement(): HTMLElement {return this.elem.nativeElement.querySelector('.dropdown-list')}
  public get inputElement(): HTMLElement {return this.elem.nativeElement.querySelector('.input-object')}

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit() {
    this.handleFilter();
  }

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

  handleKeyboardEvents($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        if (this.dropdownOpen){
          if (document.activeElement.tagName == "BUTTON" && document.activeElement.previousElementSibling) {
            (document.activeElement.previousElementSibling as HTMLElement)?.focus();
          } else if (document.activeElement !== this.inputElement) {
            this.inputElement.focus();
          }
        } else if (this.data.findIndex(i => i == this.currentValue) > 0) {
          this.onModelChange(this.data[this.data.findIndex(i => i == this.currentValue) - 1]);
        }
        break;

      case 'ArrowDown':
        if (this.dropdownOpen){
          if (document.activeElement === this.inputElement && this.filteredData.length) {
            (this.dropdownElement.firstChild as HTMLElement).focus();
          } else {
            (document.activeElement.nextElementSibling as HTMLElement)?.focus();
          }
        } else if (this.data.findIndex(i => i == this.currentValue) < this.data.length -1) {
          this.onModelChange(this.data[this.data.findIndex(i => i == this.currentValue) + 1]);
        }
        break;

      case 'Escape':
        if (document.activeElement.tagName == "BUTTON") {
          this.inputElement.focus();
        } else {
          this.closeDropdown();
        }
        break;

      default:
        break;
    }
    $event.stopPropagation();
  }

  handleFilter() {
    if (this.filterText) {
      this.filteredData = this.data.filter(item =>
        item[this.label].toLowerCase().includes(
          this.filterText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()));
    } else {
      this.filteredData = this.data;
    }
  }

  clearFilter() {
    this.filterText = '';
    this.handleFilter();
  }

  openDropdown() {
    this.setTooltipComponentProperties();
    (this.inputElement as HTMLInputElement).focus();

    // Setting a timeout because it doesn't load upwards/downwards css classes on execution time
    setTimeout(() => {
      this.dropdownOpen = true;
      this.dropdownElement.setAttribute('aria-expanded', "true");
    }, 100);
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.dropdownElement.setAttribute('aria-expanded', "false");
    setTimeout(() => { this.clearFilter() }, 1000);
    this.inputElement.focus();
  }

  private setTooltipComponentProperties() {
    let dropdown = this.dropdownElement;

    let input = this.inputElement;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Checking available screen space
    const fitsBottom = bottomCheck();
    const fitsRight = rightCheck();
    const fitsLeft = leftCheck();

    if (!fitsRight && fitsLeft) {
      dropdown.style.marginLeft = input.offsetWidth - dropdown.offsetWidth + 'px';
    } else {
      dropdown.style.marginLeft = null;
    }

    if (!fitsBottom) {
      dropdown.classList.add('onwards');
      dropdown.style.marginTop = -(dropdown.offsetHeight + input.offsetHeight + 1.05*rem) + 'px';
    } else {
      dropdown.classList.add('downwards');
      dropdown.style.marginTop = null;
    }

    // Support inner functions
    function bottomCheck(): boolean {
        return input.getBoundingClientRect().bottom + dropdown.offsetHeight <= window.innerHeight &&
          input.getBoundingClientRect().top - 1.05*rem - dropdown.offsetHeight <= 0;
    }

    function rightCheck(): boolean {
      return input.getBoundingClientRect().right + dropdown.offsetWidth <= window.innerWidth;
    }

    function leftCheck(): boolean {
      return input.getBoundingClientRect().right - dropdown.offsetWidth >= 0;
    }
  }
}
