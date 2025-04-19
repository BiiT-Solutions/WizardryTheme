export class CalendarConfiguration {
  createOnDrag: boolean = false;
  barred: boolean = false;

  constructor(createdOnDrag: boolean = false, barred: boolean = false) {
    this.createOnDrag = createdOnDrag;
    this.barred = barred;
  }
}
