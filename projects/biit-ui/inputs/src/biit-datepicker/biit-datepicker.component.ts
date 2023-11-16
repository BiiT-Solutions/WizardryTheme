import {Component, Input, forwardRef, OnInit, ElementRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {eachDayOfInterval, add, setDate, startOfWeek, sub, setDefaultOptions, Locale} from 'date-fns'
import {View} from './models/view'
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {enGB, es, nl} from "date-fns/locale";

@Component({
  selector: 'biit-datepicker',
  templateUrl: 'biit-datepicker.component.html',
  styleUrls: ['biit-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitDatePickerComponent),
      multi: true
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {scope: 'biit-ui/inputs', alias: "inputs"}
    }
  ],
  host: {
    '(document:pointerdown)': 'handleMouseEvents($event)'
  }
})
export class BiitDatePickerComponent implements ControlValueAccessor, OnInit {
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() required: boolean;
  @Input() disabledDays: Date[] = [];
  @Input() disableWeekdays: boolean;
  @Input() disableWeekends: boolean;
  @Input() timePicker: boolean;
  @Input() min: Date;
  @Input() max: Date;
  @Input() placeholder: string = "";
  @Input() error: string = "";

  protected value: Date;
  protected dropdownOpen: boolean = false;
  protected currentView: View = View.MONTH;
  protected days: Date[] = [];
  protected headers = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  protected viewerDate = new Date();
  protected locale: Locale;

  protected readonly View = View;

  public get inputElement(): HTMLElement {return this.elem.nativeElement.querySelector('.input-object')}
  public get dropdownElement(): HTMLElement {return this.elem.nativeElement.querySelector('.popup')}

  constructor(
    private elem: ElementRef,
    private transloco: TranslocoService
  ) { }

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

  onChange = (value: Date) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: Date): void {
    this.value = value;
  }

  onModelChange(value: Date) {
    this.value = new Date(value);
    this.onChange(value);
  }

  ngOnInit(): void {
    this.initLocalization();

    this.disabled = this.checkBooleanInput(this.disabled);
    this.readonly = this.checkBooleanInput(this.readonly);
    this.required = this.checkBooleanInput(this.required);
    this.disableWeekdays = this.checkBooleanInput(this.disableWeekdays);
    this.disableWeekends = this.checkBooleanInput(this.disableWeekends);
    this.timePicker = this.checkBooleanInput(this.timePicker);
  }

  private initLocalization() {
    switch (this.transloco.getActiveLang()) {
      case 'es':
        this.locale = es;
        break;
      case 'nl':
        this.locale = nl;
        break;
      default:
        this.locale = enGB;
    }

    setDefaultOptions({locale: this.locale});
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

  handleMouseEvents($event: PointerEvent) {
    if (!this.elem.nativeElement.contains($event.target)) {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.drawCalendar();
    this.setPopupComponentProperties();
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
    this.inputElement.focus();
  }

  private setPopupComponentProperties() {
    let dropdown = this.dropdownElement;
    dropdown.style.display = 'block';

    let input = this.inputElement;

    // Checking available screen space
    const fitsBottom = bottomCheck();
    const fitsRight = rightCheck();
    const fitsLeft = leftCheck();

    if (!fitsRight && fitsLeft) {
      dropdown.style.marginLeft = input.offsetWidth - dropdown.offsetWidth + 'px';
    } else {
      dropdown.style.marginLeft = null;
    }

    dropdown.classList.remove('onwards');
    dropdown.classList.remove('downwards');

    if (!fitsBottom) {
      dropdown.classList.add('onwards');
      dropdown.style.marginTop = -(dropdown.offsetHeight + input.offsetHeight) + 'px';
    } else {
      dropdown.classList.add('downwards');
      dropdown.style.marginTop = null;
    }

    // Support inner functions
    function bottomCheck(): boolean {
      return input.getBoundingClientRect().bottom + dropdown.offsetHeight <= window.innerHeight ||
        input.getBoundingClientRect().top - dropdown.offsetHeight <= 0;
    }

    function rightCheck(): boolean {
      return input.getBoundingClientRect().right + dropdown.offsetWidth <= window.innerWidth;
    }

    function leftCheck(): boolean {
      return input.getBoundingClientRect().right - dropdown.offsetWidth >= 0;
    }
  }

  drawCalendar(): void {
    const firstDay = startOfWeek(setDate(this.viewerDate, 1));
    const lastDay = add(firstDay, {days:41});

    this.days = eachDayOfInterval({start:firstDay, end:lastDay});
  }

  prevMonth(): void {
    this.viewerDate = sub(this.viewerDate, {months:1})
    this.drawCalendar();
  }

  nextMonth(): void {
    this.viewerDate = add(this.viewerDate, {months:1});
    this.drawCalendar();
  }

  setToday(): void {
    this.viewerDate = new Date();
    this.drawCalendar();
    this.onModelChange(new Date());
  }
}


