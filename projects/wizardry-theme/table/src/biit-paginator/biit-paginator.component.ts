import {
  Component,
  ElementRef,
  forwardRef,
  ViewChild
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BiitPaginatorOptions} from './models/biit-paginator-options';

@Component({
  selector: 'biit-paginator',
  templateUrl: './biit-paginator.component.html',
  styleUrls: ['./biit-paginator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitPaginatorComponent),
      multi: true
    }
  ],
  host: {
    '(document:pointerdown)': 'handleMouseEvents($event)'
  }
})
export class BiitPaginatorComponent {

  protected paginator: BiitPaginatorOptions;
  protected totalPages: number;
  protected dropdownOpen = false;

  @ViewChild('pageSelector') pageSelector: ElementRef;
  @ViewChild('pageSizeBtn') selectorBtn: ElementRef;
  @ViewChild('pageSizeList') selectorList: ElementRef;
  @ViewChild('pageInput') pageInput: ElementRef;
  @ViewChild('totalPagesLabel') totalPagesLabel: ElementRef;

  constructor() { }

  onChange = (value: any) => {};
  onTouched = () => {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.paginator = value;
      this.calculateTotalPages();
    }
  }

  onModelChange() {
    this.closeDropdown();
    this.onChange(this.paginator);
  }

  handleMouseEvents($event: PointerEvent) {
    if (!this.selectorList.nativeElement?.contains($event.target) &&
        !this.selectorBtn.nativeElement?.contains($event.target) &&
        this.dropdownOpen) {
      this.closeDropdown();
    }
  }

  handleKeyboardEvents($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        if (document.activeElement === this.selectorBtn.nativeElement) {
          if (this.paginator.pageSizeOptions.findIndex(i => i == this.paginator.pageSize) > 0) {
            this.paginator.pageSize = this.paginator.pageSizeOptions
              [this.paginator.pageSizeOptions.findIndex(i => i == this.paginator.pageSize) - 1];
            this.paginator.currentPage = 1;
            this.onChange(this.paginator);
          }
        } else {
          (document.activeElement.previousElementSibling as HTMLElement)?.focus();
        }
        $event.preventDefault();
        break;

      case 'ArrowDown':
        if (document.activeElement === this.selectorBtn.nativeElement) {
          if (this.paginator.pageSizeOptions.findIndex(i => i == this.paginator.pageSize) < this.paginator.pageSizeOptions.length -1) {
            this.paginator.pageSize = this.paginator.pageSizeOptions
              [this.paginator.pageSizeOptions.findIndex(i => i == this.paginator.pageSize) + 1];
            this.paginator.currentPage = 1;
            this.onChange(this.paginator);
          }
        } else {
          (document.activeElement.nextElementSibling as HTMLElement)?.focus();
        }
        $event.preventDefault();
        break;

      case 'Escape':
        this.closeDropdown();
        break;

      default:
        break;
    }
    $event.stopPropagation();
  }

  private setTooltipComponentProperties() {
    let dropdown = this.selectorList.nativeElement;
    let button = this.selectorBtn.nativeElement;

    dropdown.style.display = 'block';

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

  openDropdown() {
    this.setTooltipComponentProperties();

    // Setting a timeout because it doesn't load upwards/downwards css classes on execution time
    setTimeout(() => {
      this.dropdownOpen = true;
      this.selectorList.nativeElement.setAttribute('aria-expanded', "true");
    }, 100);
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.selectorList.nativeElement.setAttribute('aria-expanded', "false");
  }

  calculateTotalPages() {
    if (!this.paginator?.hidePageSize && !isNaN(this.paginator?.totalItems)) {
      const tempTotalPages = this.paginator.totalItems ?
        this.paginator.totalItems / this.paginator.pageSize : 0;

      if (Number.isInteger(tempTotalPages) && tempTotalPages > 0) {
        this.totalPages = tempTotalPages;
      } else {
        this.totalPages = Math.trunc(tempTotalPages) + 1;
      }

      if (this.totalPagesLabel?.nativeElement) {
        this.totalPagesLabel.nativeElement.innerText = '/' + this.totalPages;
      }

      if (this.pageInput?.nativeElement) {
        this.pageInput.nativeElement.style.width =
          this.totalPagesLabel.nativeElement.offsetWidth * 2
          + 2.1 * parseFloat(getComputedStyle(document.documentElement).fontSize)
          + 'px';
      }
    }

    this.refreshCenterStyle();
  }

  setInputValue(event: Event) {
    let selectedPage = parseFloat((event.target as HTMLInputElement).value);
    if (selectedPage > this.totalPages) {
      (event.target as HTMLInputElement).value = this.totalPages.toString();
      selectedPage = this.totalPages;
    }
    this.paginator.currentPage = selectedPage;
  }

  resetInputValue(event: Event) {
    (event.target as HTMLInputElement).value = this.paginator.currentPage.toString();
  }

  refreshCenterStyle() {
    const width = this.pageSelector.nativeElement.offsetWidth;
    this.pageSelector.nativeElement.style.setProperty("--center-fix", -(width/2) + 'px');
  }
}
