import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitCookiesConsentComponent } from './biit-cookies-consent.component';

describe('BiitGalleryCardComponent', () => {
  let component: BiitCookiesConsentComponent;
  let fixture: ComponentFixture<BiitCookiesConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitCookiesConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitCookiesConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
