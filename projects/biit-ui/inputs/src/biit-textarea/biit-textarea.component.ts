import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {biitIcon} from 'biit-icons-collection';

@Component({
  selector: 'biit-textarea',
  templateUrl: './biit-textarea.component.html',
  styleUrls: ['./biit-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiitTextareaComponent),
      multi: true
    }
  ]
})
export class BiitTextareaComponent implements ControlValueAccessor, OnInit {

  @Input() placeholder: string = '';
  @Input() error: string;
  @Input() icon: biitIcon;
  @Input() fieldName: string;
  @Input() maxLength: number;
  @Input() readonly: boolean;
  @Input('resize-x') resizeX: boolean;
  @Input('resize-y') resizeY: boolean;
  @Input() mandatory: boolean;
  @Output() onActionPerformed: EventEmitter<string> = new EventEmitter<string>();

  reveal: boolean = false;
  resize: string = 'none';
  value: string;

  ngOnInit() {
    this.readonly = !!this.readonly;
    this.resizeX = !!this.resizeX;
    this.resizeY = !!this.resizeY;
    this.mandatory = !!this.mandatory;

    if (this.resizeX && this.resizeY) {
      this.resize = 'both'
    } else if (this.resizeX) {
      this.resize = 'horizontal';
    } else if (this.resizeY) {
      this.resize = 'vertical';
    }
  }

  onChange = (_: any) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
