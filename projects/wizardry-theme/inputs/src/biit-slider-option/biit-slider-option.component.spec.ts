import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderOptionComponent } from './biit-slider-option.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderOptionComponent;
  let fixture: ComponentFixture<BiitSliderOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderOptionComponent ]
    })
    .overrideComponent(BiitSliderOptionComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderOptionComponent);
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

  it('computes the label percentage from the labelled options', () => {
    expect(component.labelPercent).toBe('45%');
    expect(component.index).toBe(0);
  });
});
