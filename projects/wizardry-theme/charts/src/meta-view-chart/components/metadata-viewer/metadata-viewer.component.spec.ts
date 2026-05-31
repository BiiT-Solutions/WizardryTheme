import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataViewerComponent } from './metadata-viewer.component';

describe('MetadataViewerComponent', () => {
  let component: MetadataViewerComponent;
  let fixture: ComponentFixture<MetadataViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataViewerComponent ]
    })
    .overrideComponent(MetadataViewerComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetadataViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits close events', () => {
    const emitSpy = spyOn(component.onClose, 'emit');

    component['close']();

    expect(emitSpy).toHaveBeenCalled();
  });
});
