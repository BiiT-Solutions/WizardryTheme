import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'biit-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent {
  @Input() set filter(value: string) {
    this.search = value;
  }
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  protected search: string = '';
  private timeout: NodeJS.Timeout;

  onSearchChange(value: string): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.filterChange.emit(this.search), 500);
  }
}
