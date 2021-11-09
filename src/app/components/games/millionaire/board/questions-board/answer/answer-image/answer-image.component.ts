import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';

@Component({
  selector: 'royal-answer-image',
  templateUrl: './answer-image.component.html',
  styleUrls: ['./answer-image.component.scss']
})
export class AnswerImageComponent implements OnInit {

  @Input() isAnswerCorrect: boolean;

  @Input() imgUrl: string = "";
  constructor() { }

  ngOnInit(): void {
  }


}
