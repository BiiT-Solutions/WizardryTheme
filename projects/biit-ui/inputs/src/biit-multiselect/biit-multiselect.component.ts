import {AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {biitIcon} from 'biit-icons-collection';

export enum BiitMultiselectType {
  DEFAULT = 'default',
  ICON = 'icon'
}

@Component({
  selector: 'biit-multiselect',
  templateUrl: './biit-multiselect.component.html',
  styleUrls: ['./biit-multiselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitMultiselectComponent),
      multi: true
    }
  ],
  host: {
    '(document:pointerdown)': 'handleMouseEvents($event)'
  }
})

export class BiitMultiselectComponent implements ControlValueAccessor, OnInit, AfterViewInit {

  @Input() title: string;
  @Input() primitive: boolean;
  @Input() compact: boolean;
  @Input() type: BiitMultiselectType = BiitMultiselectType.DEFAULT;
  @Input() icon: biitIcon = 'column_selection';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() data: any[] = [];
  @Input() disabled: boolean;
  @Input() mandatory: boolean;

  public currentValues: any[] = [];
  public filterText: string = '';
  public filteredData: any[] = [];
  public dropdownOpen: boolean = false;
  public get dropdownElement(): HTMLElement {return this.elem.nativeElement.querySelector('.dropdown-list')};
  public get inputElement(): HTMLElement {return this.elem.nativeElement.querySelector('.input-object')};
  public hover = new MouseEvent('pointerover', { 'bubbles': true });

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit() {
    this.primitive = this.checkBooleanInput(this.primitive);
    this.compact = this.checkBooleanInput(this.compact);
    this.disabled = this.checkBooleanInput(this.disabled);
    this.mandatory = this.checkBooleanInput(this.mandatory);
    this.handleFilter();
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

  ngAfterViewInit() {
    this.dropdownElement?.querySelectorAll('.disabled').forEach(i => {
      i.classList.remove('disabled');
    });
  }

  onChange = (values: any[]) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(values: any[]): void {
    this.currentValues = values;
  }

  onModelChange(value: any) {
    if (!this.currentValues.includes(value)) {
      this.currentValues.push(value);
    } else {
      this.currentValues.splice(this.currentValues.indexOf(value), 1);
    }
    this.onChange(this.currentValues);
  }

  handleMouseEvents($event: PointerEvent) {
    if (!this.elem.nativeElement.contains($event.target)) {
      this.closeDropdown();
    }
  }

  handleKeyboardEvents($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        if (document.activeElement.tagName == "BIIT-CHECKBOX") {
          (document.activeElement.previousElementSibling as HTMLElement)?.focus();
        }
        break;

      case 'ArrowDown':
        if (document.activeElement.tagName == "BIIT-CHECKBOX"){
          (document.activeElement.nextElementSibling as HTMLElement)?.focus();
        }
        break;

      case 'Escape':
        if (document.activeElement.tagName == "BIIT-CHECKBOX" && this.type == BiitMultiselectType.DEFAULT) {
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
      if (this.primitive) {
        this.filteredData = this.data.filter(item =>
          item.toString().toLowerCase().includes(
            this.filterText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()));
      } else {
        this.filteredData = this.data.filter(item =>
          item[this.label].toLowerCase().includes(
            this.filterText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()));
      }
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
    if (this.type == BiitMultiselectType.DEFAULT) {
      (this.inputElement as HTMLInputElement).focus();
    }

    // Setting a timeout because it doesn't load upwards/downwards css classes on execution time
    setTimeout(() => {
      this.dropdownOpen = true;
      this.dropdownElement.setAttribute('aria-expanded', "true");
    }, 100);
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.dropdownElement.setAttribute('aria-expanded', "false");
    setTimeout(() => { this.clearFilter(); }, 1000);
  }

  private setTooltipComponentProperties() {
    let button;
    let dropdown = this.dropdownElement;
    dropdown.style.display = 'block';

    if (this.type == BiitMultiselectType.DEFAULT) {
      button = this.inputElement;
    } else {
      button = this.elem.nativeElement.querySelector("button");
    }

    // Checking available screen space
    const fitsBottom = bottomCheck();
    const fitsRight = rightCheck();
    const fitsLeft = leftCheck();

    if (!fitsRight && fitsLeft) {
      dropdown.style.marginLeft = button.offsetWidth - dropdown.offsetWidth + 'px';
    } else {
      dropdown.style.marginLeft = null;
    }

    dropdown.classList.remove('onwards');
    dropdown.classList.remove('downwards');

    if (!fitsBottom) {
      dropdown.classList.add('onwards');
      dropdown.style.marginTop = -(dropdown.offsetHeight + button.offsetHeight) + 'px';
    } else {
      dropdown.classList.add('downwards');
      dropdown.style.marginTop = null;
    }

    // Support inner functions
    function bottomCheck(): boolean {
        return button.getBoundingClientRect().bottom + dropdown.offsetHeight <= window.innerHeight ||
          button.getBoundingClientRect().top - dropdown.offsetHeight <= 0;
    }

    function rightCheck(): boolean {
      return button.getBoundingClientRect().right + dropdown.offsetWidth <= window.innerWidth;
    }

    function leftCheck(): boolean {
      return button.getBoundingClientRect().right - dropdown.offsetWidth >= 0;
    }
  }
}
