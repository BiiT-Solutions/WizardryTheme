import {Component, Input, forwardRef, OnInit, ElementRef, HostListener} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {eachDayOfInterval, add, setDate, startOfWeek, sub, setDefaultOptions, Locale, parseISO} from 'date-fns'
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {enGB, es, nl} from "date-fns/locale";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

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
  @Input('calendar-mode') set isCalendarMode(value: any) {
    this.calendarMode = coerceBooleanProperty(value);
  }
  protected calendarMode: boolean = false;
  @Input() disabledDays: Date[] = [];
  @Input() disableWeekdays: boolean;
  @Input() disableWeekends: boolean;
  @Input() timePicker: boolean;
  @Input() min: Date;
  @Input() max: Date;
  @Input() set placeholder(placeholder: string) {
    this._placeholder = placeholder;
  }
  protected _placeholder = '';
  @Input() error: string = "";

  protected value: Date;
  protected dropdownOpen: boolean = false;
  protected monthSelector: boolean = false;
  protected days: Date[] = [];
  protected headers = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  protected viewerDate = new Date();
  protected locale: Locale;

  protected get inputElement(): HTMLElement {return this.elem.nativeElement.querySelector('.input-object')}
  protected get dropdownElement(): HTMLElement {return this.elem.nativeElement.querySelector('.popup')}

  protected readonly add = add;
  protected readonly sub = sub;
  protected readonly parseISO = parseISO;

  @HostListener('keydown.esc', ['$event'])
  onKeyDown(e) {
    this.closeDropdown();
  }

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
    if (this.calendarMode && !value) {
      this.value = new Date();
    } else {
      this.value = value;
    }
  }

  onModelChange(value: Date) {
    if (value) {
      if (this.min && new Date(value).getTime() <= (new Date(this.min).getTime())) value = add(this.min, {minutes: 1});
      if (this.max && new Date(value).getTime() > new Date(this.max).getTime()) value = sub(this.max, {minutes: 1});

      this.value = new Date(value);
      this.viewerDate = new Date(value);
      this.onChange(value);
    }
  }

  ngOnInit(): void {
    this.initLocalization();

    this.disabled = this.checkBooleanInput(this.disabled);
    this.readonly = this.checkBooleanInput(this.readonly);
    this.required = this.checkBooleanInput(this.required);
    this.disableWeekdays = this.checkBooleanInput(this.disableWeekdays);
    this.disableWeekends = this.checkBooleanInput(this.disableWeekends);
    this.timePicker = this.checkBooleanInput(this.timePicker);

    this.drawCalendar();
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

  handleMouseEvents($event: PointerEvent) {
    if (this.dropdownOpen && !this.elem.nativeElement.contains($event.target)) {
      this.closeDropdown();
    }
  }

  changeView() {
    this.monthSelector = !this.monthSelector;
    this.setPopupComponentProperties();
  }

  openDropdown() {
    if (!this.value) this.onModelChange(new Date());

    this.viewerDate = this.value;
    this.monthSelector = false;
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

  log(value) {
    console.log('DEVELOPMENT LOG: ', value);
  }
}


