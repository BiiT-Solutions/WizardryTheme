import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitUiComponent } from './biit-ui.component';

describe('BiitUiComponent', () => {
  let component: BiitUiComponent;
  let fixture: ComponentFixture<BiitUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
