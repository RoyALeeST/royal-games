import { Component, Input, OnInit } from '@angular/core';
import { EmpireSaysService } from '../../../../../../../services/games/empireSays.service';

@Component({
  selector: 'royal-admin-empire-answer',
  templateUrl: './admin-empire-answer.component.html',
  styleUrls: ['./admin-empire-answer.component.scss']
})
export class AdminEmpireAnswerComponent implements OnInit {

  @Input() answerData;
  @Input() answerId;

  status: boolean = false;

  constructor(private empireSaysService: EmpireSaysService) { }

  ngOnInit(): void {
  }

  revealAnswer(){
    this.status = !this.status;
    this.empireSaysService.revealAnswerToPlayer(this.answerData.answer);
}

}
