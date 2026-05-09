import {Component, Input} from '@angular/core';
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-tooltip-icon',
  templateUrl: './biit-tooltip-icon.component.html',
  styleUrls: ['./biit-tooltip-icon.component.scss']
})
export class BiitTooltipIconComponent {
  @Input() text;
  @Input() set inline(value) {
    this.isInline = coerceBooleanProperty(value);
  }
  protected isInline = false;
}
