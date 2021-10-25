import { Component, OnInit } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from '../../../../services/games/millionaireQuestions.service'
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';
import { shuffle } from '../../../../utils/utilities';

@Component({
  selector: 'royal-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private question: MillionaireQuestion;
  currentQuestion: string;
  answers: string[]
  private dialogConfig;
  difficulty: number = 1;

  constructor(private millionaireQuestionsService: MillionaireQuestionsService,
              private errorService: ErrorHandlerService) { 
                this.dialogConfig = {
                  height: '200px',
                  width: '400px',
                  disableClose: true,
                  data: { }
                }
  }

  ngOnInit(): void {
    this.requestQuestion();
  }

  // Request next question from backend
  requestQuestion(){
    this.millionaireQuestionsService.getQuestionByDifficulty(this.difficulty).subscribe(
      {
        next: this.handleQuestionsResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  rateQuestion(){
    this.millionaireQuestionsService.answerSelected$.subscribe()
  }

  /***
   * @params {MillionaireQuestion} response - response from server after fetching a new question
   * @returns void 
   */ 
  handleQuestionsResponse(response: MillionaireQuestion){
    this.question = response;
    this.currentQuestion = this.question.question!;
    this.answers = [this.question.correctAnswer, ...this.question.invalidAnswers];
    shuffle(this.answers);
    this.difficulty += 1;
  }
  /***
   * @params {error} error to be displayed to the user
   * @returns void 
   */ 
  handleError(error){
    console.log(error)
    this.errorService.dialogConfig = { ...this.dialogConfig };
    this.errorService.handleError(error);
  }

  

}
