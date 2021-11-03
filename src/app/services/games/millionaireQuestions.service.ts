import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SpinWheelOption } from '../../models/games/spinwheel.model';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MillionaireQuestionsService {
  currQuestion: any;

  private answerSelected = new Subject<any>();
  answerSelected$ = this.answerSelected.asObservable();

  private fiftyLifelineSelected = new Subject<any>();
  fiftyLifelineSelected$ = this.fiftyLifelineSelected.asObservable();

  private difficultyChanged = new Subject<any>();
  difficultyChanged$ = this.difficultyChanged.asObservable();

  private gameReset = new Subject<any>();
  gameReset$ = this.gameReset.asObservable();

  difficulty: number = 1;
  hasLost: Boolean = false;



    constructor(private http: HttpClient) { }

  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getQuestionByDifficulty(): Observable<any>{
        console.log(this.difficulty)
        return this.http.get(`/api/v1/millionaire/get/difficulty/${this.difficulty}`).pipe(
          map(x => this.currQuestion = x)
        )
      }
  //#endregion


  //#region POST FUNCTIONS

  //#endregion

  //#region Subjetcts
  // Service message commands
  announceNewQuestion(millionaireQuestion: MillionaireQuestion) {
    this.answerSelected.next(millionaireQuestion);
  }

  announceAnswerSelected(selectedOption) {

    if (this.currQuestion != null && selectedOption == this.currQuestion.correctAnswer) {
      this.difficulty += 1;
      this.difficultyChanged.next(this.difficulty)
      this.answerSelected.next(true);
    } else {
      this.hasLost = true;
      this.answerSelected.next(false);
    }
  }

  announcefiftyLifelineSelected(){
    let randomWrongAnswer = this.currQuestion.invalidAnswers[Math.floor(Math.random()*this.currQuestion.invalidAnswers.length)];
    let fiftyLifelineAnswers = [this.currQuestion.correctAnswer, randomWrongAnswer]
    this.fiftyLifelineSelected.next(fiftyLifelineAnswers);
  }

  //#endregion

  resetGame(){
    this.difficulty = 1;
    this.hasLost = false;
    this.gameReset.next({ difficulty: this.difficulty });

  }

  getCorrectAnswer(){
    if(this.currQuestion.correctAnswer){
      return this.currQuestion.correctAnswer;
    } else {
      return "No correct answer found";
    }
  }

  getCurrentDifficulty(){
    return this.difficulty;
  }
}
