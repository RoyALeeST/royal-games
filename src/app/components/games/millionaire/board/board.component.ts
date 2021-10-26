import { Component, OnInit } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from '../../../../services/games/millionaireQuestions.service'
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';
import {MatDialog} from '@angular/material/dialog';
import { shuffle } from '../../../../utils/utilities';
import { LoserDialogComponent } from './dialogs/loser-dialog/loser-dialog.component';
import { playSound } from '../../../../utils/utilities';

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
              public dialog: MatDialog,
              private errorService: ErrorHandlerService) { 
                this.dialogConfig = {
                  height: '200px',
                  width: '400px',
                  disableClose: true,
                  data: { }
                }
  }

  ngOnInit(): void {

    this.initSubscriptions();
    this.requestQuestion();

  }

  initSubscriptions() {
    this.millionaireQuestionsService.answerSelected$.subscribe(
      (isAnswerCorrect) => {
        if(isAnswerCorrect){
          this.requestQuestion();
        } else {
          this.openDialog();
        }
      }, 
      (error)=>{
        this.handleError(error)
      }
    )

    this.millionaireQuestionsService.difficultyChanged$.subscribe(
      (difficulty) => {
        this.difficulty = difficulty;
      }
    )

    this.millionaireQuestionsService.gameReset$.subscribe(
      (data)=> {
        this.requestQuestion();
      },
      (error)=> {
        this.handleError(error);
      },
    )

    this.millionaireQuestionsService.fiftyLifelineSelected$.subscribe(
      (filteredAnswers) => {
        this.answers = filteredAnswers;
      },
      (error) => {
        this.handleError(error);
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoserDialogComponent);
    playSound("assets/sounds/game_over_sfx.mp3");
  }


  // Request next question from backend
  requestQuestion(){
    this.millionaireQuestionsService.getQuestionByDifficulty().subscribe(
      {
        next: this.handleQuestionsResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  /***
   * @params {MillionaireQuestion} response - response from server after fetching a new question
   * @returns void 
   */ 
  handleQuestionsResponse(response: MillionaireQuestion){
    this.question = response;
    if(this.question != null){
      this.currentQuestion = this.question.question;
      this.answers = [this.question.correctAnswer, ...this.question.invalidAnswers];
      shuffle(this.answers);  
    }
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
