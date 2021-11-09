import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireAnswersBoardComponent } from './empire-answers-board.component';

describe('EmpireAnswersBoardComponent', () => {
  let component: EmpireAnswersBoardComponent;
  let fixture: ComponentFixture<EmpireAnswersBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireAnswersBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireAnswersBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
