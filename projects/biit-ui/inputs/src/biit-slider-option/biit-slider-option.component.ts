import {
  AfterViewChecked, ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Input, OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'biit-slider-option',
  templateUrl: './biit-slider-option.component.html',
  styleUrls: ['./biit-slider-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitSliderOptionComponent),
      multi: true
    }
  ]
})
export class BiitSliderOptionComponent implements ControlValueAccessor, AfterViewChecked, OnInit {
  @Input() data: {value: string|number, label: string, description:string}[];
  @Input() inverted = false;
  @HostBinding('style.--label-percent') labelPercent;

  get index() {
    return this.data.findIndex(i => i.value == this.value);
  }

  protected value: string | number;
  protected disabled: boolean = false;
  protected showTooltip: boolean = false;

  @ViewChild('rangerHor') slider: ElementRef;
  @ViewChild('tooltip') tooltip: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  onChange = (_: any) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  writeValue(value: string|number): void {
    this.value = value;
  }

  ngOnInit() {
    this.labelPercent = (100 / this.data.filter(d => d.label).length) - 5 + '%';
  }

  ngAfterViewChecked() {
    this.progressScript();
    this.cdRef.detectChanges();
  }

  progressScript() {
    const slider = this.slider.nativeElement;
    const tooltip = this.tooltip.nativeElement;

    const progress = ((slider.value - slider.min) * 100) / (slider.max - slider.min);

    // Set slider bar background colors according to progress
    if (!this.inverted) {
      this.slider.nativeElement.style.background = `linear-gradient(to right, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;
    } else {
      this.slider.nativeElement.style.background = `linear-gradient(to left, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;
    }

    // Set tooltip text
    tooltip.innerHTML = `<span>${this.data[slider.value].value}</span>`;

    // Set slider tooltip position
    const tooltipPosition = (parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.5) - (progress * 0.16);

    if (!this.inverted) {
      tooltip.firstChild.style.left = '-50%';
      tooltip.style.left = `calc(${progress}% + (${tooltipPosition}px))`;
    } else {
      tooltip.firstChild.style.left = '50%';
      tooltip.style.right = `calc(${progress}% + (${tooltipPosition}px))`;
    }
  }
}
