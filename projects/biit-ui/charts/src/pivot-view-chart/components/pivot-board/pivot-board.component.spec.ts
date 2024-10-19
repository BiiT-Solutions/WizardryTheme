import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotBoardComponent } from './pivot-board.component';

describe('PivotBoardComponent', () => {
  let component: PivotBoardComponent;
  let fixture: ComponentFixture<PivotBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
