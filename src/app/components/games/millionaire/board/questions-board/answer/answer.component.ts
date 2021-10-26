import { Component, Input, OnInit } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { playSound } from '../../../../../../utils/utilities';

@Component({
  selector: 'royal-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {


  @Input() answer: string;

  constructor(private millionaireQuestionsService: MillionaireQuestionsService) {}

  ngOnInit(): void {
  }

  emitAnswerSelected(){
    this.millionaireQuestionsService.announceAnswerSelected(this.answer);
  }

  playCursorSfx(){
    playSound("assets/sounds/cursor.wav");
  }
}
