

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Custom Modules
import { SharedModule } from '../../shared/modules/shared.module';

//Custom Components
import { MillionaireComponent } from '../../components/games/millionaire/millionaire.component';
import { BoardComponent } from '../../components/games/millionaire/board/board.component';
import { ScoreBoardComponent } from '../../components/games/millionaire/board/score-board/score-board.component';
import { QuestionsBoardComponent } from '../../components/games/millionaire/board/questions-board/questions-board.component';
import { QuestionComponent } from '../../components/games/millionaire/board/questions-board/question/question.component';
import { AnswerComponent } from '../../components/games/millionaire/board/questions-board/answer/answer.component';
// Custom Services

@NgModule({
  declarations: [
    MillionaireComponent,
    BoardComponent,
    QuestionsBoardComponent,
    ScoreBoardComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    MillionaireComponent,
    BoardComponent,
    QuestionsBoardComponent,
    ScoreBoardComponent,
    QuestionComponent,
    AnswerComponent,
  ]
})
export class MillionaireModule { }
