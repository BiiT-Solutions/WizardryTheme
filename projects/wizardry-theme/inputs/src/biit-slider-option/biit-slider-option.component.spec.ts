import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderOptionComponent } from './biit-slider-option.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderOptionComponent;
  let fixture: ComponentFixture<BiitSliderOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
