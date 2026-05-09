import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitPopupComponent } from './biit-popup.component';

describe('BiitPopupComponent', () => {
  let component: BiitPopupComponent;
  let fixture: ComponentFixture<BiitPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
