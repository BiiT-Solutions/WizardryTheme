import {Component, Input} from '@angular/core';
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-action-button',
  templateUrl: './biit-action-button.component.html',
  styleUrls: ['./biit-action-button.component.scss']
})
export class BiitActionButtonComponent {
  @Input() set overlay(value) {
    this.isOverlay = coerceBooleanProperty(value);
  }
  protected isOverlay = false;
  @Input() set upwards(value) {
    this.isUpwards = coerceBooleanProperty(value);
  }
  protected isUpwards = false;
}
