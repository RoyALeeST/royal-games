import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
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
  
  private dialogConfig;

  constructor(private millionaireQuestionsService: MillionaireQuestionsService,
              private errorService: ErrorHandlerService ) { 
                this.dialogConfig = {
                  height: '200px',
                  width: '400px',
                  disableClose: true,
                  data: { }
                }
              }
  ngOnChanges(changes: SimpleChanges): void {
    this.answers = [this.questionData.correctAnswer, ...this.questionData.invalidAnswers];
    shuffle(this.answers);  
    this.imgUrl = "/assets/images/questions/question/" + this.questionData.questionImgUrl;
  }

  ngOnInit(): void {
    this.millionaireQuestionsService.fiftyLifelineSelected$.subscribe(
      (filteredAnswers) => {
        this.answers = filteredAnswers;
      },
      (error) => {
        this.handleError(error);
      }
    )
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
