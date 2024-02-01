import {AfterViewChecked, Component, ElementRef, forwardRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'biit-slider',
  templateUrl: './biit-slider.component.html',
  styleUrls: ['./biit-slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitSliderComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class BiitSliderComponent implements ControlValueAccessor, AfterViewChecked {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() ticks: number;
  @Input() labels: string[] = [];

  protected value: number;
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

  writeValue(value: any): void {
    this.value = value;
  }

  ngAfterViewChecked() {
    this.progressScript();
  }

  progressScript() {
    const slider = this.slider.nativeElement;
    const tooltip = this.tooltip.nativeElement;
    const progress = ((slider.value - slider.min) * 100) / (slider.max - slider.min);

    // Set slider bar background colors according to progress
    this.slider.nativeElement.style.background = `linear-gradient(to right, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;

    // Set slider tooltip position
    const tooltipPosition = (parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.15) - (progress * 0.2);
    tooltip.innerHTML = `<span>${slider.value}</span>`;
    tooltip.style.left = `calc(${progress}% + (${tooltipPosition}px))`;
  }

  updateValue(index: number) {
    const result = this.min + ((this.max-this.min)/(this.ticks-1) * index);
    this.writeValue(result);
    this.onChange(this.value);
  }
}
