import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitLoginComponent } from './biit-login.component';

describe('BiitLoginComponent', () => {
  let component: BiitLoginComponent;
  let fixture: ComponentFixture<BiitLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
