import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitInputTextComponent } from './biit-input-text.component';

describe('BiitInputTextComponent', () => {
  let component: BiitInputTextComponent;
  let fixture: ComponentFixture<BiitInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
