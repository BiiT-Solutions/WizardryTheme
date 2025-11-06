import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitTooltipIconComponent } from './biit-tooltip-icon.component';

describe('BiitTooltipIconComponent', () => {
  let component: BiitTooltipIconComponent;
  let fixture: ComponentFixture<BiitTooltipIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitTooltipIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitTooltipIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
