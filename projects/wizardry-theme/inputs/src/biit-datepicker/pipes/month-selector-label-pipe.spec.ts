import {of} from 'rxjs';
import {MonthSelectorLabelPipe} from './month-selector-label-pipe';

describe('MonthSelectorLabelPipe', () => {
  it('builds month translation key and delegates to transloco', () => {
    const selectTranslate = jasmine.createSpy('selectTranslate').and.returnValue(of('May'));
    const translocoStub = {selectTranslate};
    const pipe = new MonthSelectorLabelPipe(translocoStub as any);

    let value = '';
    pipe.transform(new Date(2026, 4, 10)).subscribe(result => {
      value = result;
    });

    expect(selectTranslate).toHaveBeenCalledWith('inputs.month-5');
    expect(value).toBe('May');
  });
});

