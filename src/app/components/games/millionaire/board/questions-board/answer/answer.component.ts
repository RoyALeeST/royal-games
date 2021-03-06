import { Component, Input, OnInit } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { playSound } from '../../../../../../utils/utilities';
import { AnswerTypesEnum } from 'src/app/models/Enums/AnswerTypesEnum.model';

@Component({
  selector: 'royal-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {


  @Input() answer: string;
  @Input() answerID: any;
  @Input() questionType: string;
  eAnswerTypesEnum = AnswerTypesEnum;

  private dialogConfig;
  isAnswerClicked: boolean = false;


  constructor(private millionaireQuestionsService: MillionaireQuestionsService, private errorService: ErrorHandlerService) {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }

  ngOnInit(): void {
    this.millionaireQuestionsService.answerSelected$.subscribe(
      (isAnswerCorrect) => {
        setTimeout(()=>{this.isAnswerClicked = true; }, 1000)
        
      }, 
      (error)=>{
        this.handleError(error)
      }
    )

    this.millionaireQuestionsService.newQuestionRequested$.subscribe(
      ()=>{
        this.isAnswerClicked = false;
      }
    );
  }

  isCorrect(): boolean {
    // mark the correct answer regardless of which option is selected once answered
    return this.answer  === this.millionaireQuestionsService.getCorrectAnswer() && this.isAnswerClicked;
  }
  
  isIncorrect(): boolean {
    // mark incorrect answer if selected
    return this.answer !== this.millionaireQuestionsService.getCorrectAnswer() && this.isAnswerClicked;
  }


  emitAnswerSelected(){
    this.millionaireQuestionsService.announceAnswerSelected(this.answer);
  }

  playCursorSfx(){
    // playSound("assets/sounds/cursor.wav");
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
