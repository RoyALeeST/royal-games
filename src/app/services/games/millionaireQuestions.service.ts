import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SpinWheelOption } from '../../models/games/spinwheel.model';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class MillionaireQuestionsService {

  private answerSelected = new Subject<any>();
  answerSelected$ = this.answerSelected.asObservable();



    constructor(private http: HttpClient) { 
    }

  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getQuestionByDifficulty(difficulty: Number): Observable<any>{
        return this.http.get(`/api/v1/millionaire/get/difficulty/${difficulty}`) 
      }
  //#endregion


  //#region POST FUNCTIONS

  //#endregion

  //#region Subjetcts
  // Service message commands
  announceNewQuestion(millionaireQuestion: MillionaireQuestion) {
    this.answerSelected.next(millionaireQuestion);
  }
  //#endregion
}
