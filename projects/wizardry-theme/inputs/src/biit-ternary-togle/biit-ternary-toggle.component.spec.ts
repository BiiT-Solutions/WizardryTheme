import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitTernaryToggleComponent } from './biit-ternary-toggle.component';

describe('BiitTernaryToogleComponent', () => {
  let component: BiitTernaryToggleComponent;
  let fixture: ComponentFixture<BiitTernaryToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitTernaryToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitTernaryToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
