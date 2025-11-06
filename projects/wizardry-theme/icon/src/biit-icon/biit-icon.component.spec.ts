import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitIconComponent } from './biit-icon.component';

describe('BiitIconComponent', () => {
  let component: BiitIconComponent;
  let fixture: ComponentFixture<BiitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
