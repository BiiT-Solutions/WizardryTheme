import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderOptionVerticalComponent } from './biit-slider-option-vertical.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderOptionVerticalComponent;
  let fixture: ComponentFixture<BiitSliderOptionVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderOptionVerticalComponent ]
    })
    .overrideComponent(BiitSliderOptionVerticalComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderOptionVerticalComponent);
    component = fixture.componentInstance;
    component.data = [
      { value: 'a', label: 'A', description: '' },
      { value: 'b', label: 'B', description: '' }
    ];
    component.writeValue('a');
    spyOn(component, 'progressScript').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exposes the selected option index', () => {
    expect(component.index).toBe(0);
  });
});
