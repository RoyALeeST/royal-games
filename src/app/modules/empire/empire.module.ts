

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Custom Modules
import { SharedModule } from '../../shared/modules/shared.module';

//Custom Components
import { EmpireComponent } from '../../components/games/empire/empire.component';
import { EmpireBoardComponent } from '../../components/games/empire/empire-board/empire-board.component';
import { EmpireQuestionComponent } from '../../components/games/empire/empire-board/empire-question/empire-question.component';
import { EmpireAnswersBoardComponent } from '../../components/games/empire/empire-board/empire-answers-board/empire-answers-board.component';
import { EmpireAnswerComponent } from '../../components/games/empire/empire-board/empire-answers-board/empire-answer/empire-answer.component';

import { EmpireSaysService } from '../../services/games/empireSays.service';

// Custom Services

@NgModule({
  declarations: [
    EmpireComponent,
    EmpireBoardComponent,
    EmpireQuestionComponent,
    EmpireAnswersBoardComponent,
    EmpireAnswerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    EmpireComponent,
    EmpireBoardComponent,
    EmpireQuestionComponent,
    EmpireAnswersBoardComponent,
    EmpireAnswerComponent
  ],
  providers:
  [
    EmpireSaysService,
  ]
})
export class EmpireModule { }
