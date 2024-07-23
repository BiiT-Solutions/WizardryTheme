import {
  AfterViewChecked,
  Component,
  ElementRef,
  forwardRef, HostBinding,
  Input,
  OnInit,
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class BiitSliderOptionComponent implements ControlValueAccessor, AfterViewChecked, OnInit {
  @Input() data: {value: string|number, description:string}[];
  @HostBinding('style.--label-percent') labelPercent;

  get index() {
    return this.data.findIndex(i => i == this.value);
  }

  protected value: {value: string|number, description:string};
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

  writeValue(value: {value: string|number, description:string}): void {
    this.value = value;
  }

  ngOnInit() {
    this.labelPercent = (100 / this.data.length) - 5 + '%';
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

    tooltip.innerHTML = `<span>${this.data[slider.value].value}</span>`;
    tooltip.style.left = `${progress}%`;
    tooltip.style.translate = `-${progress}%`;
  }
}
