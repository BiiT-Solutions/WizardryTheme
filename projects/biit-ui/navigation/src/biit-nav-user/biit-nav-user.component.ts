import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'biit-nav-user',
  templateUrl: 'biit-nav-user.component.html',
  styleUrls: ['biit-nav-user.component.scss']
})

export class BiitNavUserComponent implements OnInit {
  @Input() title: string = '';
  @Input('left-align') leftAlign: boolean;

  ngOnInit() {
    this.leftAlign = this.leftAlign !== undefined;
  }
}
