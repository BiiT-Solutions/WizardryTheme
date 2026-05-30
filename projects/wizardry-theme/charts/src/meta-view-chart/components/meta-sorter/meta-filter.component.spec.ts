import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaFilterComponent } from './meta-filter.component';
import { FieldTypePipe } from '../../pipes/field-type.pipe';

describe('MetaSorterComponent', () => {
  let component: MetaFilterComponent;
  let fixture: ComponentFixture<MetaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaFilterComponent ],
      providers: [FieldTypePipe]
    })
    .overrideComponent(MetaFilterComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaFilterComponent);
    component = fixture.componentInstance;
    component['_metadata'] = { preselection: [], data: [] } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the filter when a text filter changes', () => {
    const emitSpy = spyOn(component.filterChange, 'emit');

    component.onFilterChanged('name', 'wizard');

    expect(emitSpy).toHaveBeenCalled();
  });
});
