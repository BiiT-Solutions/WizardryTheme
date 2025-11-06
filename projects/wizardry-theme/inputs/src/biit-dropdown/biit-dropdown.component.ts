import {
  Component,
  DoCheck,
  ElementRef,
  forwardRef,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnInit
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {biitIcon} from "biit-icons-collection";
import {BiitMultiselectType} from "../biit-multiselect/biit-multiselect.component";

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
export class BiitDropdownComponent implements ControlValueAccessor, OnInit, DoCheck {

  @Input() title: string;
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() descriptionLabel: string = '';
  @Input() description: string = '';
  @Input() data: any[] = [];
  protected isPrimitive: boolean;
  @Input() set primitive(primitive: any) {
    this.isPrimitive = coerceBooleanProperty(primitive);
  };
  protected isCompact: boolean;
  @Input() set compact(compact: any) {
    this.isCompact = coerceBooleanProperty(compact);
  };
  protected isDisabled: boolean;
  @Input() set disabled(disabled: any) {
    this.isDisabled = coerceBooleanProperty(disabled);
  };
  protected isRequired: boolean;
  @Input() set required(required: any) {
    this.isRequired = coerceBooleanProperty(required);
  };
  protected isSortAsc: boolean;
  @Input('sort-asc') set sortAsc(sortAsc: any) {
    this.isSortAsc = coerceBooleanProperty(sortAsc);
  };
  protected isSortDesc: boolean;
  @Input('sort-desc') set sortDesc(sortDesc: any) {
    this.isSortDesc = coerceBooleanProperty(sortDesc);
  };
  @Input() icon: biitIcon;

  public currentValue;
  public filterText: string = '';
  public filteredData: any[];
  public dropdownOpen: boolean = false;
  public get dropdownElement(): HTMLElement {return this.elem.nativeElement.querySelector('.dropdown-list')}
  public get inputElement(): HTMLElement {return this.elem.nativeElement.querySelector('.input-object')}

  private differ: IterableDiffer<string>;

  constructor(
    private elem: ElementRef,
    iDiff: IterableDiffers
  ) {
    this.differ = iDiff.find(this.data).create();
  }

  ngOnInit() {
    this.handleFilter();
  }

  ngDoCheck() {
    if (this.differ.diff(this.data)) {
      this.handleFilter();
    }
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
    this.currentValue = this.isPrimitive ? this.data.find(i => i[this.value] === value) : value;
  }

  onModelChange(value: any) {
    this.currentValue = value;
    this.closeDropdown();
    this.onChange(this.isPrimitive ? value[this.value] : value);
  }

  handleMouseEvents($event: PointerEvent) {
    if (this.dropdownOpen && !this.elem.nativeElement.contains($event.target)) {
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
    if (this.data) {
      this.sortData();
      if (this.filterText) {
        if (this.isPrimitive) {
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
    } else {
      this.filteredData = [];
    }
  }

  clearFilter() {
    this.filterText = '';
    this.handleFilter();
  }

  sortData() {
    if (this.isPrimitive) {
      if (this.isSortAsc || this.isSortDesc) {
        this.data.sort(
          (a,b) => this.isSortAsc ? (a>b ? 1 : (b>a ? -1 : 0)) : (a>b ? -1 : (b>a ? 1 : 0))
        );
      }
    } else {
      if (this.isSortAsc || this.isSortDesc) {
        this.data.sort((a,b) => {
          if ( a[this.label] < b[this.label] ){
            return this.isSortAsc ? -1 : 1;
          } else if ( a[this.label] > b[this.label] ){
            return this.isSortAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
      }
    }
  }

  openDropdown() {
    this.setTooltipComponentProperties();
    if (!this.icon) {
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

    if (!this.icon) {
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
