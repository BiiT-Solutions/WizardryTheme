import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitActionButtonComponent } from './biit-action-button.component';

describe('BiitActionButtonComponent', () => {
  let component: BiitActionButtonComponent;
  let fixture: ComponentFixture<BiitActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitActionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
