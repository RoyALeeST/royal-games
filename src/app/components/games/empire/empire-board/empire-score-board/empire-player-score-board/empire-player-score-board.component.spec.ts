import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpirePlayerScoreBoardComponent } from './empire-player-score-board.component';

describe('EmpirePlayerScoreBoardComponent', () => {
  let component: EmpirePlayerScoreBoardComponent;
  let fixture: ComponentFixture<EmpirePlayerScoreBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpirePlayerScoreBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpirePlayerScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
