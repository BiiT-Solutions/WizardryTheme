import {
  BiitButtonComponent,
  BiitButtonPrimaryDirective,
  BiitButtonQuaternaryDirective,
  BiitButtonSecondaryDirective,
  BiitButtonTertiaryDirective,
} from './biit-button/biit-button.component';
import {BiitIconButtonComponent} from './biit-icon-button/biit-icon-button.component';

describe('Button family', () => {
  it('keeps primary as the default button color', () => {
    const component = new BiitButtonComponent();

    expect(component.color).toBe('primary');
  });

  it('updates the parent color through the button directives', () => {
    const primaryParent = new BiitButtonComponent();
    const secondaryParent = new BiitButtonComponent();
    const tertiaryParent = new BiitButtonComponent();
    const quaternaryParent = new BiitButtonComponent();

    new BiitButtonPrimaryDirective(primaryParent);
    new BiitButtonSecondaryDirective(secondaryParent);
    new BiitButtonTertiaryDirective(tertiaryParent);
    new BiitButtonQuaternaryDirective(quaternaryParent);

    expect(primaryParent.color).toBe('primary');
    expect(secondaryParent.color).toBe('secondary');
    expect(tertiaryParent.color).toBe('tertiary');
    expect(quaternaryParent.color).toBe('quaternary');
  });

  it('stores the icon-button state through its inputs', () => {
    const component = new BiitIconButtonComponent();

    component.icon = 'search';
    component.checked = true;

    expect(component.icon).toBe('search');
    expect(component.checked).toBeTrue();
  });
});

