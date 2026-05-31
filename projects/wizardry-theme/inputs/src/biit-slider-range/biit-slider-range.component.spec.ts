import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiitSliderRangeComponent } from './biit-slider-range.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderRangeComponent;
  let fixture: ComponentFixture<BiitSliderRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderRangeComponent ]
    })
    .overrideComponent(BiitSliderRangeComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderRangeComponent);
    component = fixture.componentInstance;
    component.min = 0;
    component.max = 10;
    component.writeValue([2, 8]);
    spyOn(component, 'progressScript').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('enforces the configured separator between both thumbs', () => {
    (component as any).slider1 = { nativeElement: { value: 7 } };
    (component as any).slider2 = { nativeElement: { value: 8 } };
    component.separator = 2;
    component.step = 1;

    component.checkValues('ranger1');

    expect((component as any).value[0]).toBe(6);
  });
});
