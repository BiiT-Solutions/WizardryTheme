import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitSliderComponent } from './biit-slider.component';

describe('BiitSliderComponent', () => {
  let component: BiitSliderComponent;
  let fixture: ComponentFixture<BiitSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
