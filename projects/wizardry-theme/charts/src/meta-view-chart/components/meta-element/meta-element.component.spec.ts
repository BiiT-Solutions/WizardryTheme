import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaElementComponent } from './meta-element.component';

describe('MetaElementComponent', () => {
  let component: MetaElementComponent;
  let fixture: ComponentFixture<MetaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
