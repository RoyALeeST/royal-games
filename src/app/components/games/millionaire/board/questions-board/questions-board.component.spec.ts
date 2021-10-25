import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBoardComponent } from './questions-board.component';

describe('QuestionsBoardComponent', () => {
  let component: QuestionsBoardComponent;
  let fixture: ComponentFixture<QuestionsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
