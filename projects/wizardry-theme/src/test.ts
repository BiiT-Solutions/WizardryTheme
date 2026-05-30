import 'zone.js/testing';
import {getTestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

import '../button/src/biit-action-button/biit-action-button.component.spec';
import '../button/src/biit-button/biit-button.component.spec';
import '../button/src/biit-icon-button/biit-icon-button.component.spec';
import '../button/src/button-family.spec';
import '../calendar/src/biit-calendar/biit-calendar.component.spec';
import '../calendar/src/biit-calendar/models/calendar-configuration.spec';
import '../calendar/src/biit-calendar/models/calendar-event.spec';
import '../calendar/src/utils/event-color.spec';
import '../charts/src/bar-chart/bar-chart.component.spec';
import '../charts/src/heatmap-chart/heatmap-chart.component.spec';
import '../charts/src/line-chart/line-chart.component.spec';
import '../charts/src/meta-view-chart/components/bar-range/bar-range.component.spec';
import '../charts/src/meta-view-chart/components/boolean-filter/boolean-filter.component.spec';
import '../charts/src/meta-view-chart/components/date-filter-selector/date-filter-selector.component.spec';
import '../charts/src/meta-view-chart/components/meta-board/meta-board.component.spec';
import '../charts/src/meta-view-chart/components/metadata-viewer/metadata-viewer.component.spec';
import '../charts/src/meta-view-chart/components/meta-element/meta-element.component.spec';
import '../charts/src/meta-view-chart/components/meta-sorter/meta-filter.component.spec';
import '../charts/src/meta-view-chart/components/text-filter/text-filter.component.spec';
import '../charts/src/meta-view-chart/meta-view-chart.component.spec';
import '../charts/src/meta-view-chart/pipes/auto-format.pipe.spec';
import '../charts/src/meta-view-chart/pipes/extract-data.pipe.spec';
import '../charts/src/meta-view-chart/pipes/field-type.pipe.spec';
import '../charts/src/meta-view-chart/pipes/filter-by.pipe.spec';
import '../charts/src/meta-view-chart/pipes/has.pipe.spec';
import '../charts/src/meta-view-chart/pipes/meta-element-max-value.pipe.spec';
import '../charts/src/meta-view-chart/pipes/meta-element-min-value.pipe.spec';
import '../charts/src/meta-view-chart/pipes/meta-element-to-bar-chart.pipe.spec';
import '../charts/src/meta-view-chart/pipes/month-name.pipe.spec';
import '../charts/src/meta-view-chart/pipes/printf.pipe.spec';
import '../charts/src/meta-view-chart/pipes/remove-from-array.pipe.spec';
import '../charts/src/meta-view-chart/pipes/safe-html.pipe.spec';
import '../charts/src/meta-view-chart/pipes/step-value-extractor.pipe.spec';
import '../charts/src/pie-chart/pie-chart.component.spec';
import '../charts/src/radar-chart/radar-chart.component.spec';
import '../charts/src/radial-chart/radial-chart.component.spec';
import '../charts/src/timeline-viewer-chart/timeline-viewer-chart.component.spec';
import '../icon/src/biit-icon/biit-icon.component.spec';
import '../icon/src/biit-icon/biit-icon.service.spec';
import '../info/src/biit-cookies-consent/biit-cookies-consent.component.spec';
import '../info/src/biit-gallery-card/biit-gallery-card.component.spec';
import '../info/src/biit-progress-bar/biit-progress-bar.component.spec';
import '../info/src/biit-snackbar/biit-notification/biit-notification.component.spec';
import '../info/src/biit-snackbar/biit-snackbar.component.spec';
import '../info/src/biit-tooltip/biit-tooltip.component.spec';
import '../info/src/biit-tooltip-icon/biit-tooltip-icon.component.spec';
import '../info/src/info-family.spec';
import '../inputs/src/biit-checkbox/biit-checkbox.component.spec';
import '../inputs/src/biit-datepicker/biit-datepicker.component.spec';
import '../inputs/src/biit-group/biit-group.component.spec';
import '../inputs/src/biit-dropdown/biit-dropdown.component.spec';
import '../inputs/src/biit-input-text/biit-input-text.component.spec';
import '../inputs/src/biit-multiselect/biit-multiselect.component.spec';
import '../inputs/src/biit-datepicker/pipes/is-disabled-pipe.spec';
import '../inputs/src/biit-datepicker/pipes/is-same-day-pipe.spec';
import '../inputs/src/biit-datepicker/pipes/is-today-pipe.spec';
import '../inputs/src/biit-datepicker/pipes/calendar-date-pipe.spec';
import '../inputs/src/biit-datepicker/pipes/month-selector-label-pipe.spec';
import '../inputs/src/biit-datepicker/pipes/out-of-month-pipe.spec';
import '../inputs/src/biit-slider/biit-slider.component.spec';
import '../inputs/src/biit-slider-option/biit-slider-option.component.spec';
import '../inputs/src/biit-slider-option-vertical/biit-slider-option-vertical.component.spec';
import '../inputs/src/biit-slider-range/biit-slider-range.component.spec';
import '../inputs/src/biit-ternary-togle/biit-ternary-toggle.component.spec';
import '../inputs/src/biit-radio-button/biit-radio-button.component.spec';
import '../inputs/src/biit-textarea/biit-textarea.component.spec';
import '../inputs/src/biit-toggle/biit-toggle.component.spec';
import '../inputs/src/biit-toggle-group/biit-toggle-button.component.spec';
import '../inputs/src/biit-toggle-group/biit-toggle-group.component.spec';
import '../inputs/src/inputs-basic.spec';
import '../login/src/biit-login/biit-login.component.spec';
import '../navigation/src/biit-nav-menu/biit-nav-menu.component.spec';
import '../navigation/src/biit-nav-user/biit-nav-user.component.spec';
import '../navigation/src/biit-tab-group/biit-tab-group.component.spec';
import '../navigation/src/biit-tab-group/biit-tab.component.spec';
import '../navigation/src/biit-vertical-menu/biit-vertical-menu.component.spec';
import '../navigation/src/navigation-basic.spec';
import '../popup/src/biit-popup/biit-popup.component.spec';
import '../table/src/biit-datatable/biit-datatable.component.spec';
import '../table/src/biit-datatable-demo/biit-datatable-demo.component.spec';
import '../table/src/biit-datatable-pager/biit-datatable-pager.component.spec';
import '../table/src/biit-table/biit-table.component.spec';
import '../table/src/biit-table-demo/biit-table-demo.component.spec';
import '../table/src/biit-table/pipes/column-data-pipe.spec';
import '../table/src/biit-table/pipes/visible-columns-pipe.spec';
import '../table/src/biit-paginator/biit-paginator.component.spec';
import '../table/src/utils/generic-filter.spec';
import '../table/src/utils/generic-sort.spec';
import '../utils/src/error-handler.spec';
import '../utils/src/pipes/array-change-detector.pipe.spec';
import '../utils/src/pipes/map-get-pipe.spec';
import '../utils/src/stack.spec';



