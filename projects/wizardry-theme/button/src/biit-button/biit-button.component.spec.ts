import {BiitButtonComponent} from './biit-button.component';

describe('BiitButtonComponent', () => {
  it('should create with primary color by default', () => {
    const component = new BiitButtonComponent();

    expect(component).toBeTruthy();
    expect(component.color).toBe('primary');
  });
});

