import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitTooltipIconComponent } from './biit-tooltip-icon.component';

describe('BiitTooltipIconComponent', () => {
  let component: BiitTooltipIconComponent;
  let fixture: ComponentFixture<BiitTooltipIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiitTooltipIconComponent ]
    })
    .overrideComponent(BiitTooltipIconComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiitTooltipIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('coerces inline input to boolean', () => {
    component.inline = 'true';

    expect((component as any).isInline).toBeTrue();
  });
});
