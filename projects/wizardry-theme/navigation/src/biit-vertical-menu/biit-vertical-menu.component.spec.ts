import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitVerticalMenuComponent } from './biit-vertical-menu.component';

describe('BiitVerticalMenuComponent', () => {
  let component: BiitVerticalMenuComponent;
  let fixture: ComponentFixture<BiitVerticalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitVerticalMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
