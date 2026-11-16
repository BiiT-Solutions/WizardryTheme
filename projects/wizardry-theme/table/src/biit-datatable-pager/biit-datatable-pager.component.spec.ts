import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NgxDatatableModule} from '@siemens/ngx-datatable';
import {provideTransloco, TranslocoLoader} from '@jsverse/transloco';
import {of} from 'rxjs';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {BiitDatatablePagerComponent} from './biit-datatable-pager.component';
import {BiitDatatablePagerModule} from './biit-datatable-pager.module';

// The pager extends `DatatablePagerComponent` of @siemens/ngx-datatable, which resolves the
// parent datatable through DI. Therefore it can only be instantiated inside a datatable.
@Component({
  template: `
    <ngx-datatable [rows]="[]" [columns]="[]" [footerHeight]="34">
      <ngx-datatable-footer>
        <ng-template ngx-datatable-footer-template>
          <biit-datatable-pager></biit-datatable-pager>
        </ng-template>
      </ngx-datatable-footer>
    </ngx-datatable>
  `,
  imports: [NgxDatatableModule, BiitDatatablePagerModule],
})
class PagerTestHostComponent {
}

class BiitIconServiceStub {
  registerIcons = jasmine.createSpy('registerIcons');
  getIcon = jasmine.createSpy('getIcon').and.returnValue('');
}

class TranslocoLoaderStub implements TranslocoLoader {
  getTranslation(): any {
    return of({});
  }
}

describe('BiitDatatablePagerComponent', () => {
  let iconService: BiitIconServiceStub;

  beforeEach(async () => {
    iconService = new BiitIconServiceStub();

    await TestBed.configureTestingModule({
      imports: [PagerTestHostComponent],
      providers: [
        {provide: BiitIconService, useValue: iconService},
        provideTransloco({
          config: {availableLangs: ['en'], defaultLang: 'en'},
          loader: TranslocoLoaderStub,
        }),
      ],
    }).compileComponents();
  });

  function createPager(): BiitDatatablePagerComponent {
    const fixture = TestBed.createComponent(PagerTestHostComponent);
    fixture.detectChanges();
    return fixture.debugElement.query(By.directive(BiitDatatablePagerComponent)).componentInstance;
  }

  it('registers icons in constructor', () => {
    createPager();

    expect(iconService.registerIcons).toHaveBeenCalled();
  });

  it('enforces min and max values only when input is not empty', () => {
    const component = createPager();

    const minEl = {value: '1', min: '3', max: '10'};
    component.enforceMinMax(minEl);
    expect(minEl.value).toBe('3');

    const maxEl = {value: '20', min: '3', max: '10'};
    component.enforceMinMax(maxEl);
    expect(maxEl.value).toBe('10');

    const emptyEl = {value: '', min: '3', max: '10'};
    component.enforceMinMax(emptyEl);
    expect(emptyEl.value).toBe('');
  });
});
