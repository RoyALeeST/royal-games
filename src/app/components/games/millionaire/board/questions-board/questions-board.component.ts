import { Component, Input, OnInit } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';

@Component({
  selector: 'royal-questions-board',
  templateUrl: './questions-board.component.html',
  styleUrls: ['./questions-board.component.scss']
})
export class QuestionsBoardComponent implements OnInit {

  @Input() question: any;
  @Input() answers: any;
  
  constructor(private millionaireQuestionsService: MillionaireQuestionsService ) { }

  ngOnInit(): void {
  }

}
