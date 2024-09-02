import {Component, EventEmitter, Input, Output} from '@angular/core';
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-group',
  templateUrl: './biit-group.component.html',
  styleUrls: ['./biit-group.component.scss']
})
export class BiitGroupComponent {
  @Input() legend: string;
  @Input() description: string;
  protected isEnabledPlus: boolean;
  @Input() set enablePlus(enabled: any) {
    this.isEnabledPlus = coerceBooleanProperty(enabled);
  };
  protected isEnabledMinus: boolean;
  @Input() set enableMinus(enabled: any) {
    this.isEnabledMinus = coerceBooleanProperty(enabled);
  };
  @Output() onPlusClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onMinusClick: EventEmitter<void> = new EventEmitter<void>();
}
