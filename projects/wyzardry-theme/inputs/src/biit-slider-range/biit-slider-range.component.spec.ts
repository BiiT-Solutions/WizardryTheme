import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiitSliderRangeComponent } from './biit-slider-range.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderRangeComponent;
  let fixture: ComponentFixture<BiitSliderRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
