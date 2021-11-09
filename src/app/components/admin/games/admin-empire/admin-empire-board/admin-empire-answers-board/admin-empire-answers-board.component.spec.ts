import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpireAnswersBoardComponent } from './admin-empire-answers-board.component';

describe('AdminEmpireAnswersBoardComponent', () => {
  let component: AdminEmpireAnswersBoardComponent;
  let fixture: ComponentFixture<AdminEmpireAnswersBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpireAnswersBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpireAnswersBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
