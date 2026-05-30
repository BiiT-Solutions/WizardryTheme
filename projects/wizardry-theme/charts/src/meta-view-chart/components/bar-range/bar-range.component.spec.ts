import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRangeComponent } from './bar-range.component';

describe('BarRangeComponent', () => {
  let component: BarRangeComponent;
  let fixture: ComponentFixture<BarRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarRangeComponent ]
    })
    .overrideComponent(BarRangeComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarRangeComponent);
    component = fixture.componentInstance;
    component.field = 'score';
    component['_items'] = [
      { data: { score: 2 } },
      { data: { score: 8 } }
    ] as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits the selected range', () => {
    const emitSpy = spyOn(component.rangeChange, 'emit');

    component['onRangeChange']([3, 7]);

    expect(emitSpy).toHaveBeenCalledWith([3, 7]);
  });
});
