import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderComponent } from './biit-slider.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderComponent;
  let fixture: ComponentFixture<BiitSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderComponent ]
    })
    .overrideComponent(BiitSliderComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderComponent);
    component = fixture.componentInstance;
    component.min = 0;
    component.max = 100;
    spyOn(component, 'progressScript').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the model based on the selected tick', () => {
    const onChange = jasmine.createSpy('onChange');
    component.min = 10;
    component.max = 30;
    component.ticks = 3;
    component.registerOnChange(onChange);

    component.updateValue(1);

    expect((component as any).value).toBe(20);
    expect(onChange).toHaveBeenCalledWith(20);
  });
});
