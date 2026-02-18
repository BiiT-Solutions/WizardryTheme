import {AfterViewChecked, Component, ElementRef, forwardRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'biit-slider-range',
  templateUrl: './biit-slider-range.component.html',
  styleUrls: ['./biit-slider-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitSliderRangeComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class BiitSliderRangeComponent implements ControlValueAccessor, AfterViewChecked {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number = 1;
  @Input() separator: number = 1;
  @Input() ticks: number;
  @Input() labels: string[] = [];

  protected value: number[];
  protected disabled: boolean = false;
  protected showTooltip: boolean = false;

  @ViewChild('ranger1') slider1: ElementRef;
  @ViewChild('ranger2') slider2: ElementRef;
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

  writeValue(value: number[]): void {
    this.value = value;
  }

  ngAfterViewChecked() {
    this.progressScript();
  }

  checkValues(activeSlider?: string) {
    const slider1 = this.slider1.nativeElement;
    const slider2 = this.slider2.nativeElement;
    const slider1steps = (slider1.value - this.min) / this.step;
    const slider2steps = (slider2.value - this.min) / this.step;
    const separatorSteps = Math.ceil(this.separator / this.step);

    if (activeSlider == 'ranger1' &&
      slider1.value > this.min + (slider2steps - separatorSteps) * this.step) {
      slider1.value = this.min + (slider2steps - separatorSteps) * this.step;
      this.value[0] = this.min + (slider2steps - separatorSteps) * this.step;
    }

    if (activeSlider == 'ranger2' &&
      slider2.value < this.min + (slider1steps + separatorSteps) * this.step) {
      slider2.value = this.min + (slider1steps + separatorSteps) * this.step;
      this.value[1] = this.min + (slider1steps + separatorSteps) * this.step;
    }
  }

  progressScript(activeSlider?: string) {
    const slider1 = this.slider1.nativeElement;
    const slider2 = this.slider2.nativeElement;
    const tooltip = this.tooltip.nativeElement;

    const progress1 = ((slider1.value - this.min) * 100) / (this.max - this.min);
    const progress2 = ((slider2.value - this.min) * 100) / (this.max - this.min);

    // Set slider bar background colors according to progress
    this.slider1.nativeElement.style.background = `linear-gradient(to right, #D7D7D7 ${progress1}%, var(--main-color) ${progress1}%, var(--main-color) ${progress2}%, #D7D7D7 ${progress2}%)`;

    // Set slider tooltip position
    if (activeSlider == 'ranger1') {
      const tooltipPosition = (parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.15) - (progress1 * 0.2);
      tooltip.innerHTML = `<span>${slider1.value}</span>`;
      tooltip.style.left = `calc(${progress1}% + (${tooltipPosition}px))`;
    } else if (activeSlider == 'ranger2') {
      const tooltipPosition = (parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.15) - (progress2 * 0.2);
      tooltip.innerHTML = `<span>${slider2.value}</span>`;
      tooltip.style.left = `calc(${progress2}% + (${tooltipPosition}px))`;
    }
  }
}
