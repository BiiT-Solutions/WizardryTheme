import {Component, Input, OnInit} from '@angular/core';
import {biitIcon} from "biit-icons-collection";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'biit-toggle-button',
  template: '',
  styleUrls: ['biit-toggle-button.component.scss']
})

export class BiitToggleButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: biitIcon;
  @Input() value: any;
  @Input() disabled;

  ngOnInit() {
    this.disabled = coerceBooleanProperty(this.disabled);
  }
}
