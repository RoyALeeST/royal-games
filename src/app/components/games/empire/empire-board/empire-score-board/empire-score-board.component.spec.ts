import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireScoreBoardComponent } from './empire-score-board.component';

describe('EmpireScoreBoardComponent', () => {
  let component: EmpireScoreBoardComponent;
  let fixture: ComponentFixture<EmpireScoreBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireScoreBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
