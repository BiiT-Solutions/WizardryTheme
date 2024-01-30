import {AfterViewChecked, Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
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
  ]
})
export class BiitSliderComponent implements ControlValueAccessor, AfterViewChecked {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() ticks: number;
  @Input() labels: string[] = [];

  protected value: number;
  protected disabled: boolean = false;

  @ViewChild('ranger') slider: ElementRef;

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
    const progress = ((slider.value - slider.min) * 100) / (slider.max - slider.min);
    this.slider.nativeElement.style.background = `linear-gradient(to right, #F20D5E ${progress}%, #D7D7D7 ${progress}%)`;
  }

  updateValue(index: number) {
    const result = this.min + ((this.max-this.min)/(this.ticks-1) * index);
    this.writeValue(result);
    this.onChange(this.value);
  }
}
