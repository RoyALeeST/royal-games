import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EmpireSaysQuestion } from '../../models/games/empireSays.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmpireSaysService {
    currQuestion: EmpireSaysQuestion;


    constructor(private http: HttpClient) { }

  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getQuestionByDifficulty(): Observable<EmpireSaysQuestion>{
        return this.http.get(`/api/v1/empire-says/get/difficulty/1`).pipe(
          map(x => this.currQuestion = x)
        )
      }
  //#endregion


  //#region POST FUNCTIONS

  //#endregion

}
