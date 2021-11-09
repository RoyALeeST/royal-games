import { Component, OnInit } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from '../../../../services/games/millionaireQuestions.service'
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';
import {MatDialog} from '@angular/material/dialog';
import { shuffle } from '../../../../utils/utilities';
import { LoserDialogComponent } from './dialogs/loser-dialog/loser-dialog.component';
import { playSound } from '../../../../utils/utilities';
import { AnswerRevealDialogComponent } from './dialogs/answer-reveal-dialog/answer-reveal-dialog.component';

@Component({
  selector: 'royal-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  questionData: MillionaireQuestion;
  currentQuestion: string;
  answers: string[];
  questionType: string;
  private dialogConfig;
  difficulty: number = 1;
  isNextQuestionBtnEnabled: Boolean = false;
  toggleAnswerImageReveal: boolean = false; // Toggles image to reveal answer display
  isAnswerCorrect: boolean = false; // Boolean to be passed to answer image component so we know which gif to display CORRECT or INCORRECT

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
        this.handleCorrectAnswerSelected(isAnswerCorrect);
      }, 
      (error)=>{
        this.handleError(error)
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
  }
  
  handleCorrectAnswerSelected(isAnswerCorrect) {
    this.toggleAnswerImageReveal = true; // reveal answer image
    this.isAnswerCorrect = isAnswerCorrect;
    let gifDuration = isAnswerCorrect ? 9250 : 10100; // set hardcoded duration for gif
    this.openAnswerRevealDialog();
    // Timeot before enabling button and revealign answer so user can look at a dramatic reveal
    setTimeout(()=>{
      if(isAnswerCorrect){
        // Enable button for next question
        this.isNextQuestionBtnEnabled = true;
      } else {
        this.isNextQuestionBtnEnabled = false;
      }
    }, (gifDuration));
  }

  openLoserDialog() {
    const dialogRef = this.dialog.open(LoserDialogComponent);
    // playSound("assets/sounds/game_over_sfx.mp3");
  }

  openAnswerRevealDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AnswerRevealDialogComponent, {
                                      data: { toggleAnswerImageReveal: this.toggleAnswerImageReveal,
                                              isAnswerCorrect: this.isAnswerCorrect },
    });
    
    // playSound("assets/sounds/game_over_sfx.mp3");
  }

  // Request next question from backend
  requestQuestion(){
    this.isNextQuestionBtnEnabled = false;
    this.toggleAnswerImageReveal = false; // hide reveal answer image gif
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
    this.questionData = response;
    if(this.questionData != null){
      //play new question sfx for better UI
      // playSound("assets/sounds/question_reveal_sfx.mp3");
      this.currentQuestion = this.questionData.question;
      this.answers = [this.questionData.correctAnswer, ...this.questionData.invalidAnswers];
      this.questionType = this.questionData.type;
      shuffle(this.answers);  
      this.difficulty = this.millionaireQuestionsService.getCurrentDifficulty();
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
