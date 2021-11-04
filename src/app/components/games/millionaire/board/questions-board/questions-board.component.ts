import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { shuffle } from 'src/app/utils/utilities';

@Component({
  selector: 'royal-questions-board',
  templateUrl: './questions-board.component.html',
  styleUrls: ['./questions-board.component.scss']
})
export class QuestionsBoardComponent implements OnInit, OnChanges {

  @Input() questionData: MillionaireQuestion;
  answers: string[];
  imgUrl: string;
  
  constructor(private millionaireQuestionsService: MillionaireQuestionsService ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.answers = [this.questionData.correctAnswer, ...this.questionData.invalidAnswers];
    shuffle(this.answers);  
    this.imgUrl = "/assets/images/questions/question/" + this.questionData.questionImgUrl;
  }

  ngOnInit(): void {
  }

}
