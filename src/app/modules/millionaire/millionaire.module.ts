

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
import { LoserDialogComponent } from '../../components/games/millionaire/board/dialogs/loser-dialog/loser-dialog.component';
import { WinDialogComponent } from '../../components/games/millionaire/board/dialogs/win-dialog/win-dialog.component';
import { LifelinesComponent } from '../../components/games/millionaire/lifelines/lifelines.component';
import { LifelinesItemComponent } from '../../components/games/millionaire/lifelines/lifelines-item/lifelines-item.component';
import { ComfirmationDialogComponent } from '../../components/games/millionaire/board/dialogs/comfirmation-dialog/comfirmation-dialog.component';
import { ResetButtonComponent } from '../../components/games/millionaire/board/reset-button/reset-button.component';


// Custom Services

@NgModule({
  declarations: [
    MillionaireComponent,
    BoardComponent,
    QuestionsBoardComponent,
    ScoreBoardComponent,
    QuestionComponent,
    AnswerComponent,
    LoserDialogComponent,
    WinDialogComponent,
    LifelinesComponent,
    LifelinesItemComponent,
    ComfirmationDialogComponent,
    ResetButtonComponent,
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
    LoserDialogComponent,
    WinDialogComponent,
    LifelinesComponent,
    LifelinesItemComponent,
  ]
})
export class MillionaireModule { }
