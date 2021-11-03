import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerRevealDialogComponent } from './answer-reveal-dialog.component';

describe('AnswerRevealDialogComponent', () => {
  let component: AnswerRevealDialogComponent;
  let fixture: ComponentFixture<AnswerRevealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerRevealDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerRevealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
