import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitGalleryCardComponent } from './biit-gallery-card.component';

describe('BiitGalleryCardComponent', () => {
  let component: BiitGalleryCardComponent;
  let fixture: ComponentFixture<BiitGalleryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitGalleryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitGalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
