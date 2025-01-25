import {Component} from '@angular/core';
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
export class BiitDatatablePagerComponent extends DataTablePagerComponent {

  constructor(biitIconService: BiitIconService) {
    super();
    biitIconService.registerIcons(completeIconSet);
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
