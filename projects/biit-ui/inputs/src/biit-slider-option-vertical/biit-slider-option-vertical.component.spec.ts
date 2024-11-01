import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderOptionVerticalComponent } from './biit-slider-option-vertical.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderOptionVerticalComponent;
  let fixture: ComponentFixture<BiitSliderOptionVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderOptionVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderOptionVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
