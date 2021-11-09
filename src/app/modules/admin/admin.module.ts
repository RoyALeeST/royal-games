import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Custom Modules
import { AdminRoutingModule } from '../../routing/admin/admin-routing.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { MillionaireModule } from '../../modules/millionaire/millionaire.module';
import { EmpireModule } from '../../modules/empire/empire.module';
//Custom Components
import { AdminComponent } from '../../components/admin/admin.component';
import { AdminEmpireComponent } from './../../components/admin/games/admin-empire/admin-empire.component';
import { AdminEmpireBoardComponent } from '../../components/admin/games/admin-empire/admin-empire-board/admin-empire-board.component';
import { AdminEmpireAnswersBoardComponent } from '../../components/admin/games/admin-empire/admin-empire-board/admin-empire-answers-board/admin-empire-answers-board.component';
import { AdminEmpireAnswerComponent } from '../../components/admin/games/admin-empire/admin-empire-board/admin-empire-answers-board/admin-empire-answer/admin-empire-answer.component';

// Custom Services
import { EmpireSaysService } from '../../services/games/empireSays.service';

@NgModule({
  declarations: [
    AdminComponent,
    AdminEmpireComponent,
    AdminEmpireBoardComponent,
    AdminEmpireAnswersBoardComponent,
    AdminEmpireAnswerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MillionaireModule,
    EmpireModule,
  ],
  exports:[
    AdminComponent,
  ],
  providers:
  [
    EmpireSaysService
  ]
})
export class AdminModule { }
