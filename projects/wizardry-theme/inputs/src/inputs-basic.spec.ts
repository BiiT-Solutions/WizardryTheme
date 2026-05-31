import {QueryList} from '@angular/core';
import {BiitCheckboxComponent} from './biit-checkbox/biit-checkbox.component';
import {BiitRadioButtonComponent} from './biit-radio-button/biit-radio-button.component';
import {BiitTextareaComponent} from './biit-textarea/biit-textarea.component';
import {BiitToggleComponent} from './biit-toggle/biit-toggle.component';
import {BiitToggleButtonComponent} from './biit-toggle-group/biit-toggle-button.component';
import {BiitToggleGroupComponent} from './biit-toggle-group/biit-toggle-group.component';
describe('Inputs basic family', () => {
  it('propagates checkbox changes through ControlValueAccessor and output', () => {
    const component = new BiitCheckboxComponent();
    const onChange = jasmine.createSpy('onChange');
    const emitted: boolean[] = [];
    component.registerOnChange(onChange);
    component.onValueChange.subscribe(value => emitted.push(value));
    component.writeValue(false);
    component.onModelChange(true);
    expect(component.checked).toBeTrue();
    expect(onChange).toHaveBeenCalledOnceWith(true);
    expect(emitted).toEqual([true]);
  });
  it('initializes radio button booleans and propagates its model changes', () => {
    const component = new BiitRadioButtonComponent();
    const onChange = jasmine.createSpy('onChange');
    component.disabled = 'true' as any;
    component.ngOnInit();
    component.registerOnChange(onChange);
    component.writeValue('a');
    component.onModelChange('b');
    expect(component.disabled).toBeTrue();
    expect(component.selected).toBe('b');
    expect(onChange).toHaveBeenCalledOnceWith('b');
  });
  it('computes textarea resize and boolean flags on init', () => {
    const component = new BiitTextareaComponent();
    component.readonly = 'true' as any;
    component['resizeX'] = 'true' as any;
    component['resizeY'] = undefined as any;
    component.disabled = false as any;
    component.required = 'yes' as any;
    component.ngOnInit();
    component.writeValue('hello');
    expect(component.readonly).toBeTrue();
    expect(component['resizeX']).toBeTrue();
    expect(component['resizeY']).toBeTrue();
    expect(component.disabled).toBeFalse();
    expect(component.required).toBeTrue();
    expect(component.resize).toBe('both');
    expect(component.value).toBe('hello');
    expect(component.checkBooleanInput(undefined)).toBeFalse();
    expect(component.checkBooleanInput(false)).toBeFalse();
    expect(component.checkBooleanInput('anything')).toBeTrue();
  });
  it('propagates toggle changes through ControlValueAccessor', () => {
    const component = new BiitToggleComponent();
    const onChange = jasmine.createSpy('onChange');
    component.registerOnChange(onChange);
    component.writeValue(false);
    component.onToggle(true);
    expect(component.checked).toBeTrue();
    expect(onChange).toHaveBeenCalledOnceWith(true);
  });
  it('coerces toggle button disabled input on init', () => {
    const component = new BiitToggleButtonComponent();
    component.disabled = 'true' as any;
    component.ngOnInit();
    expect(component.disabled).toBeTrue();
  });
  it('supports single and multiple toggle group selection', () => {
    const component = new BiitToggleGroupComponent();
    const onChange = jasmine.createSpy('onChange');
    component.buttons = new QueryList<BiitToggleButtonComponent>();
    component.disabled = 'true' as any;
    component.multiple = 'false' as any;
    component.ngOnInit();
    component.registerOnChange(onChange);
    component.onToggle('a');
    expect(component.disabled).toBeTrue();
    expect(component.multiple).toBeFalse();
    expect(component.value).toBe('a');
    expect(onChange).toHaveBeenCalledWith('a');

    // Simulate a fresh multiple-mode value contract (array-based selection).
    component.multiple = true as any;
    component.writeValue([]);
    component.onToggle('a');
    component.onToggle('b');
    component.onToggle('a');
    expect(component.value).toEqual(['b']);
  });
});
