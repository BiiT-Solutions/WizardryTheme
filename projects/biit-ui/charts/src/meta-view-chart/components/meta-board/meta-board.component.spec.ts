import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBoardComponent } from './meta-board.component';

describe('MetaBoardComponent', () => {
  let component: MetaBoardComponent;
  let fixture: ComponentFixture<MetaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
