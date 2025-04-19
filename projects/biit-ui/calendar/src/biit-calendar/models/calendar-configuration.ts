export class CalendarConfiguration {
  createOnDrag: boolean = true;
  barred: boolean = true;

  constructor(createdOnDrag: boolean = true, barred: boolean = true) {
    this.createOnDrag = createdOnDrag;
    this.barred = barred;
  }
}
