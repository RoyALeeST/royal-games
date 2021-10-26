import { Component, OnInit } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';

@Component({
  selector: 'royal-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {

  constructor(private millionaireQuestionsService: MillionaireQuestionsService) { }

  ngOnInit(): void {
  }

  resetDifficulty(){
    this.millionaireQuestionsService.resetGame();
  }


}
