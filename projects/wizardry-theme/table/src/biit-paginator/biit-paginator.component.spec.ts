import {BiitPaginatorComponent} from './biit-paginator.component';
import {BiitPaginatorOptions} from './models/biit-paginator-options';

describe('BiitPaginatorComponent', () => {
  it('caps selected page to total pages in setInputValue', () => {
    const component = new BiitPaginatorComponent();
    (component as any).paginator = new BiitPaginatorOptions(1, 10, [10, 20], 100, false, false);
    (component as any).totalPages = 5;

    const event = {target: {value: '8'}} as any;
    component.setInputValue(event);

    expect(event.target.value).toBe('5');
    expect((component as any).paginator.currentPage).toBe(5);
  });

  it('keeps selected page when input is within total pages', () => {
    const component = new BiitPaginatorComponent();
    (component as any).paginator = new BiitPaginatorOptions(1, 10, [10, 20], 100, false, false);
    (component as any).totalPages = 8;

    const event = {target: {value: '3'}} as any;
    component.setInputValue(event);

    expect(event.target.value).toBe('3');
    expect((component as any).paginator.currentPage).toBe(3);
  });

  it('resets input to current page value', () => {
    const component = new BiitPaginatorComponent();
    (component as any).paginator = new BiitPaginatorOptions(4, 10, [10], 40, false, false);

    const event = {target: {value: '1'}} as any;
    component.resetInputValue(event);

    expect(event.target.value).toBe('4');
  });
});

