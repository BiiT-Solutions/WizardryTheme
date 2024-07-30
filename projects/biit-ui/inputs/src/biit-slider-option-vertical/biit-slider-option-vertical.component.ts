import {
  AfterViewChecked,
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
  selector: 'biit-slider-option-vertical',
  templateUrl: './biit-slider-option-vertical.component.html',
  styleUrls: ['./biit-slider-option-vertical.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitSliderOptionVerticalComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class BiitSliderOptionVerticalComponent implements ControlValueAccessor, AfterViewChecked, OnInit {
  @Input() data: {value: string|number, label: string, description:string}[];
  @Input() inverted = false;
  @Input() showDescription = true;
  @HostBinding('style.--label-percent') labelPercent;

  get index() {
    return this.data.findIndex(i => i == this.value);
  }

  protected value: {value: string|number, label: string, description:string};
  protected disabled: boolean = false;
  protected showTooltip: boolean = false;

  @ViewChild('ranger') slider: ElementRef;
  @ViewChild('tooltip') tooltip: ElementRef;

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

  writeValue(value: {value: string|number, label: string, description:string}): void {
    this.value = value;
  }

  ngOnInit() {
    this.labelPercent = (100 / this.data.filter(d => d.label).length) - 5 + '%';
  }

  ngAfterViewChecked() {
    if (!this.value && this.data?.length) {
      this.onChange(this.data[0]);
    }
    this.progressScript();
  }

  progressScript() {
    const slider = this.slider.nativeElement;
    const tooltip = this.tooltip.nativeElement;

    const progress = ((slider.value - slider.min) * 100) / (slider.max - slider.min);

    // Set slider bar background colors according to progress
    if (!this.inverted) {
      this.slider.nativeElement.style.background = `linear-gradient(to top, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;
    } else {
      this.slider.nativeElement.style.background = `linear-gradient(to bottom, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;
    }

    // Set tooltip text
    if (this.data[slider.value].label) {
      tooltip.innerHTML = `<span>${this.data[slider.value].label}</span>`;
    } else {
      return;
    }

    // Set slider tooltip position
    const tooltipPosition = (-parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.5) - (progress * 0.16);
    tooltip.firstChild.style.left = '-50%';

    if (!this.inverted) {
      tooltip.style.bottom = `calc(${progress}% + (${tooltipPosition}px) + 2rem)`;
    } else {
      tooltip.style.top = `calc(${progress}% + (${tooltipPosition}px))`;
    }
  }
}
