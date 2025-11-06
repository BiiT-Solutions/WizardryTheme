import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitGroupComponent } from './biit-group.component';

describe('BiitActionButtonComponent', () => {
  let component: BiitGroupComponent;
  let fixture: ComponentFixture<BiitGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
