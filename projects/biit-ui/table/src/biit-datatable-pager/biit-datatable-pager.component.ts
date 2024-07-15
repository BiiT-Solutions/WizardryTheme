import {
  AfterViewInit, ChangeDetectorRef,
  Component, ElementRef, QueryList, ViewChildren
} from '@angular/core';
import {DataTablePagerComponent} from "@siemens/ngx-datatable";
import {provideTranslocoScope} from "@ngneat/transloco";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";

@Component({
  selector: 'biit-datatable-pager',
  templateUrl: './biit-datatable-pager.component.html',
  styleUrls: ['./biit-datatable-pager.component.scss'],
  providers: [provideTranslocoScope({scope:'biit-ui/table', alias:'t'})]
})
export class BiitDatatablePagerComponent extends DataTablePagerComponent implements AfterViewInit {
  @ViewChildren('label') label: QueryList<ElementRef>;
  inputWidth: number;

  constructor(biitIconService: BiitIconService,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
    biitIconService.registerIcons(completeIconSet);
  }

  ngAfterViewInit() {
    this.label.changes.subscribe(elem => {
      this.inputWidth = elem.first.nativeElement.offsetWidth;
      this.changeDetectorRef.detectChanges();
    })
  }

  enforceMinMax(el) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

  log(event) {
  }
}
